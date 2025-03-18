// eslint-disable-next-line no-unused-vars
import React from "react";
import img1 from "../../assets/Brand/e.png"
import group2 from "../../assets/Brand/hdfc.jpg";
import gr from "../../assets/Brand/img2.avif";
import img2 from "../../assets/Brand/indiaFirst.png";
import logo from "../../assets/Brand/logo_.png";
import logo1 from "../../assets/Brand/name.png";
import gro from "../../assets/Brand/e.png";
import first from "../../assets/Brand/first.png";

import grou from "../../assets/Brand/hhhh.jpg";


const images = [img1, img2, group2, , logo, logo1, gr, , gro, , grou,first];

const Cont6A = () => {
  return (
    <section className="py-10 bg-white text-center">
      {/* Responsive Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-8">
        Top Partnership
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-2 sm:px-4 max-w-screen-xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-center items-center min-h-[80px]"
          >
            <img src={img} alt={`Partner ${index + 1}`} className="h-10 sm:h-12 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cont6A;
