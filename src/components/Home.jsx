import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <>
      <div id="home" className="relative">
        <div className="flex justify-center items-center h-screen">
          <img
            src="../../header.jpg"
            alt="background image"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center md:left-20 ">
          <div className="text-center md:text-left px-4 md:px-0 md:ml-20  ">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 md:text-left text-center ">
              Hi!
            </h1>
            <h1 className="text-4xl md:text-5xl font-semibold text-blue-800 mb-4 md:text-left text-center">
              {`I'm Kumar Akashdeep`}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 font-thin mb-6 md:text-left text-center">
              {`I'm a Full Stack Developer, Software Engineer,`}
              <br />
              Data Analyst, AI Enthusiast
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/kumar-akashdeep/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://github.com/KrAkashdeep"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-900"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-600"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://x.com/_KrAkashdeep_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
