
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

const Nav = ({toggle, fun}) => {
  const baseStyles = "lg:px-3 py-2 rounded-md text-sm font-medium";
  const activeStyles =`${()=>{fun(!toggle)}} text-red-600 hover:underline`
  const inactiveStyles = "hover:text-red-600";

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeMenuOnMobile = () => {
    if (toggle) {
      fun(false); // Close menu only on smaller screens
    }
  };



  const menuItems = [
    {
      label: "Services",
      items: [
        { name: "Permanent Staffing", path: "/DetailService/1" },
        { name: "Temporary Staffing", path: "/DetailService/2" },
        { name: "Contract Staffing", path: "/DetailService/3" },
        { name: "Executive Search", path: "/DetailService/4" },
        {
          name: "Recruitment Process Outsourcing (RPO)",
          path: "/DetailService/5",
        },
        { name: "Skill Gap Assessment", path: "/DetailService/6" },
        { name: "Internship Program Management", path: "/DetailService/7" },
        {
          name: "Diversity & Inclusion Hiring Initiatives",
          path: "/DetailService/8",
        },
        { name: "Onboarding and Training Support", path: "/DetailService/9" },
        {
          name: "Pre-Placement Offer (PPO) Recruitment",
          path: "/DetailService/10",
        },
        { name: "Remote Talent Pooling", path: "/DetailService/11" },
        { name: "Payroll Management", path: "/DetailService/12" },
        { name: "Labour Compliance Management", path: "/DetailService/13" },
        { name: "Freelance Recruiter Partnership", path: "/DetailService/14" },
        { name: "Outplacement Services", path: "/DetailService/15" },
        { name: "HR Consulting and Strategy", path: "/DetailService/16" },
        {
          name: "Talent Mapping and Market Intelligence",
          path: "/DetailService/17",
        },
        { name: "Graduate Trainee Programs", path: "/DetailService/18" },
      ],
    },
    {
      label: "Company",
      items: [
        { name: "About", path: "/about" },
        { name: "Career", path: "/carrers" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      label: "Resources",
      items: [
        { name: "Blogs", path: "/blog" },
        { name: "News", path: "/news" },
      ],
    },
    {
      label: "Innovations",
      items: [
        {
          name: "Pool Campus",
          path: "https://pool-campus.com/",
          external: true,
        },
        {
          name: "Freelancer",
          path: "https://www.freelancer.in/",
          external: true,
        },
      ],
    },
  ];


 return (
  <nav className="flex flex-col lg:flex-row items-start lg:items-center space-x-4 h-auto w-full relative">
      <NavLink to="/" className="text-sm font-medium" onClick={closeMenuOnMobile}>
        Home
      </NavLink>
      {menuItems.map((menu, index) => (
        <div
        key={index}
        className="relative group"
        onMouseEnter={() =>
          window.innerWidth >= 1024 && setOpenDropdown(menu.label)
        }
        onMouseLeave={() =>
          window.innerWidth >= 1024 && setOpenDropdown(null)
        }
      >
          <span
            onClick={() => toggleDropdown(menu.label)}
            className={`${baseStyles} cursor-pointer flex items-center gap-1`}
            aria-expanded={openDropdown === menu.label}
          >
            {menu.label}
            {openDropdown === menu.label ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </span>

          {openDropdown === menu.label && (
            <div className="relative">
            <div className={
                menu.label === "Services"
                  ? "lg:fixed flex-col lg:flex-row  z-40 flex lg:ml-auto lg:mr-12 lg:left-0 lg:right-0  bg-white lg:space-y-10 lg:grid lg:grid-cols-5 px-4 lg:rounded-md lg:shadow-lg w-10/12 h-auto"
                  : "lg:absolute lg:left-0 w-56 lg:rounded-md lg:shadow-lg bg-white transition-all px-2 duration-200 ease-in-out z-10"
              }>
                {menu.items.map((item, idx) =>
                  item.external ? (
                    <a
                      key={idx}
                      href={item.path}
                      className={`${baseStyles} block ${inactiveStyles}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        closeMenuOnMobile(); 
                        window.scrollTo({ top: 0, behavior: "smooth" }); 
                      }}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <NavLink
                      key={idx}
                      to={item.path}
                      className={({ isActive }) =>
                        `${baseStyles} block ${isActive ? activeStyles : inactiveStyles}`
                      }
                      onClick={() => {
                        closeMenuOnMobile(); 
                        window.scrollTo({ top: 0, behavior: "smooth" }); 
                      }}
                    >
                      {item.name}
                    </NavLink>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Nav;