import img19 from "../../assets/products/image 19.png";
import img20 from "../../assets/products/image 20.png";

import reddot from "../../assets/products/reddot.png";
import Cont1A from "../Home/cont1-A";
import img21 from "../../assets/iso3.png";

// eslint-disable-next-line no-unused-vars
const awards = new Array(10).fill({ title: "Red Dot", image: reddot });

const Cont7 = () => {
  return (
    <>
      <div className="bg-[#f5f5f5] min-h-screen flex flex-col items-center p-6 md:p-10">
        {/* ABOUT TAG */}
        <div className="text-center mb-6 md:mb-8">
          <span className="bg-purple-200 text-purple-700 px-4 py-1 rounded-full text-sm font-medium">
            ABOUT
          </span>
        </div>

        {/* FIRST GRID SECTION */}
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 ">
          {/* LEFT TEXT CONTENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Assured Job started as a simple idea: to make job searching
              stress-free and recruitment faster.
            </h2>
            <p className="text-gray-600 mb-4">
              Skywings Advisors Private Limited, headquartered in New Delhi, is
              a leading force in the placement and recruitment industry. Our
              expertise spans across diverse recruitment disciplines, including
              Legal, Finance, IT, Sales & Marketing, Healthcare, Automobile,
              Training & Education, Industrial & Warehouse, Construction,
              E-Commerce, and more. We are committed to understanding your
              business as deeply as you do—tailoring our services to align
              perfectly with your goals. Building that connection is paramount,
              allowing us to bring both comprehensive recruitment knowledge and
              cutting-edge assessment methods to the table.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center ">
            <img
              src={img19}
              alt="Interview Illustration"
              className="w-full md:w-[80%] rounded-lg "
            />
          </div>
        </div>

        {/* SECOND GRID SECTION (MISSION) */}
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-10 md:mt-10 sm:mt-0">
          {/* LEFT IMAGE */}
          <div className="flex justify-center order-1 md:order-none">
            <img
              src={img20}
              alt="Work Balance Illustration"
              className="w-full md:w-[80%] rounded-lg "
            />
          </div>

          {/* RIGHT TEXT CONTENT */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-4">
              The world of job hunting and hiring can feel overwhelming.
              We&apos;re here to change that. Whether you&apos;re just starting
              your career or looking for your next big break, Assured Job
              simplifies the process.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>To make job searching and recruitment effortless.</li>
              <li>
                To empower job seekers by connecting them with roles that fit
                their ambitions.
              </li>
              <li>To assist employers in finding top-tier talent, faster.</li>
            </ul>
          </div>
        </div>

        {/* THIRD GRID SECTION */}
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-5 ">
          {/* LEFT TEXT CONTENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Skywings Advisors Private Limited: Now ISO Certified!
            </h2>
            <p className="text-gray-600 mb-4">
              We are proud to announce that Skywings Advisors Private Limited
              has officially achieved ISO Certification, marking a significant
              milestone in our commitment to excellence. This certification
              reflects our dedication to maintaining the highest standards in
              recruitment, placement, and HR solutions across multiple
              industries.
            </p>
            <p className="font-semibold mt-4 text-gray-600">
              With this recognition, we reinforce our promise to provide:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Quality-Driven Recruitment Services</li>
              <li>Enhanced Client & Candidate Satisfaction</li>
              <li>Efficient and Transparent Processes</li>
              <li>Compliance with International Standards</li>
            </ul>

            <p className="text-gray-600 mt-2">
              Our ISO Certification is a testament to our unwavering focus on
              professionalism, reliability, and continuous improvement. Whether
              in Legal, Finance, IT, Healthcare, Sales & Marketing, Automobile,
              Education, E-Commerce, or other sectors, we ensure best-in-class
              hiring solutions tailored to your business needs.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center items-center">
            <img
              src={img21}
              alt="Interview Illustration"
              className="w-full h-fit rounded-lg "
            />
          </div>
        </div>
      </div>
      <Cont1A></Cont1A>
      {/* -------------------------------RED DOT---------------------------------- */}

      {/* <div className="bg-white w-full flex flex-col p-6 sm:p-10 mt-12 sm:mt-16">
        <div className="text-center mb-8">
          <span className="bg-purple-50 text-purple-500 px-4 py-1 rounded-full text-sm font-semibold">
            AWARDS
          </span>
          <h2 className="text-lg text-purple-400 my-4 sm:my-6">
            Our complete assistance will be with you, and we guide you
            accordingly.
          </h2>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:mx-20 gap-6 w-full ">
          {awards.map((award, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex flex-col items-center border-gray-300  "
            >
              <img
                src={award.image}
                alt={award.title}
                className="w-20 sm:w-24 h-20 sm:h-24 object-contain mb-3"
              />
              <p className="text-gray-700 font-medium text-center text-sm sm:text-base">
                {award.title}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};
export default Cont7;
