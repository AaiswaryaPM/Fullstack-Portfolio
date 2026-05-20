// Skills.jsx

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFigma,
} from "react-icons/si";

const Skills = () => {

  // SKILL CATEGORIES
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          icon: <FaHtml5 />,
          color: "text-orange-500",
        },
        {
          name: "CSS",
          icon: <FaCss3Alt />,
          color: "text-blue-500",
        },
        {
          name: "JavaScript",
          icon: <FaJsSquare />,
          color: "text-yellow-400",
        },
        {
          name: "React",
          icon: <FaReact />,
          color: "text-cyan-400",
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss />,
          color: "text-sky-400",
        },
      ],
    },

    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          color: "text-green-500",
        },
        {
          name: "Express",
          icon: <SiExpress />,
          color: "text-gray-700 dark:text-white",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          color: "text-green-400",
        },
      ],
    },

    {
      title: "Programming",
      skills: [
        {
          name: "Java + DSA",
          icon: <FaJava />,
          color: "text-red-500",
        },
        {
          name: "Python",
          icon: <FaPython />,
          color: "text-yellow-500",
        },
      ],
    },

    {
      title: "Tools",
      skills: [
        {
          name: "GitHub",
          icon: <FaGithub />,
          color: "text-black dark:text-white",
        },
        {
          name: "Figma",
          icon: <SiFigma />,
          color: "text-pink-500",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="px-4 sm:px-6 md:px-16 py-24 bg-gradient-to-br from-[#f9f4ff] via-white to-[#efe4ff] dark:from-[#0f0f0f] dark:via-[#161616] dark:to-[#1b1028] text-black dark:text-white transition-all duration-300 overflow-hidden"
    >

      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Skills
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>

          <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to build modern,
            responsive, and scalable web applications.
          </p>

        </motion.div>

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">

          {skillCategories.map((category, categoryIndex) => (

            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="relative overflow-hidden backdrop-blur-xl bg-white/20 dark:bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-5 hover:shadow-purple-400/20 transition-all duration-300"
            >

              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-400/20 blur-3xl rounded-full"></div>

              {/* CATEGORY TITLE */}
              <div className="relative z-10 mb-5">

                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {category.title}
                </h3>

                <div className="w-14 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>

              </div>

              {/* ICONS GRID */}
              <div className="relative z-10 grid grid-cols-3 gap-3">

                {category.skills.map((skill, skillIndex) => (

                  <motion.div
                    key={skillIndex}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="group rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20 p-4 flex flex-col items-center justify-center text-center hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-300"
                  >

                    {/* ICON */}
                    <div
                      className={`text-3xl mb-2 ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      {skill.icon}
                    </div>

                    {/* NAME */}
                    <h4 className="text-sm font-medium leading-tight">
                      {skill.name}
                    </h4>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;