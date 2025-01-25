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
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Contact Me</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold mb-3">Follow Me</h2>
          <div className="flex justify-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-2xl hover:text-gray-400"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-2xl hover:text-gray-400"
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-2xl hover:text-gray-400"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-2xl hover:text-gray-400"
              />
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <h2 className="text-xl font-bold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
