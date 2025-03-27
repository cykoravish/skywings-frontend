
/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom"
import { MdLocationOn } from "react-icons/md"
import { Link } from "react-router-dom"
import { CalendarDays } from "lucide-react"
import { FaSearch, FaMapMarkerAlt, FaLocationArrow, FaChevronLeft, FaChevronRight } from "react-icons/fa"

import { useState, useEffect, useRef, useCallback } from "react"

function Cont2() {
  const navigate = useNavigate()
  const [jobSearch, setJobSearch] = useState("")
  const [locationSearch, setLocationSearch] = useState("")
  const [currentLocation, setCurrentLocation] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [jobs, setJobs] = useState({ count: 0, results: [] })
  const [initialJobs, setInitialJobs] = useState({ count: 0, results: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  })
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [isSearching, setIsSearching] = useState(false)

  const carouselRef = useRef(null)
  const initialLoadRef = useRef(true)
  const abortControllerRef = useRef(null)

  // Check screen size with more granular breakpoints
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      setScreenSize({
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1024,
        isDesktop: width >= 1024,
      })
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  const handleGetCurrentLocation = () => {
    setIsLoading(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            // Reverse geocoding to get location name from coordinates
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
            )
            const data = await response.json()

            // Extract city name or area from the response
            const locationName =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.suburb ||
              "Current Location"

            setCurrentLocation(locationName)
            setLocationSearch(locationName)
            setIsLoading(false)
          } catch (error) {
            console.error("Error getting location name:", error)
            setCurrentLocation("Unable to get location")
            setIsLoading(false)
          }
        },
        (error) => {
          console.error("Error getting location:", error)
          setCurrentLocation("Location access denied")
          setIsLoading(false)
        },
      )
    } else {
      setCurrentLocation("Geolocation not supported")
      setIsLoading(false)
    }
  }

  // Carousel navigation
  const nextSlide = () => {
    if (currentSlide < filteredJobs.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      setCurrentSlide(0) // Loop back to first slide
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    } else {
      setCurrentSlide(filteredJobs.length - 1) // Loop to last slide
    }
  }

  // Update carousel position when currentSlide changes
  useEffect(() => {
    if (carouselRef.current && !screenSize.isDesktop) {
      carouselRef.current.scrollTo({
        left: currentSlide * carouselRef.current.offsetWidth,
        behavior: "smooth",
      })
    }
  }, [currentSlide, screenSize.isDesktop])

  // Initial load of jobs
  useEffect(() => {
    const fetchJobs = async () => {
      if (!initialLoadRef.current) return

      console.log("Initial loading of jobs")
      try {
        setLoading(true)
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs`)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        console.log("Response of initial job load:", data)
        setJobs(data)
        setInitialJobs(data) // Store initial jobs for reference
        setError(null)
        initialLoadRef.current = false
      } catch (err) {
        console.error("Error fetching jobs:", err)
        setError("Failed to load jobs. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()

    // Cleanup function to cancel any pending requests when component unmounts
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [])

  // Determine number of columns based on screen size
  const getGridCols = () => {
    if (screenSize.isDesktop) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
    if (screenSize.isTablet) return "grid-cols-1 sm:grid-cols-2"
    return "grid-cols-1"
  }

  // Sort jobs based on creation date or start date (newest first)
  const sortJobsByDate = (jobs) => {
    if (!jobs || !Array.isArray(jobs)) return []

    return [...jobs].sort((a, b) => {
      // Try to use creation_date if available
      if (a.creation_date && b.creation_date) {
        return new Date(b.creation_date) - new Date(a.creation_date)
      }

      // Fall back to job_start_date
      if (a.job_start_date && b.job_start_date) {
        return new Date(b.job_start_date) - new Date(a.job_start_date)
      }

      // If no dates available, keep original order
      return 0
    })
  }

  // Filter jobs based on search criteria
  const filteredJobs = sortJobsByDate(
    jobs?.results
      ?.filter((job) => {
        if (!jobSearch) return true

        const jobTitleMatch = job.job_title?.toLowerCase().includes(jobSearch.toLowerCase())
        const companyMatch = job.client?.toLowerCase().includes(jobSearch.toLowerCase())
        const skillsMatch = job.primary_skills?.toLowerCase().includes(jobSearch.toLowerCase())

        return jobTitleMatch || companyMatch || skillsMatch
      })
      .filter((job) => {
        if (!locationSearch) return true

        const cityMatch = job.city?.toLowerCase().includes(locationSearch.toLowerCase())
        const countryMatch = job.country?.toLowerCase().includes(locationSearch.toLowerCase())
        const postalCodeMatch = job.zip_code?.toString().includes(locationSearch)

        return cityMatch || countryMatch || postalCodeMatch
      })
      .slice(0, 5),
  )

  function decodeEntities(encodedString) {
    if (!encodedString) return ""
    const textarea = document.createElement("textarea")
    textarea.innerHTML = encodedString
    return textarea.value
  }

  // Improved debounced search function
  const handleSearch = useCallback(() => {
    // Clear any existing timeout
    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }

    // Cancel any ongoing fetch requests
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    // If both search fields are empty, restore initial jobs
    if (!jobSearch && !locationSearch) {
      setJobs(initialJobs)
      setIsSearching(false)
      return
    }

    // Set a flag to indicate search is in progress
    setIsSearching(true)

    // Create a new timeout
    const timeout = setTimeout(async () => {
      try {
        setLoading(true)

        // Create a new AbortController for this request
        abortControllerRef.current = new AbortController()
        const signal = abortControllerRef.current.signal

        const params = new URLSearchParams()
        if (jobSearch) params.append("query", jobSearch)
        if (locationSearch) params.append("location", locationSearch)

        console.log(`Searching jobs with params: ${params.toString()}`)
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/searchjobs?${params.toString()}`, { signal })

        if (signal.aborted) {
          console.log("Search request was aborted")
          return
        }

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        console.log(`Found ${data.count} matching jobs`)
        setJobs(data)
        setError(null)
        setCurrentSlide(0) // Reset to first slide when search results change
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Search request was aborted")
        } else {
          console.error("Error searching jobs:", err)
          setError("Failed to search jobs. Please try again later.")
        }
      } finally {
        setLoading(false)
        setIsSearching(false)
      }
    }, 500) // 500ms delay

    setSearchTimeout(timeout)
  }, [jobSearch, locationSearch, initialJobs])

  // Auto-search when inputs change
  useEffect(() => {
    handleSearch()
  }, [jobSearch, locationSearch, handleSearch])

  // Handle manual search button click
  const handleSearchClick = (e) => {
    e.preventDefault()

    // Clear any existing timeout to execute search immediately
    if (searchTimeout) {
      clearTimeout(searchTimeout)
      setSearchTimeout(null)
    }

    handleSearch()
  }

  // Handle clearing search inputs
  const handleClearSearch = () => {
    setJobSearch("")
    setLocationSearch("")
    setJobs(initialJobs)
    setCurrentSlide(0)
  }

  return (
    <>
      <div className="bg-gray-100 px-10 z-10 sticky top-14 pt-1.5 md:top-21 w-full">
        <form
          onSubmit={handleSearchClick}
          className="flex flex-col gap-3 p-3 md:p-4 rounded-lg shadow bg-white mx-auto w-full md:w-11/12 max-w-4xl"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <FaSearch
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={screenSize.isMobile ? 14 : 18}
              />
              <input
                type="text"
                name="job"
                value={jobSearch}
                onChange={(e) => setJobSearch(e.target.value)}
                placeholder="Job title or Keyword"
                aria-label="Job Search"
                className="w-full pl-10 pr-4 py-2 outline-0 border rounded text-sm md:text-base"
              />
              {jobSearch && (
                <button
                  type="button"
                  onClick={() => setJobSearch("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label="Clear job search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="relative flex-1">
              <FaMapMarkerAlt
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={screenSize.isMobile ? 14 : 18}
              />
              <input
                type="text"
                name="location"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
                placeholder="Location"
                aria-label="Location"
                className="w-full pl-10 pr-4 py-2 outline-0 border rounded text-sm md:text-base"
              />
              {locationSearch && (
                <button
                  type="button"
                  onClick={() => setLocationSearch("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label="Clear location search"
                >
                  ✕
                </button>
              )}
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className={`px-4 text-lg py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800 transition ${isSearching ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              <p>{isSearching ? "Searching..." : `Search ${initialJobs.count || 0} jobs`}</p>
            </button>
          </div>

          {/* Second row: Current Location button and display */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Use Current Location Button */}
            <p
              onClick={handleGetCurrentLocation}
              className="flex items-center justify-center gap-2 bg-white hover:underline rounded-lg px-3 py-2 text-gray-700 cursor-pointer transition w-full sm:w-auto text-sm md:text-base"
            >
              <FaLocationArrow className="text-blue-500" size={screenSize.isMobile ? 12 : 16} />
              {isLoading ? "Getting location..." : "Use Current Location"}
            </p>

            {currentLocation && (
              <div className="text-gray-700 text-xs sm:text-sm flex-1 mt-2 sm:mt-0">
                <span className="font-medium">Current: </span>
                {currentLocation}
              </div>
            )}

            {/* Clear all filters button */}
            {(jobSearch || locationSearch) && (
              <button type="button" onClick={handleClearSearch} className="text-blue-500 hover:text-blue-700 text-sm">
                Clear all filters
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Job Cards Section */}
      <div className="flex flex-col items-center w-full p-3 md:p-6 bg-[#F9F5FF]">
        {/* Desktop View - Grid Layout */}
        {screenSize.isDesktop ? (
          <div className="">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <div className="text-red-500 bg-red-100 p-4 rounded-lg">{error}</div>
            ) : (
              <>
                <div className="text-center mb-4">
                  <h2 className="text-lg font-semibold">
                    {jobSearch || locationSearch
                      ? `Found ${jobs.count || 0} matching jobs`
                      : `Showing ${Math.min(5, jobs.results?.length || 0)} of ${initialJobs.count || 0} jobs`}
                  </h2>
                </div>
                {filteredJobs?.length > 0 ? (
                  <div className={`grid ${getGridCols()} gap-2 mt-6 w-full max-w-6xl`}>
                    {filteredJobs.map((job, index) => (
                      <div
                        key={job.id || index}
                        className="bg-white shadow-md rounded-2xl px-1 md:px-3.5 py-4 md:py-6 border w-full border-gray-200 transition-transform hover:scale-102 hover:shadow-lg min-h-[220px] flex flex-col"
                      >
                        <div className="">
                          <h3 className="min-h-[52px] max-h-[52px] flex items-center break-words text-base sm:text-lg lg:text-lg font-semibold min-clamp-2-lines max-clamp-2-lines">
                            {job.job_title}
                          </h3>
                        </div>

                        <div className="pt-5 text-gray-600 space-y-1">
                          <p className="flex items-center space-x-2 text-xs sm:text-sm lg:text-base">
                            <MdLocationOn className="text-purple-500 w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="flex flex-wrap min-h-8 max-h-12 w-full truncate">
                              {job.city} {!job.city ? "" : ","} {job.country}
                            </span>
                          </p>

                          <div className="space-y-1 mb-2">
                            <p className="text-gray-600 font-semibold">
                              Experience: <span>{job.experience} yr</span>
                            </p>
                          </div>
                          <span className="flex gap-2 space-x-2.5 text-blue-500 font-semibold">
                            <CalendarDays />
                            {job.job_start_date}
                          </span>
                          <Link to={`/jobdetails/${job.id}`}>
                            <button className="mt-4 w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg py-1">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-6 bg-white rounded-lg shadow mt-6 w-full max-w-md">
                    <p className="text-gray-600">No jobs found matching your search criteria.</p>
                    <button onClick={handleClearSearch} className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg">
                      Clear filters
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ) : (
          /* Mobile and Tablet View - Carousel Layout */
          <div className="w-full max-w-md mt-6 md:mt-10 px-2">
            {/* Loading State */}
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <div className="text-red-500 bg-red-100 p-4 rounded-lg">{error}</div>
            ) : filteredJobs?.length > 0 ? (
              /* Carousel Container */
              <div className="relative">
                {/* Carousel Navigation - Left Arrow */}
                {filteredJobs.length > 1 && (
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 z-10 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-100"
                    aria-label="Previous job"
                  >
                    <FaChevronLeft className="text-purple-500" size={screenSize.isMobile ? 12 : 16} />
                  </button>
                )}

                {/* Carousel Items */}
                <div ref={carouselRef} className="overflow-hidden">
                  <div className="flex transition-transform duration-300 ease-in-out">
                    <div className="min-w-full p-2">
                      <div className="bg-white shadow-md rounded-2xl p-4 md:p-6 border border-gray-200">
                        <div>
                          <h3 className="text-base md:text-lg font-semibold min-h-[52px] max-h-[52px] flex items-center break-words min-clamp-2-lines max-clamp-2-lines">
                            {filteredJobs[currentSlide]?.job_title}
                          </h3>
                        </div>

                        <div className="mt-3 md:mt-4 text-gray-600 space-y-2">
                          <p className="flex items-center text-xs md:text-sm space-x-2">
                            <MdLocationOn className="text-purple-500 w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="flex flex-wrap min-h-8 max-h-12 w-full truncate">
                              {filteredJobs[currentSlide]?.city} {!filteredJobs[currentSlide]?.city ? "" : ","}{" "}
                              {filteredJobs[currentSlide]?.country}
                            </span>
                          </p>
                          <div className="space-y-1 mb-2">
                            <p className="text-gray-600 font-semibold">
                              Experience: <span>{filteredJobs[currentSlide]?.experience} yr</span>
                            </p>
                          </div>
                          <span className="flex gap-2 space-x-2.5 text-blue-500 font-semibold">
                            <CalendarDays />
                            {filteredJobs[currentSlide]?.job_start_date}
                          </span>
                        </div>
                        <Link to={`/jobdetails/${filteredJobs[currentSlide]?.id}`}>
                          <button className="mt-3 md:mt-4 w-full py-1.5 md:py-2 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition cursor-pointer text-sm md:text-base">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carousel Navigation - Right Arrow */}
                {filteredJobs.length > 1 && (
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 z-10 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-100"
                    aria-label="Next job"
                  >
                    <FaChevronRight className="text-purple-500" size={screenSize.isMobile ? 12 : 16} />
                  </button>
                )}
              </div>
            ) : (
              <div className="text-center p-6 bg-white rounded-lg shadow mt-6 w-full max-w-md">
                <p className="text-gray-600 text-sm md:text-base">No jobs found matching your search criteria.</p>
                <button
                  onClick={handleClearSearch}
                  className="mt-3 px-4 py-2 bg-purple-500 text-white rounded-lg text-sm md:text-base"
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* Carousel Indicators */}
            {filteredJobs?.length > 1 && (
              <div className="flex justify-center mt-3 space-x-1.5">
                {filteredJobs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 w-1.5 rounded-full transition-all ${
                      currentSlide === index ? "bg-purple-500 w-3" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Current Slide / Total Slides */}
            {filteredJobs?.length > 0 && (
              <p className="text-center mt-2 text-xs text-gray-500">
                {currentSlide + 1} of {filteredJobs.length}
              </p>
            )}
          </div>
        )}

        <button
          onClick={() => {
            navigate("/job")
            window.scrollTo(0, 0) // Scroll to top
          }}
          className="text-blue-500 px-14 mt-10 rounded-full hover:bg-blue-500 hover:text-white mb-10 font-semibold py-2 border border-blue-500"
        >
          See more
        </button>
      </div>
    </>
  )
}

export default Cont2

