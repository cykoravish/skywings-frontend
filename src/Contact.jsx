import Cont5 from "./componentes/Home/cont5";
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react'
function Contact() {
  return (
    <>
      {/* Header Section */}
      <div className="bg-purple-50 py-12 text-center px-4 ">
        <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
          CONTACT
        </span>
        <h1 className="text-4xl text-[#42307D] font-bold my-3">
          Want to get in touch?
        </h1>
        <p className="text-purple-500 mt-4 text-lg">
          We are always open to meeting new and interesting folks who want to
          join us on this journey.
        </p>
      </div>

      {/* Form Section */}

      <div className="grid bg-gray-50 grid-cols-1 lg:grid-cols-2 gap-10  px-6 md:px-12 lg:px-20 py-10">
        {/* Image Section */}
        <div className="flex ">
         <div className="flex flex-col  mt-20 "> 
         <div className="mb-4">
  <h3 className="text-3xl text-zinc-800 font-bold mb-2">Contact Details</h3>
 <div>
  <h3 className="text-xl font-semibold text-gray-500">Email</h3>
  <div className="flex flex-col space-y-3">
    {/* Email Section */}
    <div className="flex  items-center space-x-3">
      <Mail className="w-8 h-8 text-blue-500  " />
      <li className="list-none">hiring@assuredjob.com</li>
      
</div> 
<div className="flex items-center space-x-3">
      <Mail className="w-8 h-8 text-blue-500  " />
      <li className="list-none">careers@assuredjob.com</li>
      
</div>
<div className="flex items-center space-x-3">
      <Mail className="w-8 h-8 text-blue-500  " />
      <li className="list-none">business@assuredjob.com</li>
      
</div>
<div className="flex items-center space-x-3">
      <Mail className="w-8 h-8 text-blue-500  " />
      <li className="list-none">hr@assuredjob.com</li>
      
</div>

      {/* <p className="text-lg font-semibold text-zinc-800">hr@assuredjob.com</p>
      <p className="text-lg font-semibold text-zinc-800"> <Mail/>hiring@assuredjob.com</p>
      <p className="text-lg font-semibold text-zinc-800">      <p className="text-lg font-semibold text-zinc-800"> <Mail/>business@assuredjob.com</p></p> */}
      <div className="flex flex-col font-semibold text-lg">
{/*        
        <li className="list-none">business@assuredjob.com</li>
        <li className="list-none">hiring@assuredjob.com</li>
        <li className="list-none">careers@assuredjob.com</li> */}
      </div>
   
    {/* Phone Section */}
    
  </div>
 </div>
 <div>
  <h3 className="text-xl font-semibold text-gray-500">Phone Number</h3>
  <div className="flex flex-col space-y-3">
    {/* Email Section */}
    

<div className="flex items-center space-x-3">
      <Phone className="w-8 h-8 text-blue-500  " />
      <li className="list-none">+91 8368002731</li>
      
</div>
<div className="flex items-center space-x-3">
          <Phone className="w-8 h-8 text-blue-500  " />
    
      <li className="list-none">+91-8860159136</li>
      
</div>

      {/* <p className="text-lg font-semibold text-zinc-800">hr@assuredjob.com</p>
      <p className="text-lg font-semibold text-zinc-800"> <Mail/>hiring@assuredjob.com</p>
      <p className="text-lg font-semibold text-zinc-800">      <p className="text-lg font-semibold text-zinc-800"> <Mail/>business@assuredjob.com</p></p> */}
      <div className="flex flex-col font-semibold text-lg">
{/*        
        <li className="list-none">business@assuredjob.com</li>
        <li className="list-none">hiring@assuredjob.com</li>
        <li className="list-none">careers@assuredjob.com</li> */}
      </div>
   
    {/* Phone Section */}
    
  </div>
 </div>
</div>

        
         </div>
        </div>

        {/* Form Section */}
        <div
          className="p-6 rounded-2xl bg-white  w-full"
          style={{ boxShadow: "10px -10px  blue" }}
        >
          <form className="grid grid-cols-1 gap-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Abhinav Kumar"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Contact Field */}
            <div>
              <label
                htmlFor="contact"
                className="block text-gray-700 font-medium"
              >
                Contact
              </label>
              <input
                type="tel"
                id="contact"
                placeholder="9547646378"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="abc@example.com"
                className="w-full px-4 py-2 text-black mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* City Field */}
            <div>
  <label htmlFor="city" className="block text-gray-700 font-medium">
    City
  </label>
  <div>
  
  <select
    id="city"
    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-400"
  >
    <option value="" disabled selected>
  Select a city
</option>
<option value="mumbai">Mumbai</option>
<option value="delhi">Delhi</option>
<option value="bangalore">Bangalore</option>
<option value="hyderabad">Hyderabad</option>
<option value="chennai">Chennai</option>
<option value="kolkata">Kolkata</option>
<option value="pune">Pune</option>
<option value="jaipur">Jaipur</option>
<option value="ahmedabad">Ahmedabad</option>
<option value="lucknow">Lucknow</option>
<option value="chandigarh">Chandigarh</option>
<option value="bhopal">Bhopal</option>
<option value="indore">Indore</option>
<option value="patna">Patna</option>
<option value="kochi">Kochi</option>
<option value="bhubaneswar">Bhubaneswar</option>
<option value="visakhapatnam">Visakhapatnam</option>
<option value="nagpur">Nagpur</option>
<option value="surat">Surat</option>
<option value="varanasi">Varanasi</option>
<option value="guwahati">Guwahati</option>
<option value="dehradun">Dehradun</option>
<option value="madurai">Madurai</option>
<option value="coimbatore">Coimbatore</option>
<option value="amritsar">Amritsar</option>
<option value="meerut">Meerut</option>
<option value="ranchi">Ranchi</option>
<option value="vadodara">Vadodara</option>
<option value="nashik">Nashik</option>
<option value="rajkot">Rajkot</option>
<option value="mysore">Mysore</option>
<option value="trivandrum">Thiruvananthapuram</option>
<option value="jodhpur">Jodhpur</option>
<option value="udaipur">Udaipur</option>
<option value="gwalior">Gwalior</option>
<option value="jamshedpur">Jamshedpur</option>

  </select>
</div>

</div>


            {/* Country Field */}
            <div>
              <label
                htmlFor="country"
                className="block text-gray-700 font-medium"
              >
                Country
              </label>
              <select
    id="country"
    className="w-full text-gray-400 px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
  >
    <option value="" disabled selected>
      Select a country
    </option>
    <option value="usa">United States</option>
    <option value="canada">Canada</option>
    <option value="uk">United Kingdom</option>
    <option value="australia">Australia</option>
    <option value="germany">Germany</option>
    <option value="france">France</option>
    <option value="india">India</option>
    <option value="japan">Japan</option>
    <option value="china">China</option>
    <option value="brazil">Brazil</option>
    <option value="south-africa">South Africa</option>
    <option value="russia">Russia</option>
    <option value="mexico">Mexico</option>
    <option value="italy">Italy</option>
    <option value="spain">Spain</option>
  </select>
            </div>

            {/* Enquire Field */}
            <div>
              <label
                htmlFor="enquire"
                className="block text-gray-700 font-medium"
              >
                Enquire
              </label>
              <select
    id="country"
    className="w-full text-gray-400 px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
  >
    <option value="" disabled selected>
      enquire
    </option>
    <option value="usa">IT Service</option>
    <option value="canada">Sales</option>
    <option value="uk">Mangement</option>
    
    
  </select>
            </div>

            {/* Enquire Detail Field */}
            <div>
              <label
                htmlFor="enquireDetail"
                className="block text-gray-700 font-medium"
              >
                Enquire Detail
              </label>
              <textarea
                id="enquireDetail"
                placeholder="Your requirement"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='flex w-full '>
      <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.5282803438927!2d78.0209715745825!3d30.335932804703045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929ec1f76b89d%3A0xf5c5f81fa6e9af6c!2sSkywings%20Advisors%20Private%20Limited!5e0!3m2!1sen!2sin!4v1741413952815!5m2!1sen!2sin"
            width=""
            height=""
            className='w-full mx-10 h-96'
            allowFullscreen=""
            loading="fast"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>

      <Cont5></Cont5>
    </>
  );
}

export default Contact;
