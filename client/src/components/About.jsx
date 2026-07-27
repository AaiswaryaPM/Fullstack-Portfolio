// About.jsx
import internCert from "../assets/CodSoft Intern Cert.jpg";
import appinCert from "../assets/Appin Tech Intern Cert.jpg";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEye,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 md:px-16 py-24 bg-gradient-to-br from-white via-[#f8f2ff] to-[#efe4ff] dark:from-[#0f0f0f] dark:via-[#161616] dark:to-[#1b1028] text-black dark:text-white transition-all duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* Description Card */}
            <div className="backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 rounded-3xl shadow-xl p-6 sm:p-8 min-h-[320px] flex flex-col justify-center">

              <h3 className="text-2xl font-bold mb-5 text-purple-600 dark:text-purple-400">
                Who Am I?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg mb-4">
                I am a motivated and passionate developer currently pursuing a B.Tech in Agricultural Engineering (3rd year), with a strong interest in building a career in the IT industry.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                I enjoy designing and developing modern, interactive web applications using technologies like React, Tailwind CSS, Node.js, Express.js, and MongoDB.
                <br /><br />
                Although my academic background is in agriculture, my passion lies in software development, and I am actively working towards transitioning into the tech industry where I can grow as a full-stack developer and contribute to impactful projects.
              </p>

            </div>

            {/* SOCIAL SECTION */}

            {/* DESKTOP CARDS */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-5 mt-8">

              {/* GitHub */}
              <a
                href="https://github.com/AaiswaryaPM"
                target="_blank"
                rel="noreferrer"
                className="backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 rounded-2xl p-5 flex items-center gap-4 hover:scale-105 hover:shadow-purple-300/30 transition-all duration-300"
              >
                <FaGithub className="text-3xl text-black dark:text-white" />

                <div>
                  <h4 className="font-semibold">GitHub</h4>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    View Projects
                  </p>
                </div>

              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aaiswarya-pm-58549b2a8"
                target="_blank"
                rel="noreferrer"
                className="backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 rounded-2xl p-5 flex items-center gap-4 hover:scale-105 hover:shadow-purple-300/30 transition-all duration-300"
              >
                <FaLinkedin className="text-3xl text-blue-500" />

                <div>
                  <h4 className="font-semibold">LinkedIn</h4>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Professional Profile
                  </p>
                </div>

              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 rounded-2xl p-5 flex items-center gap-4 hover:scale-105 hover:shadow-pink-300/30 transition-all duration-300"
              >
                <FaInstagram className="text-3xl text-pink-500" />

                <div>
                  <h4 className="font-semibold">Instagram</h4>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Social Presence
                  </p>
                </div>

              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/Aaiswarya_PM/"
                target="_blank"
                rel="noreferrer"
                className="backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 rounded-2xl p-5 flex items-center gap-4 hover:scale-105 hover:shadow-yellow-300/30 transition-all duration-300"
              >
                <SiLeetcode className="text-3xl text-yellow-500" />

                <div>
                  <h4 className="font-semibold">LeetCode</h4>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Coding Practice
                  </p>
                </div>

              </a>

            </div>

            {/* MOBILE ICONS */}
            <div className="flex sm:hidden justify-center gap-5 mt-8">

              <a
                href="https://github.com/AaiswaryaPM"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/aaiswarya-pm-58549b2a8"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 flex items-center justify-center text-2xl text-blue-500 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 flex items-center justify-center text-2xl text-pink-500 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://leetcode.com/u/Aaiswarya_PM/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 flex items-center justify-center text-2xl text-yellow-500 hover:scale-110 transition-all duration-300"
              >
                <SiLeetcode />
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* INTERNSHIP BOX */}
            <div className="backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 rounded-3xl shadow-xl p-6 hover:scale-[1.02] transition-all duration-300">

              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6">
                Internships
              </h3>

              {/* Internship 1 */}
              <div className="flex items-start justify-between gap-4">

                <div>
                  <h4 className="text-lg font-semibold">
                    CODSOFT
                  </h4>

                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    Web Development Intern
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Duration: 1 Month
                  </p>
                </div>

                <a
                  href={internCert}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center text-xl shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <FaEye />
                </a>

              </div>

              <hr className="my-6 border-white/20" />

              {/* Internship 2 */}
              <div className="flex items-start justify-between gap-4">

                <div>
                  <h4 className="text-lg font-semibold">
                    Appin Technology, Coimbatore
                  </h4>

                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    MERN Stack Intern
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Duration: 15 Days
                  </p>
                </div>

                <a
                  href={appinCert}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center text-xl shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <FaEye />
                </a>

              </div>

            </div>

            {/* EDUCATION */}
            <div className="backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 rounded-3xl shadow-xl p-6 sm:p-8">

              <h3 className="text-2xl font-bold mb-10 text-purple-600 dark:text-purple-400">
                Education Timeline
              </h3>

              <div className="relative border-l-4 border-purple-400 pl-8 space-y-10">

                {/* Item 1 */}
                <div className="relative">

                  <div className="absolute -left-[42px] top-1 w-5 h-5 bg-purple-500 rounded-full border-4 border-white dark:border-[#161616]"></div>

                  <h4 className="text-xl font-semibold">
                    B.Tech Agri
                  </h4>

                  <p className="text-purple-500 font-medium">
                    2024 - 28
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Erode Sengunthar Engineering College • CGPA(Till 3rd sem): 9.4/10
                  </p>

                </div>

                {/* Item 2 */}
                <div className="relative">

                  <div className="absolute -left-[42px] top-1 w-5 h-5 bg-pink-500 rounded-full border-4 border-white dark:border-[#161616]"></div>

                  <h4 className="text-xl font-semibold">
                    Higher Secondary Education
                  </h4>

                  <p className="text-pink-500 font-medium">
                    2023 - 24
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Jai Saradha Matriculation Hr.Sec.School • Bio-Maths • Score: 96.3%
                  </p>

                </div>

                {/* Item 3 */}
                <div className="relative">

                  <div className="absolute -left-[42px] top-1 w-5 h-5 bg-purple-400 rounded-full border-4 border-white dark:border-[#161616]"></div>

                  <h4 className="text-xl font-semibold">
                    Secondary Education
                  </h4>

                  <p className="text-purple-400 font-medium">
                    2021 - 22
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    AVP Trust Matriculation Hr.Sec.School • Score: 98%
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;