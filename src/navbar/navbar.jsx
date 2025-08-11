import React, { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed  backdrop-blur-none top-0 w-full min-h-20 bg-gray-200 shadow-md z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-8 h-full">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="hover:text-gray-500">Welcome</span>
          </div>

          {/* Hamburger / Close icon (Mobile) */}
          <button
            className="w-7 h-7 relative cursor-pointer z-60 md:hidden text-3xl leading-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="link-hover">
              Home
            </a>
            <a href="#about" className="link-hover">
              About Me
            </a>
            <a href="#education" className="link-hover">
              Education and Skills
            </a>
            <a href="#project" className="link-hover">
              Projects
            </a>
            <a href="#contact" className="link-hover">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-16 h-auto right-0  w-64 bg-gradient-to-br
          from-gray-100 to-gray-300 shadow-lg transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-6 space-y-4">
          <a
            href="#home"
            className="block py-2 link-hover hover"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 link-hover"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </a>

          <a
            href="#education"
            className="block py-2 link-hover"
            onClick={() => setIsOpen(false)}
          >
            Education and Skills
          </a>
          <a
            href="#project"
            className="block py-2 link-hover"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className=" py-2 link-hover"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};
