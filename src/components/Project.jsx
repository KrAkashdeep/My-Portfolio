import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    title: "Movies Sentiment Analysis",
    description:
      "Movie sentiment analysis involves analyzing movie reviews to determine whether they express positive or negative opinions.",
    image: "../../sentiment.png",
    link: "https://github.com/KrAkashdeep/Movie_Sentiment_Analysis",
  },
  {
    title: "Blog App",
    description:
      "A blog app allows users to create and share posts, interact through likes and comments. It serves as a platform for content creators and readers to connect and exchange ideas.",
    image: "../../blogify.png",
    link: "https://github.com/KrAkashdeep/blog-app",
  },
  {
    title: "video call app",
    description:
      "A video call app facilitates seamless real-time communication, allowing users to interact via video, text chat, and shared screens.",
    image: "../../video_call.png",
    link: "https://github.com/KrAkashdeep/Video-Conferencing-Website",
  },
];

function Project() {
  return (
    <div
      id="projects"
      className="container mx-auto px-4 flex flex-col items-center min-h-screen py-12"
    >
      <h1 className="text-3xl font-bold mb-8 text-center p-20">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div
              onClick={() => window.open(project.link)}
              className="absolute inset-0 bg-gray-700 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <div className="text-white text-center px-4">
                <h2 className="text-xl font-bold mb-4">{project.title}</h2>
                <p className="text-sm font-medium">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex items-center space-x-2">
        <div>Check out projects here 👉</div>
        <a
          href="https://github.com/KrAkashdeep?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2 text-3xl" />
        </a>
      </div>
    </div>
  );
}

export default Project;
