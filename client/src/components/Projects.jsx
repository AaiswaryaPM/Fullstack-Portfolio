import axios from "axios";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Projects = () => {

  const [openDescription, setOpenDescription] = useState(null);

  const [projects, setProjects] = useState([]);
  useEffect(() => {

    const fetchProjects = async () => {

      try {

        const response = await axios.get(
          "https://portfolio-backend-acqk.onrender.com/api/projects"
        );

        setProjects(response.data.data);

      } catch (error) {

        console.log("Error fetching projects:", error);

      }

    };

    fetchProjects();

  }, []);

  return (
    <section
      id="projects"
      className="px-6 md:px-16 py-24 bg-gradient-to-br from-white via-[#f8f2ff] to-[#efe4ff] dark:from-[#0f0f0f] dark:via-[#161616] dark:to-[#1b1028] text-black dark:text-white transition-all duration-300"
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
            My Projects
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>

          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Some of the projects I built using modern frontend
            and backend technologies.
          </p>

        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-purple-300/30 transition-all duration-300 flex flex-col h-full w-full"
            >

              {/* Project Image */}
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />

              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 min-h-[64px]">
                  {project.title}
                </h3>

                {/* Desktop Description */}
                <p className="hidden md:block text-gray-700 dark:text-gray-300 leading-relaxed mb-5 min-h-[150px]">
                  {project.description}
                </p>

                {/* Mobile Dropdown Description */}
                <div className="md:hidden mb-5 min-h-[52px]">

                  <button
                    onClick={() =>
                      setOpenDescription(
                        openDescription === index ? null : index
                      )
                    }
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium"
                  >
                    {openDescription === index ? (
                      <>
                        Hide Description
                        <FaChevronUp />
                      </>
                    ) : (
                      <>
                        View Description
                        <FaChevronDown />
                      </>
                    )}
                  </button>

                  <AnimatePresence>

                    {openDescription === index && (

                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4 overflow-hidden"
                      >
                        {project.description}
                      </motion.p>

                    )}

                  </AnimatePresence>

                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-6 min-h-[60px] content-start">

                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border border-purple-300/30"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium hover:scale-105 transition-all duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>
            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;