import Nav from "./Nav";
import logo from "../assets/products/image 1.png";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky bg-white top-0 z-50 w-full min-h-[8vh] max-h-[15vh] lg:h-56  lg:px-14 flex items-center justify-between shadow-md 
    backdrop-blur-3xl"
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <NavLink to="/">
          <img className="h-12 md:h-15 w-auto" src={logo} alt="Logo" />
        </NavLink>
      </div>

      <button
        className="lg:hidden text-gray-700 hover:text-black"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`${
          isMobileMenuOpen ? "absolute right-0" : "hidden"
        } lg:block lg:w-auto lg:static top-15 sm:top-15 md:top-22 h-fit w-52 lg:h-auto lg:top-0 bg-white lg:bg-transparent shadow-md lg:shadow-none`}
      >
        <Nav className="z-50" setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </div>
    </header>
  );
};

export default Navbar;
