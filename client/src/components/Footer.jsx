// Footer.jsx

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="px-6 md:px-16 py-10 bg-gradient-to-r from-[#f5edff] via-white to-[#efe4ff] dark:from-[#0f0f0f] dark:via-[#161616] dark:to-[#1b1028] text-black dark:text-white transition-all duration-300 border-t border-white/20"
    >

      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo / Name */}
          <div className="text-center md:text-left">

            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Aaiswarya PM
            </h2>

            <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-md">
              Building modern and responsive web applications
              with clean UI and smooth user experience.
            </p>

          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">

            {/* GitHub */}
            <a
              href="https://github.com/AaiswaryaPM"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 flex items-center justify-center text-xl hover:scale-110 hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aaiswarya-pm-58549b2a8"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 flex items-center justify-center text-xl hover:scale-110 hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 flex items-center justify-center text-xl hover:scale-110 hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              <FaInstagram />
            </a>

            {/* Email */}
            <a
              href="mailto:aaiswaribm.learning@gmail.com"
              className="w-12 h-12 rounded-full backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 flex items-center justify-center text-xl hover:scale-110 hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/20 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">

          <p className="text-gray-700 dark:text-gray-300">
            © 2026 Aaiswarya. All Rights Reserved.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            Designed & Developed with ❤️ using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;