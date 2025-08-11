export const Education = () => {
  const Languages = ["Java", "Python", "JavaScript", "HTML", "CSS"];
  const FrontEnd = ["ReactJS", "Tailwind CSS"];
  const Backend = ["Spring Boot", "RESTful APIs", "FastAPI"];
  const Databases = ["MySQL", "MongoDB"];
  const Tools = ["Git", "Postman", "VS Code"];
  const Technologies = ["Machine Learning", "Chatbots", "AI"];

  return (
    <section
      id="education"
      className="min-h-screen pt-20 p-10 flex flex-col justify-center items-center text-center
      bg-gradient-to-br from-gray-100 to-gray-300 px-4"
    >
      <div
        className="h-auto pb-10 hover:border-x-4 rounded-2xl border-black hover:shadow-2xl transition-all
      duration-300 max-w-6xl w-full mx-auto px-4"
      >
        <h1 className="w-full italic text-2xl mt-6">
          My <b>Education</b> and Skills
        </h1>
        <br />

        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between
                     border-l-4 md:border-l-0 md:border-t-4 border-blue-700
                     relative md:pt-6 md:pb-0 pt-6 space-y-10 md:space-y-0 md:space-x-6"
        >
          {[
            { title: "Secondary School (Class 10)", year: "2016–2017" },
            {
              title: "Higher Secondary (Class 12, Science Stream)",
              year: "2017–2019",
            },
            {
              title: "Bachelor's in Computer Application (BCA)",
              year: "2019–2022",
            },
            {
              title: "Master's in Computer Application (MCA)",
              year: "2023–2025",
            },
          ].map((item, index) => (
            <div key={index} className="relative md:flex-1">
              <div
                className="w-4 h-4 bg-black rounded-full absolute
                           -left-[10px] top-1/2 transform -translate-y-1/2
                           md:left-1/2 md:-top-6 md:-translate-x-1/2 md:translate-y-0"
              ></div>

              <div className="ml-6 md:ml-0 md:mt-6 text-center md:text-center">
                <p className="text-sm font-semibold">{item.title}</p>
                <span className="text-xs text-gray-500">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Languages", items: Languages },
              { title: "Front-End", items: FrontEnd },
              { title: "Backend", items: Backend },
              { title: "Databases", items: Databases },
              { title: "Tools", items: Tools },
              { title: "Technologies", items: Technologies },
            ].map(({ title, items }, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-100 to-gray-300 p-6
                rounded-lg shadow-md hover:px-[14px] hover:shadow-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold mb-4">{title}</h3>
                <ul className="flex flex-wrap justify-center items-center gap-4 list-none">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1
                             px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2] transition "
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
