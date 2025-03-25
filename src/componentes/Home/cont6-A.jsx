import React from "react";
import "./infinite.css";



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
                className="bg-gray-100 h-20 w-[200px] object-contain lg:object-fill "
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
                className="bg-gray-100 h-20 w-[200px] object-contain lg:object-fill"
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
