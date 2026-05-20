// Achievements.jsx
import ach1 from "../assets/achievements-img/digiventure-award.png";
import ach2 from "../assets/achievements-img/topper-award.jpg";
import ach3 from "../assets/achievements-img/topper-cert.jpg";
import cert1 from "../assets/certificates-img/build-your-brand-cert.jpg";
import cert2 from "../assets/certificates-img/cicd-cert.jpg";
import cert3 from "../assets/certificates-img/data-driven-it-sec-cert.jpg";
import cert4 from "../assets/certificates-img/emc-3d-webinar.jpg";
import cert5 from "../assets/certificates-img/fsd-intern-cert.jpg";
import cert6 from "../assets/certificates-img/genai-cert.jpg";
import cert7 from "../assets/certificates-img/kpr-cert.jpg";
import cert8 from "../assets/certificates-img/kpr-projectxpress.jpg";
import cou1 from "../assets/courses-img/da-ert.jpg";
import cou2 from "../assets/courses-img/fsd-cert.jpg";
import cou3 from "../assets/courses-img/graphic-design-cert.jpg";
import cou4 from "../assets/courses-img/python-cert.jpg";
import cou5 from "../assets/courses-img/uiux-cert.jpg";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTrophy,
  FaCertificate,
  FaMedal,
  FaEye,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("achievements");
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const data = {
    achievements: [
      {
        title: "Class Topper",
        desc: "Secured top academic performance with consistent excellence and outstanding results.",
        certificate: [
          {ach2},
          {ach3},
        ],
      },
      {
        title: "DigiVenture - Second Prize",
        desc: "Won second prize and a cash award of ₹500 in DigiVenture (held at KPRIET), where participants had to design and develop a website within just 15 minutes.",
        certificate: {ach1},
        projectLink: "https://your-project-link.com",
      },
    ],

    courses: [
      {
        title: "Full Stack Web Development",
        desc: "Gained an overall knowledge about frontend, backend and database management systems.",
        certificate: {cou2},
      },
      {
        title: "Python for Beginners",
        desc: "Gained a knowledge in python basics and OOPs concepts.",
        certificate: {cou4},
      },
      {
        title: "UI/UX for Beginners",
        desc: "Learnt the fundamentals of UI/UX Design.",
        certificate: {cou5},
      },
      {
        title: "Data Analytics",
        desc: "Gained a knowledge on datas are manipulated and converted into interactive dashboards for effective analysis.",
        certificate: {cou1},
      },
    ],

    certificates: [
      {
        title: "Data Driven IT Sectors",
        desc: "Understood how the datas are managed in IT sectors.",
        certificate: {cert3},
      },
      {
        title: "Emerging AI Technologies",
        desc: "Attended a workshop in KPRIET and had a knowlege about how AI rules the IT sectors.",
        certificate: {cert7},
      },
      {
        title: "Build Your Brand, Land Your Job - Code Create Connect",
        desc: "Attended an effective skillcamp on how to start a career in FSD.",
        certificate: {cert1},
      },
      {
        title: "AI for Students: Build Your Own GenAI Model",
        desc: "Made a part in a workshop which equipped the skills in this AI era.",
        certificate: {cert6},
      },
      {
        title: "ProjectXpress",
        desc: "Presented our IoT project 'AI-Based Predictive Fire Prevention System' in KPRIET.",
        certificate: {cert8},
      },
      {
        title: "Error Makes Clever - 3D Webinar",
        desc: "Had a hands-on training in this webinar where I build a LinkedIn landing page with AI tools.",
        certificate: {cert4},
      },
    ],
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const visibleData =
    isMobile && !showAllMobile
      ? data[activeTab].slice(0, 2)
      : data[activeTab];

  return (
    <section
      id="achievements"
      className="px-6 md:px-16 py-24 bg-gradient-to-br from-[#f9f4ff] via-white to-[#efe4ff] dark:from-[#0f0f0f] dark:via-[#161616] dark:to-[#1b1028] text-black dark:text-white transition-all duration-300"
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
            Achievements & Certificates
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>

          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My achievements, completed courses, and certifications.
          </p>

        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">

          <button
            onClick={() => setActiveTab("achievements")}
            className={`px-5 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === "achievements"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-white/20 dark:bg-white/10 backdrop-blur-md"
            }`}
          >
            <span className="flex items-center gap-2">
              <FaTrophy />
              <span className="hidden sm:inline">Achievements</span>
            </span>
          </button>

          <button
            onClick={() => setActiveTab("courses")}
            className={`px-5 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === "courses"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-white/20 dark:bg-white/10 backdrop-blur-md"
            }`}
          >
            <span className="flex items-center gap-2">
              <FaMedal />
              <span className="hidden sm:inline">Courses</span>
            </span>
          </button>

          <button
            onClick={() => setActiveTab("certificates")}
            className={`px-5 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === "certificates"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-white/20 dark:bg-white/10 backdrop-blur-md"
            }`}
          >
            <span className="flex items-center gap-2">
              <FaCertificate />
              <span className="hidden sm:inline">Certificates</span>
            </span>
          </button>

        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >

            {visibleData.map((item, index) => (

              <div
                key={index}
                className="relative backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] hover:shadow-purple-300/30 transition-all duration-300"
              >

                {activeTab === "achievements" && (
                  <div
                    className={`relative overflow-hidden ${
                      Array.isArray(item.certificate)
                        ? "grid grid-cols-2 gap-1 h-[240px]"
                        : "h-[240px]"
                    }`}
                  >

                    {Array.isArray(item.certificate) ? (
                      item.certificate.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${item.title} ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ))
                    ) : (
                      <img
                        src={item.certificate}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {item.projectLink && (
                      <a
                        href={item.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}

                  </div>
                )}

                {activeTab !== "achievements" && (
                  <button
                    onClick={() => setSelectedCertificate(item.certificate)}
                    className="absolute top-5 right-5 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-10"
                  >
                    <FaEye />
                  </button>
                )}

                <div className="p-8">

                  <h3 className={`text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4 ${
                    activeTab !== "achievements" ? "pr-16" : ""
                  }`}>
                    {item.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </motion.div>

        </AnimatePresence>

        {/* Show More Button (Mobile Only) */}
        {isMobile && data[activeTab].length > 2 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg"
            >
              {showAllMobile ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

        {/* Certificate Popup */}
        <AnimatePresence>

          {selectedCertificate && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            >

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl w-full"
              >

                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute -top-4 -right-4 z-10 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300"
                >
                  <FaTimes />
                </button>

                <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white dark:bg-[#161616]">

                  <img
                    src={selectedCertificate}
                    alt="Certificate"
                    className="w-full h-auto object-contain max-h-[85vh]"
                  />

                </div>

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </section>
  );
};

export default Achievements;