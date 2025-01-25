import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faJava,
  faPython,
  faCuttlefish,
  faNodeJs,
  faHtml5,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faChartBar,
  faCode,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";

function Skills() {
  const skillsList = [
    { icon: faJs, name: "JavaScript" },
    { icon: faReact, name: "React.js" },
    { icon: faJava, name: "Java" },
    { icon: faPython, name: "Python" },
    { icon: faCuttlefish, name: "C++" },
    { icon: faNodeJs, name: "Express" },
    { icon: faDatabase, name: "MongoDB" },
    { icon: faReact, name: "Next.js" },
    { icon: faChartBar, name: "Data Analysis" },
    { icon: faChartBar, name: "Power BI" },
    { icon: faCode, name: "Tailwind" },
    { icon: faFileCode, name: "TypeScript" },
    { icon: faGit, name: "Git" },
    { icon: faNodeJs, name: "Node.js" },
    { icon: faHtml5, name: "HTML/CSS" },
  ];

  return (
    <div
      id="skills"
      className="container mx-auto px-4 py-16 flex flex-col items-center"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
        Skills
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full max-w-5xl">
        {skillsList.map((skill, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center justify-center text-center"
          >
            <FontAwesomeIcon icon={skill.icon} className="text-2xl mb-2" />
            <span className="text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
