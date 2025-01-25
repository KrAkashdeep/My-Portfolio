import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faUser,
  faCode,
  faFolderOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { name: "Home", id: "home", icon: faHome },
    { name: "About", id: "about", icon: faUser },
    { name: "Skills", id: "skills", icon: faCode },
    { name: "Projects", id: "projects", icon: faFolderOpen },
    { name: "Contact", id: "contact", icon: faEnvelope },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile Bottom Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-2xl md:hidden">
        <ul className="flex justify-around py-3 px-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="p-2 rounded-full transition-all"
            >
              <FontAwesomeIcon
                icon={item.icon}
                className={`text-xl ${
                  activeSection === item.id
                    ? "text-blue-600 scale-125"
                    : "text-gray-600 hover:text-blue-500"
                } transition-all`}
              />
            </button>
          ))}
        </ul>
      </nav>

      {/* Tablet Right Sidebar */}
      <nav className="hidden md:block lg:hidden fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-white/90 backdrop-blur-sm rounded-l-xl shadow-lg p-3">
          <ul className="flex flex-col gap-5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="group relative p-3 rounded-lg hover:bg-blue-50 transition-all"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`text-2xl ${
                    activeSection === item.id
                      ? "text-blue-600"
                      : "text-gray-600 group-hover:text-blue-500"
                  }`}
                />
                <span className="absolute right-full top-1/2 -translate-y-1/2 bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-sm mr-3">
                  {item.name}
                </span>
              </button>
            ))}
          </ul>
        </div>
      </nav>

      {/* Desktop Vertical Bar */}
      <nav className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-2xl p-2">
          <ul className="flex flex-col gap-5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="group relative p-3 rounded-full hover:bg-blue-100 transition-all"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`text-2xl ${
                    activeSection === item.id
                      ? "text-blue-600 scale-110"
                      : "text-gray-700 group-hover:text-blue-500"
                  } transition-transform`}
                />
                <span className="absolute right-full top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-lg mr-3">
                  {item.name}
                </span>
              </button>
            ))}
          </ul>
        </div>
      </nav>

      <div className="md:hidden fixed top-4 right-4 z-50">
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-blue-800 cursor-pointer bg-white p-2 rounded-full shadow-lg"
        />
      </div>
    </>
  );
}

export default Navbar;
