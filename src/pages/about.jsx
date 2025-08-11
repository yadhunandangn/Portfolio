import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-20 flex flex-col justify-center items-center text-center
      bg-gradient-to-br from-gray-100 to-gray-300 px-4"
    >
      <div
        className="h-auto pb-10 hover:border-x-4 rounded-2xl border-black hover:shadow-2xl transition-all
      duration-300 max-w-6xl w-full mx-auto px-4"
      >
        <h1 className="w-full italic text-2xl mt-6">
          A bit <b>About me</b>
        </h1>

        {/* Flex container */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-6">
          {/* Image */}
          <img
            src={`${import.meta.env.BASE_URL}Yadhu.jpg`}
             alt="Yadhunandan GN"
            className="w-40 h-40 md:w-68 md:h-68 rounded-full object-cover border-4 border-gray-300 shadow-md"
          />

          {/* Text */}
          <p className="text-lg md:text-xl text-gray-700 text-center md:text-left leading-relaxed">
            I am a Final Year Student at Dayananda Sagar College of Engineering,
            pursuing a Master of Computer Applications (MCA).
            <br />
            Full stack development, Machine Learning, Chatbots, and AI are my
            domains of interest. I am a passionate learner with good
            problem-solving abilities.
            <br />I am looking for opportunities to work on real-world projects
            that challenge my skills and allow me to contribute to innovative
            solutions.
            <br />
            <br />
            <b>Full Name:</b>Yadhunandan GN <br />
            <b>DOB:</b>06/03/2002 <br />
            <b>Native:</b>Tumkur, Karnataka, India{" "}
            <br />
          </p>
        </div>
        <div className="flex justify-center items-center mt-6 space-x-10">
          {/* Social Media Icons */}
          <a
            href="https://www.linkedin.com/in/yadhunandan-gn-57148b255/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-600 hover:text-blue-800"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yadhunandangn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
            style={{ color: "#181717" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#333333")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#181717")}
          >
            <FaGithub />
          </a>

          <a
            href="mailto:yadhunandan2002@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-red-600 hover:text-red-800"
          >
            <MdEmail />
          </a>

          <a
            href="https://wa.me/7899118772"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-green-600 hover:text-green-800"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

    </section>
  );
};
