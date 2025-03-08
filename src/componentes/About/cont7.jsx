import React from "react";
import img19 from "../../assets/products/image 19.png";
import img20 from "../../assets/products/image 20.png";

import reddot from "../../assets/products/reddot.png";
import Cont1A from "../Home/cont1-A";

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
              The world of job hunting and hiring can feel overwhelming. We're
              here to change that. Whether you're just starting your career or
              looking for your next big break, Assured Job simplifies the
              process so you can focus on what matters.
            </p>
            <p className="text-gray-600 mb-4">
              The world of job hunting and hiring can feel overwhelming. We're
              here to change that. Whether you're just starting your career or
              looking for your next big break, Assured Job simplifies the
              process so you can focus on what matters.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've grown into a trusted platform that connects
              job seekers with opportunities that truly align with their skills
              and aspirations.
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
              The world of job hunting and hiring can feel overwhelming. We're
              here to change that. Whether you're just starting your career or
              looking for your next big break, Assured Job simplifies the
              process.
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
