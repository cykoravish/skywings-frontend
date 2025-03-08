import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

// eslint-disable-next-line react/prop-types
const Nav = ({ setIsMobileMenuOpen }) => {
  const baseStyles = "lg:px-3 py-2 rounded-md text-sm font-medium";
  const activeStyles = "text-red-600 hover:underline";
  const inactiveStyles = "hover:text-red-600";
  const navigate = useNavigate();

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flex z-50 flex-col lg:flex-row items-start lg:items-center space-x-1">
      <div className="relative group">
        <span
          onClick={() => navigate("/job")}
          className={`${baseStyles} cursor-pointer flex items-center gap-0.5`}
        >
          Jobs
        </span>
      </div>

      {/* Services Dropdown */}
      <div className="relative group">
        <span
          onClick={() => toggleDropdown("services")}
          className={`${baseStyles} cursor-pointer flex items-center gap-0.5`}
        >
          Services
          {openDropdown === "services" ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </span>

        {openDropdown === "services" && (
          <div className="absolute left-0 mt-2 w-[80vh] rounded-md shadow-lg bg-white z-10">
            <div className="p-4 grid grid-cols-2 md:grid-cols-4">
              {[
                "Permanent Staffing",
                "Temporary Staffing",
                "Contract Staffing",
                "Executive Search",
                "Recruitment Process Outsourcing (RPO)",
                "Skill Gap Assessment",
                "Internship Program Management",
                "Graduate Trainee Programs",
                "Diversity & Inclusion Hiring Initiatives",
                "Onboarding and Training Support",
                "Pre-Placement Offer (PPO) Recruitment",
                "Remote Talent Pooling",
                "Payroll Management",
                "Labour Compliance Management",
                "Freelance Recruiter Partnership",
                "Outplacement Services",
                "HR Consulting and Strategy",
                "Talent Mapping and Market Intelligence",
              ].map((service, index) => (
                <NavLink
                  key={index}
                  to={`/DetailService/${index + 1}#`}
                  className={({ isActive }) =>
                    `${baseStyles} block ${
                      isActive ? activeStyles : inactiveStyles
                    }`
                  }
                  onClick={closeDropdown}
                >
                  {service}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Company Dropdown */}
      <div className="relative group">
        <span
          onClick={() => toggleDropdown("company")}
          className={`${baseStyles} cursor-pointer flex items-center gap-0.5`}
        >
          Company
          {openDropdown === "company" ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </span>

        {openDropdown === "company" && (
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white z-10">
            <div className="py-1">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${baseStyles} block ${
                    isActive ? activeStyles : inactiveStyles
                  }`
                }
                onClick={closeDropdown}
              >
                About
              </NavLink>
              <NavLink
                to="/carrers"
                className={({ isActive }) =>
                  `${baseStyles} block ${
                    isActive ? activeStyles : inactiveStyles
                  }`
                }
                onClick={closeDropdown}
              >
                Careers
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${baseStyles} block ${
                    isActive ? activeStyles : inactiveStyles
                  }`
                }
                onClick={closeDropdown}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>

      {/* Resources Dropdown */}
      <div className="relative group">
        <span
          onClick={() => toggleDropdown("resources")}
          className={`${baseStyles} cursor-pointer flex items-center gap-0.5`}
        >
          Resources
          {openDropdown === "resources" ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </span>

        {openDropdown === "resources" && (
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white z-10">
            <div className="py-1">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `${baseStyles} block ${
                    isActive ? activeStyles : inactiveStyles
                  }`
                }
                onClick={closeDropdown}
              >
                Blogs
              </NavLink>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  `${baseStyles} block ${
                    isActive ? activeStyles : inactiveStyles
                  }`
                }
                onClick={closeDropdown}
              >
                News
              </NavLink>
            </div>
          </div>
        )}
      </div>

      {/* Innovations Dropdown */}
      <div className="relative group">
        <span
          onClick={() => toggleDropdown("innovations")}
          className={`${baseStyles} cursor-pointer flex items-center gap-0.5`}
        >
          Innovations
          {openDropdown === "innovations" ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </span>

        {openDropdown === "innovations" && (
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white z-10">
            <div className="py-1">
              <a
                href="https://pool-campus.com/"
                className={`${baseStyles} block ${inactiveStyles}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeDropdown}
              >
                Pool Campus
              </a>
              <a
                href="https://www.freelancerecruiter.in/"
                className={`${baseStyles} block ${inactiveStyles}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeDropdown}
              >
                Freelancer
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
