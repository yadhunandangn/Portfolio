export const Project = () => {
  const projects = [
    "MindMitra Chatbot",
    "HCP Interaction Logging System",
    "Real-Time Chat Application",
  ];
  const descriptions = [
    "A chatbot designed to assist users with mental health queries and provide resources.",
    "A system for logging interactions between healthcare professionals and patients, ensuring compliance and improving care.",
    "A real-time chat application built using WebSockets for instant messaging capabilities.",
  ];
  const techStack = [
    "FastAPI, Springboot, ReactJS, Tailwindcss, LangChain, MySQL, Groq API, Meta's LLaMA 3 for AI",
    "FastAPI, ReactJS, MySQL, SQLAlchemy, LangGraph, Tailwind CSS, Groq API, Meta's LLaMA 3 for AI",
    "On Going Project",
  ];
  const projectLinks = ["#", "#", "#"];

  return (
    <section
      id="project"
      className="min-h-screen pt-20 p-10 flex flex-col justify-center
      items-center text-center bg-gradient-to-br from-gray-100 to-gray-300 px-4"
    >
      <div
        className="h-auto pb-10 hover:border-x-4 rounded-2xl border-black
         hover:shadow-2xl transition-all duration-300 max-w-6xl w-full mx-auto px-4"
      >
        <h1 className="text-2xl md:text-3xl font-bold mt-10">
          My <b>Projects</b>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Here are some of the projects I have worked on:
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-100 to-gray-300 p-6
                rounded-lg shadow-md hover:shadow-blue-400 hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-semibold mb-2">{project}</h2>
              <p className="text-gray-600 mb-4">{descriptions[index]}</p>
              <h3 className="text-lg font-medium mb-2">Tech Stack:</h3>
              <ul className="flex flex-wrap justify-center gap-2 text-gray-600 p-0 list-none">
                {techStack[index].split(", ").map((tech, idx) => (
                  <li
                    key={idx}
                    className="bg-blue-500/10 text-blue-500 py-1
                             px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Tooltip Wrapper */}
              <div className="group relative mt-4">
                <a
                  href={projectLinks[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800
                  transition-all cursor-not-allowed"
                  onClick={(e) => e.preventDefault()}
                >
                  View Project
                </a>
                <span
                  className="absolute left-1/2 top-12 -translate-x-1/2 whitespace-nowrap
                  bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0
                  group-hover:opacity-100 transition-opacity pointer-events-none"
                >
                  Currently not available, will update soon.
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
