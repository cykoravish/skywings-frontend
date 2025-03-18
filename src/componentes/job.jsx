/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import bag from "./../assets/products/Vector.png";
import { Link } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";
import { useState, useEffect } from "react";
import { CalendarDays } from "lucide-react";
import Cont1 from "./Home/cont1";

function Job() {
  const navigate = useNavigate();
  const [jobSearch, setJobSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [currentLocation, setCurrentLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/jobs`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setJobs(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleGetCurrentLocation = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            );
            const data = await response.json();
            const locationName =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.suburb ||
              "Current Location";
            setCurrentLocation(locationName);
            setLocationSearch(locationName);
          } catch (error) {
            console.error("Error getting location name:", error);
            setCurrentLocation("Unable to get location");
          } finally {
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

  // const filteredJobs = jobs
  //   .filter((job) => job.title.toLowerCase().includes(jobSearch.toLowerCase()))
  //   .filter((job) => job.location.toLowerCase().includes(locationSearch.toLowerCase()));
  const filteredJobs = jobs?.results
    ?.filter((job) => {
      const jobTitleMatch = job.position_title
        ?.toLowerCase()
        .includes(jobSearch.toLowerCase());
      const companyMatch =
        job.company && typeof job.company === "string"
          ? job.company.toLowerCase().includes(jobSearch.toLowerCase())
          : false;

      return jobTitleMatch || companyMatch;
    })
    .filter((job) => {
      const cityMatch = job.city
        ?.toLowerCase()
        .includes(locationSearch.toLowerCase());

      const postalCodeMatch = job.postal_code
        ?.toString()
        .includes(locationSearch);

      // Match either city or postal code (or both)
      return cityMatch || postalCodeMatch;
    });

  function decodeEntities(encodedString) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = encodedString;
    return textarea.value;
  }

  return (
    <>
      <Cont1 />
      <div className="bg-gray-100  sticky top-20 w-full">
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
            <button className="px-4 text-lg py-2 bg-blue-500 text-white  rounded-lg ">
              <p>search {jobs.count} jobs</p>
            </button>
            {/* Submit Button */}
            {/* <button
             type="submit"
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
              <FaLocationArrow
                className="text-blue-500"
                size={screenSize.isMobile ? 12 : 16}
              />
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
      <div className="p-6 bg-[#F9F5FF]">
        {loading ? (
          <p>Loading jobs...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-5 lg:mx-10">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white shadow-md p-4 rounded-lg border border-gray-200"
              >
                <h3 className="min-h-[36px] max-h-[52px]  flex items-center break-words text-base sm:text-lg lg:text-lg font-semibold clamp-2-lines">
                  {job.position_title}
                </h3>

                {/* <p className="text-gray-500">{job.company}</p> */}
                <p className=" min-h-12 max-h-14 text-gray-600 flex items-center gap-2.5 ">
                  <MdLocationOn className="text-purple-500 min-w-5 max-w-5 h-4 sm:w-5 sm:h-5" />{" "}
                  {job.city} {!job.city ? "" : ","} {job.country}
                </p>
                {/* <span className="min-h-12 max-h-14 text-gray-600 flex items-center gap-2.5 mb-3">
                  skills:{" "}
                  {job.skills &&
                    decodeEntities(job.skills)
                      .split(",")
                      .map((skill) =>
                        skill.trim().replace(/^"|"$/g, "").slice(0, 10)
                      ) // trims, removes quotes, limits to 10 chars
                      .slice(0, 2)
                      .join(", ")}
                </span> */}
                <span className="flex gap-2 space-x-2.5 text-blue-500 font-semibold">
                  <CalendarDays />
                  {job.job_start_date ? job.job_start_date : "Not Specified"}
                </span>
                <Link to={`/jobdetails/${job.id}`}>
                  <button className="mt-4 w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg py-1">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Job;
