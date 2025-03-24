
import { useNavigate, useSearchParams } from "react-router-dom"
import { MdLocationOn } from "react-icons/md"
import { Link } from "react-router-dom"
import { FaSearch, FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa"
import { useState, useEffect } from "react"
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react"
import Cont1 from "./Home/cont1"

function Job() {
  const navigate = useNavigate()
  // Add searchParams hook to handle URL parameters for pagination
  const [searchParams, setSearchParams] = useSearchParams()
  const [jobSearch, setJobSearch] = useState("")
  const [locationSearch, setLocationSearch] = useState("")
  const [currentLocation, setCurrentLocation] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  // Update jobs state to include pagination data
  const [jobs, setJobs] = useState({
    count: 0,
    num_pages: 0,
    limit: 20,
    page_number: 1,
    page_count: 0,
    next: null,
    previous: null,
    results: [],
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // Add currentPage state to track the current page
  const [currentPage, setCurrentPage] = useState(1)
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  })

  useEffect(() => {
    // Get page from URL or default to 1
    const pageParam = searchParams.get("page")
    const initialPage = pageParam ? Number.parseInt(pageParam) : 1
    setCurrentPage(initialPage)

    const fetchJobs = async () => {
      try {
        setLoading(true)
        // Update API call to include page parameter
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/jobs${initialPage > 1 ? `?page=${initialPage}` : ""}`,
        )

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        console.log("data: ", data)
        setJobs(data)
        setError(null)
      } catch (err) {
        console.error("Error fetching jobs:", err)
        setError("Failed to load jobs. Please try again later.")
      } finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [searchParams]) // Add searchParams as dependency to refetch when page changes

  const handleGetCurrentLocation = () => {
    setIsLoading(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
            )
            const data = await response.json()
            const locationName =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.suburb ||
              "Current Location"
            setCurrentLocation(locationName)
            setLocationSearch(locationName)
          } catch (error) {
            console.error("Error getting location name:", error)
            setCurrentLocation("Unable to get location")
          } finally {
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

  // Add function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page)
    setSearchParams({ page: page.toString() })
    // Scroll to top when changing pages for better UX
    window.scrollTo(0, 0)
  }

  const filteredJobs = jobs?.results
    ?.filter((job) => {
      const jobTitleMatch = job.job_title?.toLowerCase().includes(jobSearch.toLowerCase())
      const companyMatch =
        job.client && typeof job.client === "string"
          ? job.client.toLowerCase().includes(jobSearch.toLowerCase())
          : false

      return jobTitleMatch || companyMatch
    })
    .filter((job) => {
      const cityMatch = job.city?.toLowerCase().includes(locationSearch.toLowerCase())

      const postalCodeMatch = job.zip_code?.toString().includes(locationSearch)

      // Match either city or postal code (or both)
      return !locationSearch || cityMatch || postalCodeMatch
    })

  function decodeEntities(encodedString) {
    const textarea = document.createElement("textarea")
    textarea.innerHTML = encodedString
    return textarea.value
  }

  // Add function to generate pagination numbers
  const generatePaginationNumbers = () => {
    const totalPages = jobs.num_pages || 1
    const currentPageNum = jobs.page_number || 1

    const pages = []

    // Always show first page
    pages.push(1)

    // Calculate range around current page
    const start = Math.max(2, currentPageNum - 1)
    const end = Math.min(totalPages - 1, currentPageNum + 1)

    // Add ellipsis after first page if needed
    if (start > 2) {
      pages.push("...")
    }

    // Add pages around current page
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    // Add ellipsis before last page if needed
    if (end < totalPages - 1) {
      pages.push("...")
    }

    // Always show last page if there's more than one page
    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <>
      <Cont1 />
      <div className="bg-gray-100 sticky top-20 w-full z-10">
        <form
          // Update form submission to reset to page 1 when searching
          onSubmit={(e) => {
            e.preventDefault()
            setSearchParams({ page: "1" })
          }}
          className="flex flex-col gap-3 p-3 md:p-4 rounded-lg shadow bg-white mx-auto w-full md:w-11/12 max-w-4xl"
        >
          {/* First row: Job Search Input and Location Input */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Job Search Input */}
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
                placeholder="Search by job or skill"
                aria-label="Job Search"
                className="w-full pl-10 pr-4 py-2 outline-0 border rounded text-sm md:text-base"
              />
            </div>

            {/* Location Input */}
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
            </div>
            <button
              type="submit"
              className="px-4 text-lg py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              <p>Search {jobs.count} jobs</p>
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
          </div>
        </form>
      </div>
      <div className="p-6 bg-[#F9F5FF]">
        {loading ? (
          // Add loading spinner for better UX
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-5 lg:mx-10">
              {filteredJobs && filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white shadow-md p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="min-h-[36px] max-h-[52px] flex items-center break-words text-base sm:text-lg lg:text-lg font-semibold clamp-2-lines">
                      {job.job_title}
                    </h3>

                    <p className="min-h-12 max-h-14 text-gray-600 flex items-center gap-2.5 mt-2">
                      <MdLocationOn className="text-purple-500 min-w-5 max-w-5 h-4 sm:w-5 sm:h-5" /> {job.city}{" "}
                      {!job.city ? "" : ","} {job.country}
                    </p>
                    <div className="mt-2">
                      <p className="text-gray-600 font-semibold">
                        Experience: <span>{job.experience} yr</span>
                      </p>
                    </div>
                    <span className="flex gap-2 space-x-2.5 text-blue-500 font-semibold mt-2">
                      <CalendarDays />
                      {job.job_start_date ? job.job_start_date : "Not Specified"}
                    </span>
                    <Link to={`/jobdetails/${job.id}`}>
                      <button className="mt-4 w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg py-1 transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-500 text-lg">No jobs found matching your search criteria.</p>
                </div>
              )}
            </div>

            {/* Add Pagination Component */}
            {jobs.num_pages > 1 && (
              <div className="flex justify-center mt-8">
                <nav className="flex items-center gap-1">
                  {/* Previous Page Button */}
                  <button
                    onClick={() => jobs.previous && handlePageChange(jobs.page_number - 1)}
                    disabled={!jobs.previous}
                    className={`p-2 rounded-md ${
                      !jobs.previous ? "text-gray-400 cursor-not-allowed" : "text-blue-500 hover:bg-blue-50"
                    }`}
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {/* Page Numbers */}
                  {generatePaginationNumbers().map((page, index) =>
                    page === "..." ? (
                      <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-500">
                        ...
                      </span>
                    ) : (
                      <button
                        key={`page-${page}`}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-1 rounded-md ${
                          page === jobs.page_number ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-50"
                        }`}
                      >
                        {page}
                      </button>
                    ),
                  )}

                  {/* Next Page Button */}
                  <button
                    onClick={() => jobs.next && handlePageChange(jobs.page_number + 1)}
                    disabled={!jobs.next}
                    className={`p-2 rounded-md ${
                      !jobs.next ? "text-gray-400 cursor-not-allowed" : "text-blue-500 hover:bg-blue-50"
                    }`}
                    aria-label="Next page"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default Job

