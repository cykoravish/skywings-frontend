import React from "react";
import group from "../../assets/products/Group (1).png";
import group2 from "../../assets/products/Group.png";

const images = [group2, group, group2, group, group2, group, group, group2, group, group2, group, group2];

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
