// Hero.jsx
import profileImg from "../assets/profile.png"
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-16 pt-24 md:pt-28 bg-gradient-to-br from-[#f5edff] via-white to-[#efe4ff] dark:from-[#0f0f0f] dark:via-[#161616] dark:to-[#1b1028] text-black dark:text-white transition-all duration-300 overflow-hidden"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 text-center md:text-left"
        >

          {/* Small Intro */}
          <p className="text-lg sm:text-xl md:text-2xl text-purple-600 dark:text-purple-400 font-bold mb-4 tracking-[5px]">
            FULL STACK DEVELOPER
          </p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Aaiswarya PM
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            I build modern, responsive, and interactive web applications
            using React, Tailwind CSS, Node.js, Express.js, and MongoDB.
            Passionate about creating elegant UI and seamless user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">

            {/* Project Button */}
            <a
              href="#projects"
              className="px-6 sm:px-7 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-purple-300/50 transition-all duration-300"
            >
              View My Works
            </a>

            {/* Resume Button */}
            <a
              href="/src/assets/Aaiswarya_PM_Resume.pdf"
              download
              className="px-6 sm:px-7 py-3 rounded-xl border border-purple-400 text-purple-700 dark:text-purple-300 dark:border-purple-500 font-semibold backdrop-blur-md bg-white/20 dark:bg-white/10 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300"
            >
              Download Resume
            </a>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center"
        >

          <div className="relative group cursor-pointer">

            {/* FLOATING BACKGROUND ICONS */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 text-cyan-400 text-3xl opacity-60"
            >
              <FaReact />
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -right-8 text-green-500 text-3xl opacity-60"
            >
              <FaNodeJs />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 -left-10 text-yellow-400 text-3xl opacity-60"
            >
              <FaJsSquare />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 right-0 text-sky-400 text-3xl opacity-60"
            >
              <SiTailwindcss />
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -right-10 text-green-400 text-3xl opacity-60"
            >
              <SiMongodb />
            </motion.div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-purple-400 blur-3xl opacity-30 rounded-full group-hover:opacity-50 transition-all duration-500"></div>

            {/* Animated Circle */}
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 3,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              className="relative w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-lg"
            >

              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

            </motion.div>

            {/* Floating Border Animation */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-400/40 animate-pulse"></div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;