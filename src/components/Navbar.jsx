// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faTimes,
//   faHome,
//   faUser,
//   faCode,
//   faFolderOpen,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { name: "Home", id: "home", icon: faHome },
//     { name: "About", id: "about", icon: faUser },
//     { name: "Skills", id: "skills", icon: faCode },
//     { name: "Projects", id: "projects", icon: faFolderOpen },
//     { name: "Contact", id: "contact", icon: faEnvelope },
//   ];

//   const handleScroll = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//     setIsOpen(false);
//   };

//   return (
//     <>
//       {/* Mobile Menu Toggle */}
//       <div
//         className="fixed top-4 right-4 z-50 md:hidden"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <FontAwesomeIcon
//           icon={isOpen ? faTimes : faBars}
//           className="text-2xl text-blue-800 cursor-pointer"
//         />
//       </div>

//       {/* Desktop Navbar */}
//       <nav
//         className={`fixed z-40 right-2 top-1/2 -translate-y-1/2
//           bg-white/95 backdrop-blur-sm rounded-full shadow-lg
//           transform transition-all duration-300 ease-in-out
//           ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
//           md:h-auto md:w-auto`}
//       >
//         <ul className="flex flex-col gap-4 p-3">
//           {menuItems.map((item) => (
//             <button
//               key={item.name}
//               onClick={() => handleScroll(item.id)}
//               className="group relative p-3 rounded-full hover:bg-blue-50 transition-colors"
//               aria-label={item.name}
//             >
//               <FontAwesomeIcon
//                 icon={item.icon}
//                 className="text-xl text-slate-500 group-hover:text-slate-700"
//               />
//               <span
//                 className="absolute right-full top-1/2 -translate-y-1/2
//                 mr-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-md
//                 text-sm font-medium opacity-0 group-hover:opacity-100
//                 transition-opacity shadow-sm hidden md:block"
//               >
//                 {item.name}
//               </span>
//             </button>
//           ))}
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

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
    { name: "Home", id: "home", icon: faHome, mdIcon: faHome },
    { name: "About", id: "about", icon: faUser, mdIcon: faUser },
    { name: "Skills", id: "skills", icon: faCode, mdIcon: faCode },
    {
      name: "Projects",
      id: "projects",
      icon: faFolderOpen,
      mdIcon: faFolderOpen,
    },
    { name: "Contact", id: "contact", icon: faEnvelope, mdIcon: faEnvelope },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
    setIsOpen(false);
  };

  // Section observer for active state
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
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
      {/* Mobile Bottom Bar (sm) */}
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

      {/* Medium Screen Right Sidebar (md) */}
      <nav className="hidden md:block lg:hidden fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-white/90 backdrop-blur-sm rounded-l-xl shadow-lg p-3">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="group relative p-2 rounded-lg hover:bg-blue-50 transition-all"
              >
                <FontAwesomeIcon
                  icon={item.mdIcon}
                  className={`text-xl ${
                    activeSection === item.id
                      ? "text-blue-600"
                      : "text-gray-600 group-hover:text-blue-500"
                  }`}
                />
                <span className="absolute right-full top-1/2 -translate-y-1/2 bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-sm mr-2">
                  {item.name}
                </span>
              </button>
            ))}
          </ul>
        </div>
      </nav>

      {/* Large Screen Elegant Vertical Bar (lg+) */}
      <nav className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-2xl p-2">
          <ul className="flex flex-col gap-5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="group relative p-3 rounded-full hover:bg-blue-100 transition-all"
              >
                <div className="relative">
                  <FontAwesomeIcon
                    icon={item.mdIcon}
                    className={`text-2xl ${
                      activeSection === item.id
                        ? "text-gray-600 scale-110"
                        : "text-gray-700 group-hover:text-blue-500"
                    } transition-transform duration-300`}
                  />
                  {/* {activeSection === item.id && (
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-full"></div>
                  )} */}
                </div>
                <span className="absolute right-full top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-lg mr-3">
                  {item.name}
                </span>
              </button>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Toggle (fallback) */}
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
