const projects = [
  {
    title: "Project 1",
    description: "This is a description for Project 1.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Project 2",
    description: "This is a description for Project 2.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Project 3",
    description: "This is a description for Project 3.",
    image: "https://via.placeholder.com/300",
  },
];

function Project() {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="relative w-220 flex flex-col items-center space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative group bg-white rounded-lg shadow-lg overflow-hidden w-56 h-56 ${
              index % 2 === 0 ? "ml-auto" : "mr-auto"
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="mt-2">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a
          href="https://github.com/KrAkashdeep?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Check All Projects on GitHub
        </a>
      </div>
    </div>
  );
}

export default Project;
