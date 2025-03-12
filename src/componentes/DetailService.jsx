import { list } from '../data'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
function DetailService() {
    const navigate = useNavigate();
    const {id} = useParams();
    const service = list.find((service) => service.id === Number(id));
    console.log(service);

    const handleClick = (service) => {
      navigate(`/DetailService/${service.id}`);
      window.scrollTo(0, 0);
    };
    
  return (
   <>
    <button onClick={()=> navigate("/services")} className='text-gray-400 font-semibold flex px-10 mx-10 cursor-pointer gap-3 border-gray-400  py-1 rounded-lg'><p className='flex items-center'><FaArrowLeft/></p><p>Back</p></button>
    <div className="flex flex-col md:flex-row w-full mt-4 gap-4">
  {/* Left Section - Image */}
  <div className="md:w-1/2 w-full p-4">
    <img
      className="w-full h-auto object-cover rounded-lg shadow-md"
      src={service.image}
      alt="Service"
    />
  </div>

  {/* Right Section - Text Content */}
  <div className="md:w-1/2 w-full flex flex-col justify-center p-4 ">
    <h3 className="text-lg md:text-2xl font-semibold mb-2">{service.title}</h3>
    <p className="w-full h-[400px] overflow-auto text-base md:text-lg leading-relaxed  border-4 rounded-lg  border-gray-100 bg-gray-50 px-3.5 " dangerouslySetInnerHTML={{ __html: service.content }}>
      {/* {service.content} */}
      </p>
  </div>
</div>



    <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-10 ">
          {list.map((service, index) => (
            <div
            key={index}
            onClick={() => handleClick(service)} // ✅ Passing service explicitly
            className="bg-[#F5F5F5] rounded-xl overflow-hidden cursor-pointer"
          >
            <img src={service.image} alt={service.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <a href="#" className="text-blue-500 text-sm font-medium mt-2 inline-flex items-center">
                View Details →
              </a>
            </div>
          </div>
          ))}
        </div>
   </>
  )
}

export default DetailService
