import React from "react";
import "./infinite.css";

// Import Images
// import group2 from "../../../public/Brand/hdfc.jpg";

// import gr from "../../../public/Brand/img2.avif";
// import img2 from "../../../public/Brand/IndiaFirst.png";
// import logo from "../../../public/Brand/logo_.png";
// import first from "../../../public/Brand/first.png";
// import grou from "../../../public/Brand/hhhh.jpg";
// import a from "../../../public/Brand/b.webp";
// import b from "../../../public/Brand/c.png";
// import c from "../../../public/Brand/d.webp";
// import d from "../../../public/Brand/e.png";
// import f from "../../../public/Brand/f.png";
// import g from "../../../public/Brand/g.webp";
// import h from "../../../public/Brand/h.png";
// import i from "../../../public/Brand/i.webp";
// import j from "../../../public/Brand/j.png";
// import k from "../../../public/Brand/k.png";
// import l from "../../../public/Brand/l.png";
// import m from "../../../public/Brand/m.webp";
// import n from "../../../public/Brand/n.webp";
// import o from "../../../public/Brand/o.png";
// import p from "../../../public/Brand/p.png";
// import q from "../../../public/Brand/q.png";
// import r from "../../../public/Brand/r.png";
// import s from "../../../public/Brand/s.png";
// import t from "../../../public/Brand/t.png";

const image=[
  "/Brand/hdfc.jpg",
  "/Brand/img2.avif",
  "/Brand/IndiaFirst.png",
 
  "/Brand/first.png",
  "/Brand/hhhh.jpg",
 "/Brand/c.png",
  "/Brand/d.webp",
  "/Brand/e.png",
  "/Brand/f.png",
  "/Brand/g.webp",
  "/Brand/h.png",
  "/Brand/hdfc.jpg",
  "/Brand/img2.avif",
  "/Brand/IndiaFirst.png",
 
  "/Brand/first.png",
  "/Brand/hhhh.jpg",
 "/Brand/c.png",
  "/Brand/d.webp",
  "/Brand/e.png",
  "/Brand/f.png",
  "/Brand/g.webp",
  "/Brand/h.png",
  "/Brand/hdfc.jpg",
  "/Brand/img2.avif",
  "/Brand/IndiaFirst.png",
 
  "/Brand/first.png",
  "/Brand/hhhh.jpg",
 "/Brand/c.png",
  "/Brand/d.webp",
  "/Brand/e.png",
  "/Brand/f.png",
  "/Brand/g.webp",
  "/Brand/h.png",

 

]

const images = [
  "/Brand/i.webp",
  "/Brand/j.png",
   "/Brand/k.png",
  "/Brand/l.png",
  "/Brand/m.webp",
  "/Brand/n.webp",
  "/Brand/o.png",
  "/Brand/p.png",
  "/Brand/q.png",
  "/Brand/r.png",
  "/Brand/s.png",
  "/Brand/t.png",
  "/Brand/i.webp",
  "/Brand/j.png",
   "/Brand/k.png",
  "/Brand/l.png",
  "/Brand/m.webp",
  "/Brand/n.webp",
  "/Brand/o.png",
  "/Brand/p.png",
  "/Brand/q.png",
  "/Brand/r.png",
  "/Brand/s.png",
  "/Brand/t.png",
  "/Brand/i.webp",
  "/Brand/j.png",
   "/Brand/k.png",
  "/Brand/l.png",
  "/Brand/m.webp",
  "/Brand/n.webp",
  "/Brand/o.png",
  "/Brand/p.png",
  "/Brand/q.png",
  "/Brand/r.png",
  "/Brand/s.png",
  "/Brand/t.png",
  "/Brand/i.webp",
  "/Brand/j.png",
   "/Brand/k.png",
  "/Brand/l.png",
  "/Brand/m.webp",
  "/Brand/n.webp",
  "/Brand/o.png",
  "/Brand/p.png",
  "/Brand/q.png",
  "/Brand/r.png",
  "/Brand/s.png",
  "/Brand/t.png",
  "/Brand/i.webp",
  "/Brand/j.png",
   "/Brand/k.png",
  "/Brand/l.png",
  "/Brand/m.webp",
  "/Brand/n.webp",
  "/Brand/o.png",
  "/Brand/p.png",
  "/Brand/q.png",
  "/Brand/r.png",
  "/Brand/s.png",
  "/Brand/t.png",
];


const Cont6A = () => {
  return (
    
    <div className="flex flex-col">
    <section className="py-10 bg-white text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-8">
        Top Partnership
      </h2>

      {/* Infinite Scrolling Wrapper */}
      <div className="overflow-hidden w-full">
        <div className="flex space-x-3 animate-scroll">
          {images.map((img, index) => (
            <div
              key={index}
              className="bg-gray-100 p-2 rounded-lg flex justify-center items-center min-h-[70px] lg:min-h-[80px] max-h-[70px] lg:max-h-[100px] min-w-[100px] lg:min-w-[160px]"
            >
              <img
                src={img}
                alt={`Partner ${index + 1}`}
                className="bg-gray-100 h-20 w-[200px] object-contain lg:object-none "
              />
            </div>
          ))}
        </div>
      </div>

      
    </section>
    <section className="py-10 bg-white text-center">
      
      {/* Infinite Scrolling Wrapper */}
      <div className="overflow-hidden w-full">
        <div className="flex space-x-3 animate-scroll">
          {image.map((img, index) => (
            <div
              key={index}
              className="bg-gray-100 p-2 rounded-lg flex justify-center items-center min-h-[70px] lg:min-h-[80px] max-h-[70px] lg:max-h-[100px] min-w-[100px] lg:min-w-[160px]"
            >
              <img
                src={img}
                alt={`Partner ${index + 1}`}
                className="bg-gray-100 h-20 w-[200px] object-contain lg:object-none"
              />
            </div>
          ))}
        </div>
      </div>

      
    </section>
  
  </div>

  
  );
};

export default Cont6A;
