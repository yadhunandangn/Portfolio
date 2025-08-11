import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mqabvorb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen pt-20 p-10 flex flex-col justify-center items-center text-center
            bg-gradient-to-br from-gray-100 to-gray-300 px-4"
    >
      <div className="h-auto pb-10 hover:border-x-4 rounded-2xl border-black hover:shadow-2xl transition-all duration-300 max-w-6xl w-full mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mt-10">
          Get in <b>Touch</b>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          I would love to hear from you! Whether you have a question, want to collaborate,
          or just want to say hi, feel free to reach out.
        </p>
        <form onSubmit={handleSubmit} className="mt-10 w-full max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm  font-bold text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
