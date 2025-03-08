import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

function SocialmediaConn() {
  return (
    <>
       <div className="bg-white my-auto p-1 rounded-lg fixed z-30 right-1 top-1/2 transform -translate-y-1/2 grid shadow-2xl gap-5 hover:gap-5 transition-all duration-[1000ms]">


      <Link
        to="https://api.whatsapp.com/send?phone=918860159136&text=Hello%21+I+found+your+website+https%3A%2F%2Fwww.assuredjob.in+and+am+interested+in+your+products." // Add your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-3xl hover:scale-110  transition-transform"
      >
        <FaWhatsapp  className=''/>
      </Link>
      <Link
        to="https://www.instagram.com/assuredjob/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500  text-3xl hover:scale-110 transition-transform"
      >
        <FaInstagram  className=''/>
      </Link>
      <Link
        to="https://www.linkedin.com/company/skywings-advisors-pvt-ltd/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500  text-3xl hover:scale-110 transition-transform"
      >
        <FaLinkedin className=''/>
      </Link>
      <Link
        to="https://www.youtube.com/in/in/YOUR_PROFILE_NAME_HERE"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-3xl hover:scale-110 transition-transform"
      >
        <FaYoutube className=' '/>
      </Link>
    </div>
    </>
  )
}

export default SocialmediaConn
