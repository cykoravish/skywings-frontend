

import { useNavigate } from "react-router-dom";
import img2 from "../../assets/products/image 2.png";
import { MdLocationOn } from "react-icons/md";
import bag from "../../assets/products/Vector.png";
import { Link } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt, FaLocationArrow, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import React, { useState, useEffect, useRef } from "react";

function Cont2() {
  const navigate = useNavigate();
  // const jobs = [
  //   { title: "Software Engineer", company: "TechVision", location: "Hyderabad", experience: "3 Years of experience" },
  //   { title: "Product Manager", company: "InnovateHub", location: "Bangalore", experience: "7 Years of experience" },
  //   { title: "Data Analyst", company: "DataWorks", location: "Pune", experience: "2 Years of experience" },
  //   { title: "HR Specialist", company: "PeopleFirst", location: "Mumbai", experience: "4 Years of experience" },
  //   { title: "Marketing Executive", company: "BrandBoost", location: "Delhi", experience: "3 Years of experience" },
  // ];
  // const [filteredJobs, setFilteredJobs] = useState([]);
  const [jobSearch, setJobSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true
  });
 
  const carouselRef = useRef(null);

  // Check screen size with more granular breakpoints
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1024,
        isDesktop: width >= 1024
      });
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/jobs");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setJobs(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs. Please try again later.");
        // Fallback to local data if API fails
        import("../../data").then((module) => {
          setJobs(module.jobs);
        });
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // const filteredJobs = jobs.filter((job) => 
  //   job.title.toLowerCase().includes(jobSearch.toLowerCase()) ||
  //   job.company.toLowerCase().includes(jobSearch.toLowerCase())
  // ).filter((job) =>
  //   job.location.toLowerCase().includes(locationSearch.toLowerCase())
  // );

  const handleGetCurrentLocation = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            // Reverse geocoding to get location name from coordinates
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            );
            const data = await response.json();
            
            // Extract city name or area from the response
            const locationName = data.address.city || 
                                 data.address.town || 
                                 data.address.village || 
                                 data.address.suburb ||
                                 "Current Location";
            
            setCurrentLocation(locationName);
            setLocationSearch(locationName);
            setIsLoading(false);
          } catch (error) {
            console.error("Error getting location name:", error);
            setCurrentLocation("Unable to get location");
            setIsLoading(false);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          setCurrentLocation("Location access denied");
          setIsLoading(false);
        }
      );
    } else {
      setCurrentLocation("Geolocation not supported");
      setIsLoading(false);
    }
  };

  // Carousel navigation
  const nextSlide = () => {
    if (currentSlide < filteredJobs.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0); // Loop back to first slide
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(filteredJobs.length - 1); // Loop to last slide
    }
  };

  // Update carousel position when currentSlide changes
  useEffect(() => {
    if (carouselRef.current && !screenSize.isDesktop) {
      carouselRef.current.scrollTo({
        left: currentSlide * carouselRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
    // useEffect(() => {
    //   setFilteredJobs(jobs);
    // }, [jobs]);
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/jobs");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setJobs(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs. Please try again later.");
        // Fallback to local data if API fails
        import("../../data").then((module) => {
          setJobs(module.jobs);
        });
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [currentSlide, screenSize.isDesktop]);

  // Determine number of columns based on screen size
  const getGridCols = () => {
    if (screenSize.isDesktop) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5";
    if (screenSize.isTablet) return "grid-cols-1 sm:grid-cols-2";
    return "grid-cols-1";
  };

  // const handleSearch = () => {
  //   const filtered = jobs
  //     .filter((job) => 
  //       job.title.toLowerCase().includes(jobSearch.toLowerCase()) ||
  //       (job.company && job.company.toLowerCase().includes(jobSearch.toLowerCase()))
  //     )
  //     .filter((job) => 
  //       job.location.toLowerCase().includes(locationSearch.toLowerCase())
  //     );
  
  //   setFilteredJobs(filtered);
  // };

  const filteredJobs = jobs
  .filter((job) => {
    const jobTitleMatch = job.title?.toLowerCase().includes(jobSearch.toLowerCase());
    const companyMatch = job.company && typeof job.company === "string"
      ? job.company.toLowerCase().includes(jobSearch.toLowerCase())
      : false;
    return jobTitleMatch || companyMatch;
  })
  .filter((job) => job.location?.toLowerCase().includes(locationSearch.toLowerCase()))
  .slice(0, 5);

  return (
    <>
    <div className="bg-gray-100  z-10 sticky top-15 sm:top-15 md:top-21 w-full ">
    <form
  action="/search"
  method="GET"
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
        required
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
    
    {/* Submit Button */}
    {/* <button
  type="button" // Change from submit to button
  onClick={handleSearch} // Add click event
  className="bg-blue-500 text-white rounded-lg hover:bg-blue-800 transition px-4 py-2 sm:w-40 text-sm md:text-base"
>
  Find a job
</button> */}
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

    {/* Display Current Location */}
    {/* {currentLocation && (
      <div className="text-gray-700 text-xs sm:text-sm flex-1 mt-2 sm:mt-0">
        <span className="font-medium">Current: </span>
        {currentLocation}
      </div>
    )} */}
  </div>
</form>
      </div>

    {/* Job Cards Section */}
    <div className="flex flex-col items-center w-full p-3 md:p-6 bg-[#F9F5FF]">
      {/* Desktop View - Grid Layout */}
      {screenSize.isDesktop ? (
        <div className=''>
           {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 bg-red-100 p-4 rounded-lg">{error}</div>
        ) : (
          <>
            <div className={`grid ${getGridCols()}  gap-1 mt-6  w-full max-w-6xl`}>
            
              
            {filteredJobs.map((job, index) => (
  <div
    key={index}
    className="bg-white shadow-md rounded-2xl px-2 md:px-3.5 py-4 md:py-6 border w-full border-gray-200 transition-transform hover:scale-102 hover:shadow-lg min-h-[220px] flex flex-col  "
  >
    <div className="">
    <h3 className="min-h-[36px] max-h-[52px]  flex items-center break-words text-base sm:text-lg lg:text-lg font-semibold clamp-2-lines">
  {job.title}
</h3>


      {/* <p className="text-gray-500 text-sm lg:text-base">
        {job.company}
      </p> */}
    </div>

    <div className="pt-5  text-gray-600 space-y-1">
    <p className="flex items-center space-x-2  text-xs sm:text-sm lg:text-base">
  <MdLocationOn className="text-purple-500 w-4 h-4 sm:w-5 sm:h-5" />
  <span className="flex flex-wrap min-h-8 max-h-12 w-full">{job.location}</span>
</p>
      <p className="flex min-h-10 max-h-10 items-center text-xs sm:text-sm lg:text-base space-x-2">
        <img
          src={bag || "/placeholder.svg"}
          alt="Experience Icon"
          className="w-4 h-4 sm:w-5 sm:h-5"
        />
        <span>{job.experience}</span>
      </p>
       <Link to={`/jobdetails/${job.id}`}>
                        <button className="mt-4 w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg py-1">
                          View Details
                        </button>
                      </Link>
    </div>
  </div>
))}

            </div>
            
          </>
        )}
             
        </div>
      ) : (
        /* Mobile and Tablet View - Carousel Layout */
        <div className="w-full max-w-md mt-6 md:mt-10 px-2">
          {/* Carousel Container */}
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
            <div 
              ref={carouselRef}
              className="overflow-hidden"
            >
              <div className="flex transition-transform duration-300 ease-in-out">
                {filteredJobs.length > 0 ? (
                  <div className="min-w-full p-2">
                    <div className="bg-white shadow-md rounded-2xl p-4 md:p-6 border border-gray-200">
                      <div>
                        <h3 className="text-base md:text-lg font-semibold">{filteredJobs[currentSlide].title}</h3>
                        <p className="text-gray-500 text-sm md:text-base">{filteredJobs[currentSlide].company}</p>
                      </div>

                      <div className="mt-3 md:mt-4 text-gray-600 space-y-2">
                        <p className="flex items-center text-xs md:text-sm space-x-2">
                          <span>
                            <MdLocationOn className="text-gray-400" />
                          </span>{" "}
                          <span>{filteredJobs[currentSlide].location}</span>
                        </p>
                        <p className="flex items-center text-xs md:text-sm space-x-2">
                          <span>
                            <img src={bag} alt="" className="w-4 h-4" />
                          </span>{" "}
                          <span>{filteredJobs[currentSlide].experience}</span>
                        </p>
                      </div>
                      <Link to="/jobdetails">
                        <button className="mt-3 md:mt-4 w-full py-1.5 md:py-2 border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-[#647DE7] hover:text-white transition cursor-pointer text-sm md:text-base">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <p className="text-center p-6 text-sm md:text-base">No jobs found matching your search criteria.</p>
                )}
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
          
          {/* Carousel Indicators */}
          {filteredJobs.length > 1 && (
            <div className="flex justify-center mt-3 space-x-1.5">
              {filteredJobs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${currentSlide === index ? 'bg-purple-500 w-3' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
          
          {/* Current Slide / Total Slides */}
          {filteredJobs.length > 0 && (
            <p className="text-center mt-2 text-xs text-gray-500">
              {currentSlide + 1} of {filteredJobs.length}
            </p>
          )}
        </div>
      )}

      {/* Show "No results" message if no jobs match the filters */}
      {filteredJobs.length === 0 && (
        <div className="text-center p-6 bg-white rounded-lg shadow mt-6 w-full max-w-md">
          <p className="text-gray-600 text-sm md:text-base">No jobs found matching your search criteria.</p>
          <button 
            onClick={() => {setJobSearch(''); setLocationSearch('');}}
            className="mt-3 px-4 py-2 bg-purple-500 text-white rounded-lg text-sm md:text-base"
          >
            Clear filters
          </button>
        </div>
      )}
       <button onClick={() => {
    navigate('/job');
    window.scrollTo(0, 0); // Scroll to top
  }} className="text-blue-500 px-14 mt-10 rounded-full hover:bg-blue-500 hover:text-white mb-10 font-semibold py-2 border border-blue-500">See more</button>
    </div>
    </>
  );
}

export default Cont2;