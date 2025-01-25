import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 justify-between items-start">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Contact Me</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold mb-3">Follow Me On</h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://x.com/_KrAkashdeep_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/kumar-akashdeep/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <h2 className="text-xl font-bold mb-2">Quick Links</h2>
          <ul className="list-none">
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-white hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} @ All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
