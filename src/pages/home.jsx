export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-100 to-gray-300 px-4">

      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Hi, I’m Yadhunandan GN
      </h1>

      {/* Tagline */}
      <p className="mt-4 text-lg md:text-xl text-gray-700">
        Exploring <span className="text-blue-600 font-semibold">Technology</span>, Driving{" "}
        <span className="text-blue-600 font-semibold">Innovation</span>
      </p>

      {/* Buttons */}
      <div className="mt-6 space-x-4">
        <a
          href="#project"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition-all"
        >
          Contact Me
        </a>
      </div>

    </section>
  );
};
