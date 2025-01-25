import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div
        className="fixed top-4 right-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          className="text-2xl text-blue-800 cursor-pointer"
        />
      </div>

      {/* Navbar */}
      <nav
        className={`
          fixed z-40 top-0 right-0 h-full w-64 
          transform transition-transform duration-300 ease-in-out
          md:translate-x-0 md:w-auto md:h-auto md:top-64 md:right-1 
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <ul
          className="
            flex flex-col items-center justify-center h-full 
            md:flex-col md:place-items-end md:gap-3 
            text-xl text-blue-800 font-light
          "
        >
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="w-full text-center md:text-right"
              onClick={() => {
                if (item.name === "Home") navigate("/");
                setIsOpen(false);
              }}
            >
              <li
                className="
                  cursor-pointer p-4 md:p-0 
                  hover:bg-blue-100 md:hover:bg-transparent
                "
              >
                {item.name}
              </li>
            </a>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
