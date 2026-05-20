// Navbar.jsx

import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { GiBrain } from "react-icons/gi";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Navbar Links
  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Achievements",
    "Contact",
  ];

  // Detect Current Section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.getElementById(link.toLowerCase())
      );

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop - 120;
          const sectionHeight = section.offsetHeight;

          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto">

          {/* Navbar */}
          <div className="backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 shadow-lg rounded-2xl px-6 py-4 flex items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Portfolio
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8">

              {navLinks.map((link, index) => {
                const sectionId = link.toLowerCase();

                return (
                  <li key={index}>
                    <a
                      href={`#${sectionId}`}
                      className={`relative font-medium transition duration-300 group
                        
                        ${
                          activeSection === sectionId
                            ? "text-purple-500 dark:text-purple-400"
                            : "text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400"
                        }
                      `}
                    >
                      {link}

                      {/* Active / Hover Underline */}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-purple-500 transition-all duration-300
                          
                          ${
                            activeSection === sectionId
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }
                        `}
                      ></span>

                    </a>
                  </li>
                );
              })}

            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-4">

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-3xl text-gray-700 dark:text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <HiX /> : <HiMenuAlt3 />}
              </button>

            </div>

          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 shadow-xl rounded-2xl p-6 transition-all duration-300">

              <ul className="flex flex-col gap-6 text-center">

                {navLinks.map((link, index) => {
                  const sectionId = link.toLowerCase();

                  return (
                    <li key={index}>
                      <a
                        href={`#${sectionId}`}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition duration-300
                          
                          ${
                            activeSection === sectionId
                              ? "text-purple-500 dark:text-purple-400"
                              : "text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400"
                          }
                        `}
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}

              </ul>

              {/* MOBILE PLAY BUTTON */}
              <a
                href="#brainteaser"
                onClick={() => setIsOpen(false)}
                className="mt-6 flex items-center justify-center gap-3 w-full px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <GiBrain className="text-2xl" />
                Let's Play
              </a>

            </div>
          )}

        </div>
      </nav>

      {/* DESKTOP FLOATING GAME BUTTON */}
      <a
        href="#brainteaser"
        className="hidden md:flex fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white items-center justify-center shadow-2xl hover:scale-110 hover:rotate-6 transition-all duration-300 group"
      >
        <GiBrain className="text-3xl" />

        {/* Tooltip */}
        <span className="absolute right-20 whitespace-nowrap px-4 py-2 rounded-xl bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-white text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
          Let's Play
        </span>
      </a>
    </>
  );
};

export default Navbar;