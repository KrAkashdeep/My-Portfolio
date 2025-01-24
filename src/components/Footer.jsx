function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="list-none">
            <li>
              <a href="/" className="text-white hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="text-white hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
