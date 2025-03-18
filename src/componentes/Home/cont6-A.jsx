// eslint-disable-next-line no-unused-vars
import React from "react";
import img1 from "../../assets/Brand/e.png";
import group2 from "../../assets/Brand/hdfc.jpg";
import gr from "../../assets/Brand/img2.avif";
import img2 from "../../assets/Brand/IndiaFirst.png";
import logo from "../../assets/Brand/logo_.png";
import logo1 from "../../assets/Brand/name.png";
import gro from "../../assets/Brand/e.png";
import first from "../../assets/Brand/first.png";
import grou from "../../assets/Brand/hhhh.jpg";
import a from '../../assets/Brand/b.webp';
import b from '../../assets/Brand/c.png';
import c from '../../assets/Brand/d.webp';
import d from '../../assets/Brand/e.png';
import f from '../../assets/Brand/f.png';
import g from '../../assets/Brand/g.webp';
import h from '../../assets/Brand/h.png';
import i from '../../assets/Brand/i.webp';
import j from '../../assets/Brand/j.png';
import k from '../../assets/Brand/k.png';
import l from '../../assets/Brand/l.png';
import m from '../../assets/Brand/m.webp';
import n from '../../assets/Brand/n.webp';
import o from '../../assets/Brand/o.png';
import p from '../../assets/Brand/p.png';
import q from '../../assets/Brand/q.png';
import r from '../../assets/Brand/r.png';
import s from '../../assets/Brand/s.png';
import t from '../../assets/Brand/t.png';
import './infinite.css'

const images = [
  img1, img2,  d, f, g, h, i, j, k, l, m, n, o, p, q, r, s, tgroup2, logo, logo1, gr, gro, grou, first, a, b, c,  img1, img2,  d, f, g, h, i, j, k, l, m, n, o, p, q, r, s, tgroup2, logo, logo1, gr, gro, grou, first, a, b, c,  img1, img2,  d, f, g, h, i, j, k, l, m, n, o, p, q, r, s, tgroup2, logo, logo1, gr, gro, grou, first, a, b, c,  img1, img2,  d, f, g, h, i, j, k, l, m, n, o, p, q, r, s, tgroup2, logo, logo1, gr, gro, grou, first, a, b, c,  img1, img2,  d, f, g, h, i, j, k, l, m, n, o, p, q, r, s, tgroup2, logo, logo1, gr, gro, grou, first, a, b, c,  img1, img2,  d, f, g, h, i, j, k, l, m, n, o, p, q, r, s, tgroup2, logo, logo1, gr, gro, grou, first, a, b, c,
];
const image = [
  t,s,r,h,g,f,d,c,logo1,logo,group2,img2,img1,b,a,first,grou,gro,gr,q,p,o,n,m,l,k,j,i,t,s,r,h,g,f,d,c,logo1,logo,group2,img2,img1,b,a,first,grou,gro,gr,q,p,o,n,m,l,k,j,i,t,s,r,h,g,f,d,c,logo1,logo,group2,img2,img1,b,a,first,grou,gro,gr,q,p,o,n,m,l,k,j,i,t,s,r,h,g,f,d,c,logo1,logo,group2,img2,img1,b,a,first,grou,gro,gr,q,p,o,n,m,l,k,j,i,t,s,r,h,g,f,d,c,logo1,logo,group2,img2,img1,b,a,first,grou,gro,gr,q,p,o,n,m,l,k,j,i,t,s,r,h,g,f,d,c,logo1,logo,group2,img2,img1,b,a,first,grou,gro,gr,q,p,o,n,m,l,k,j,i,


];


const Cont6A = () => {
  return (
<>
<div className="flex flex-col">
<section className="py-10 bg-white text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-8">
        Top Partnership
      </h2>

      {/* Infinite Scrolling Wrapper */}
      <div className="overflow-hidden w-full">
        <div className="flex space-x-2 animate-scroll">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-center items-center min-h-[80px]"
            >
              <img src={img} alt={`Partner ${index + 1}`} className="h-10 sm:h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-10 bg-white text-center">
      {/* Heading */}
     

      {/* Infinite Scrolling Wrapper */}
      <div className="overflow-hidden w-full">
        <div className="flex space-x-2 animate-scroll">
          {[...image, ...images].map((img, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-center items-center min-h-[80px]"
            >
              <img src={img} alt={`Partner ${index + 1}`} className="h-10 sm:h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
</div>

</>
  );
};

export default Cont6A;
