import logo from "../assets/products/image 1.png";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { HiPhone, HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <div className=" w-full hidden md:block">
        {/* Footer Grid Section */}
        <div className=" footer grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-30 p-6 gap-5 lg:mx-20">
          {/* First Section (Logo & Social Icons) */}
          <div className="first ">
            <img src={logo} alt="Logo" className="mb-6 w-32" />
            <p className="text-gray-600 mb-6 w-40 lg:w-full">
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </p>
            <div className="flex gap-4">
              <FaTwitter className="border border-gray-400 w-8 h-8 p-2 rounded-full text-gray-600 hover:text-blue-500" />
              <a
                href="https://www.facebook.com/www.assuredjob.in?mibextid=ZbWKwL"
                target="_blank"
              >
                <FaFacebook className="border border-gray-400 w-8 h-8 p-2 rounded-full text-gray-600 hover:text-blue-700" />
              </a>
              <a href="https://www.instagram.com/assuredjob/" target="_blank">
                <FaInstagram className="border border-gray-400 w-8 h-8 p-2 rounded-full text-gray-600 hover:text-pink-500" />
              </a>
            </div>
          </div>

          {/* Second Section (Company Links) */}

          <div className="second  mx-5 mt-14 lg:m-0">
            <ul>
              <p className="font-bold text-blue-500 hover:text-blue-700 mb-2">
                COMPANY
              </p>
              <li className="text-gray-600 mb-1 hover:text-gray-800 cursor-pointer">
                Home
              </li>
              <li className="text-gray-600 mb-1 hover:text-gray-800 cursor-pointer">
                About
              </li>
              <li className="text-gray-600 mb-1 hover:text-gray-800 cursor-pointer">
                Services
              </li>
              <li className="text-gray-600 mb-1 hover:text-gray-800 cursor-pointer">
                Industries
              </li>
            </ul>
          </div>

          {/* Third Section (Legal) */}

          <div className="third">
            <ul>
              <p className="font-bold text-blue-500 hover:text-blue-700 mb-2">
                LEGAL
              </p>
              <li className="text-gray-600 mb-1 hover:text-gray-800 cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-gray-600 mb-1 hover:text-gray-800 cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Fourth Section (Contact) */}
          <div className="fourth  ">
            <ul>
              <p className="font-bold text-blue-500 hover:text-blue-700 mb-2">
                CONTACT
              </p>
              <li className="text-gray-600 mb-1 flex items-center">
                <HiPhone className="mr-2 text-gray-600 hover:text-blue-500" />{" "}
                91 8860 1591 36
              </li>
              <li className="text-gray-600 mb-1 flex items-center">
                <HiMail className="mr-2 text-gray-600 hover:text-blue-500" />{" "}
                hr@asfuredjob.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="flex flex-col items-center justify-center text-center  py-4 ">
          <hr className="w-[85%] border-gray-300" />
          <p className="text-gray-600 text-sm mt-2">
            © Copyright 2022, All Rights Reserved by Skywing
          </p>
        </div>
      </div>

      {/**------------------------------------------------------------------------ */}

      {/** for mobile*/}

      <footer className="bg-white text-center py-10  lg:hidden  ">
        <div className="flex flex-col items-center ">
          {/* Logo and Tagline */}
          <img src={logo} alt="SkyWings Logo" className="h-16 mb-4" />
          <p className="text-gray-600 mb-6 w-75">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <FaTwitter className="border border-gray-400 w-8 h-8 p-2 rounded-full text-gray-600 hover:text-blue-500" />
            <a
              href="https://www.facebook.com/www.assuredjob.in?mibextid=ZbWKwL"
              target="_blank"
            >
              <FaFacebook className="border border-gray-400 w-8 h-8 p-2 rounded-full text-gray-600 hover:text-blue-700" />
            </a>
            <a href="https://www.instagram.com/assuredjob/" target="_blank">
              <FaInstagram className="border border-gray-400 w-8 h-8 p-2 rounded-full text-gray-600 hover:text-pink-500" />
            </a>
          </div>

          {/* Footer Links Section */}
          <div className="grid grid-cols-2 gap-10 text-left md:grid-cols-3">
            {/* Company Section */}
            <div className="second  mx-5 mt-14 lg:m-0">
              <ul>
                <p className="font-bold text-blue-500 hover:text-blue-700 mb-2">
                  COMPANY
                </p>
                <li className="text-gray-600 mb-1 hover:text-gray-800 cursor-pointer">
                  Home
                </li>
                <li className="text-gray-600 mb-1 hover:text-gray-800 cursor-pointer">
                  About
                </li>
                <li className="text-gray-600 mb-1 hover:text-gray-800 cursor-pointer">
                  Services
                </li>
                <li className="text-gray-600 mb-1 hover:text-gray-800 cursor-pointer">
                  Industries
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="third mt-13">
              <ul>
                <p className="font-bold text-blue-500 hover:text-blue-700 mb-2">
                  LEGAL
                </p>
                <li className="text-gray-600 mb-1 hover:text-gray-800 cursor-pointer">
                  Privacy Policy
                </li>
                <li className="text-gray-600 mb-1 hover:text-gray-800 cursor-pointer">
                  Terms & Conditions
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="fourth mx-5 w-full ">
              <ul>
                <p className="font-bold text-blue-500 hover:text-blue-700 mb-2">
                  CONTACT
                </p>
                <li className="text-gray-600 mb-1 flex items-center">
                  <HiPhone className="mr-2 text-gray-600 hover:text-blue-500" />{" "}
                  91 8860 1591 36
                </li>
                <li className="text-gray-600 mb-1 flex items-center">
                  <HiMail className="mr-2 text-gray-600 hover:text-blue-500" />{" "}
                  hr@assuredjob.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center  py-4 ">
          <hr className="w-[85%] border-gray-300" />
          <p className="text-gray-600 text-sm mt-2">
            © Copyright 2022, All Rights Reserved by Skywing
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
