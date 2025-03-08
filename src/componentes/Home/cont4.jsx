import img from '../../assets/products/Vector (4).png'
import img1 from '../../assets/products/Vector2.png';
import img2 from '../../assets/products/Vector (3).png'
import img5 from '../../assets/products/Vector (5).png'
import img6 from '../../assets/products/Vector (6).png'
import img7 from '../../assets/products/Vector (7).png'
import img8 from '../../assets/products/Vector (8).png'
import img9 from '../../assets/products/Vector (9).png'
import img10 from '../../assets/products/Vector (10).png'
import img11 from '../../assets/products/Vector (11).png'
import img12 from '../../assets/products/Vector (12).png'
import img13 from '../../assets/products/Frame.png'
import img14 from '../../assets/products/Vector (14).png'
import img15 from '../../assets/products/Vector (15).png'
import img16 from '../../assets/products/Vector (16).png'
import img17 from '../../assets/products/Frame1.png'
import Cont6A from './cont6-A';
import Cont1A from './cont1-A';
export default function Cont4() {
  
  const industries = [
    { name: "Edtech", icon:img },
    { name: "Sales & Marketing", icon: img1 },
    { name: "Engineering", icon: img2 },
    { name: "Health care", icon: img5 },
    { name: "IT & ITES", icon: img6 },
    { name: "Manufacturing", icon: img7 },
    { name: "Telecom/ISP", icon:img8 },
    { name: "FMCG", icon: img8 },
    { name: "Fintech", icon: img9 },
    { name: "BFSI/NBFC", icon: img10 },
    { name: "Export/Import", icon: img11 },
    { name: "Travel and Tourism", icon: img12 },
    { name: "BPO/KPO/Shared Services", icon: img13 },
    { name: "Medical/Pharmaceuticals", icon: img14 },
    { name: "Educational/Training", icon: img17 },
    { name: "Automobile", icon: img16 },
    { name: "Retail", icon: img},
    { name: "Construction", icon: img15 },
    { name: "E-Commerce", icon: img15 },
  ];

  return (
    <>
    <div className="bg-purple-50 py-12 text-center">
      <span className="bg-purple-200 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
        INDUSTRIES
      </span>
      <h2 className="text-lg text-purple-600 mt-4">
        Our complete assistance will be with you and we guide you accordingly.
      </h2>
      <div className="flex flex-wrap justify-center gap-5 mt-6 px-4 ">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-gray-200 rounded-lg shadow-sm hover:bg-gray-300 cursor-pointer lg:w-50  md:px-4 md:py-2  px-4 py-5 "
          >
            <span className="text-lg"><img src={industry.icon} alt="" /></span>
            <span className="text-sm font-medium">{industry.name}</span>
          </div>
        ))}
      </div>
    </div>
{/* -------------------------------Top Partnership---------------------------- */}
   <Cont6A></Cont6A>
   <Cont1A></Cont1A> 
</>
  );
}
