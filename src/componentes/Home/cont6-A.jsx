import React from "react";
import "./infinite.css";

// Import Images
import group2 from "../../assets/Brand/hdfc.jpg";
import gr from "../../assets/Brand/img2.avif";
import img2 from "../../assets/Brand/IndiaFirst.png";
import logo from "../../assets/Brand/logo_.png";
import first from "../../assets/Brand/first.png";
import grou from "../../assets/Brand/hhhh.jpg";
import a from "../../assets/Brand/b.webp";
import b from "../../assets/Brand/c.png";
import c from "../../assets/Brand/d.webp";
import d from "../../assets/Brand/e.png";
import f from "../../assets/Brand/f.png";
import g from "../../assets/Brand/g.webp";
import h from "../../assets/Brand/h.png";
import i from "../../assets/Brand/i.webp";
import j from "../../assets/Brand/j.png";
import k from "../../assets/Brand/k.png";
import l from "../../assets/Brand/l.png";
import o from "../../assets/Brand/o.png";
import p from "../../assets/Brand/p.png";
import q from "../../assets/Brand/q.png";
import t from "../../assets/Brand/t.png";

// Combine all images
const allImages = [group2, gr, img2, logo, first, grou, a, b, c, d, f, g, h, i, j, k, l, o, p, q, t];

// Split into two non-overlapping halves
const midIndex = Math.ceil(allImages.length / 2);
const firstHalf = allImages.slice(0, midIndex);
const secondHalf = allImages.slice(midIndex);

// Image Scroller Component (Handles Infinite Scroll)
const ImageScroller = ({ images, reverse }) => (
  <div className=" overflow-hidden w-full">
    <div
      className={`flex items-center space-x-4 ${reverse ? "animate-scroll" : "animate-scroll"} flex-nowrap`}
    >
      {images.concat(images).map((img, index) => (
        <div key={index} className="min-w-[120px] p-2">
          <img src={img} alt={`Partner ${index + 1}`} className="h-12 object-contain" />
        </div>
      ))}
    </div>
  </div>
);

const ImageScrollerforsmaller = ({ images, reverse }) => (
  <div className=" overflow-hidden w-full">
    <div
      className={`flex items-center space-x-4 ${reverse ? "animate-scroll_smaller" : "animate-scroll_smaller"} flex-nowrap`}
    >
      {images.concat(images).map((img, index) => (
        <div key={index} className="min-w-[120px] p-2">
          <img src={img} alt={`Partner ${index + 1}`} className="h-12 object-contain" />
        </div>
      ))}
    </div>
  </div>
);

const Cont6A = () => {
  return (
   <>
     {/* //for large device */}
    <div className="hidden md:flex flex-col mx-13">
      {/* Section 1 */}
      <section className="py-10 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-8">
          Top Partnerships
        </h2>
        <ImageScroller images={firstHalf} />
      </section>

      {/* Section 2 (Scrolls in Opposite Direction) */}
      <section className="py-10 bg-white text-center">
        <ImageScroller images={secondHalf} reverse />
      </section>
    </div>
    {/* //for small device */}
    <div className="flex lg:hidden flex-col mx-13">
    {/* Section 1 */}
    <section className="py-10 bg-white text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-8">
        Top Partnerships
      </h2>
      <ImageScrollerforsmaller images={firstHalf} />
    </section>

    {/* Section 2 (Scrolls in Opposite Direction) */}
    <section className="py-10 bg-white text-center">
      <ImageScrollerforsmaller images={secondHalf} reverse />
    </section>
  </div>
   </>
  );
};

export default Cont6A;
