// Contact.jsx
import resumePdf from "../assets/Aaiswarya_PM_Resume.pdf";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLaptopCode,
} from "react-icons/fa";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  
  const [popup, setPopup] = useState("");

  const [errors, setErrors] = useState({});

  const [success, setSuccess] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    setErrors({});

    try {
      setLoading(true);
      const response = await axios.post(
        "https://portfolio-backend-acqk.onrender.com/api/contact",
        formData
      );

      if (response.data.success) {
        // setSuccess("Message sent successfully!");
        setPopup("Message sent successfully! You will receive a reply soon.");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }

      setLoading(false);

      setTimeout(() => {
        setPopup("");
      }, 3000);

    } catch (error) {

      console.log(error);

      setPopup(error.response?.data?.message || "Failed to send message");

      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-16 py-24 bg-gradient-to-br from-white via-[#f8f2ff] to-[#efe4ff] dark:from-[#0f0f0f] dark:via-[#161616] dark:to-[#1b1028] text-black dark:text-white transition-all duration-300"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Me
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>

          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project idea or opportunity? Feel free to contact me.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="h-full"
          >

            {/* Contact Card */}
            <div className="relative overflow-hidden backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl h-full flex flex-col">

              {/* Animated Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400/20 blur-3xl rounded-full"></div>

              <h3 className="text-2xl font-bold mb-8 text-purple-600 dark:text-purple-400 relative z-10">
                Get In Touch
              </h3>

              {/* Email */}
              <div className="flex items-center gap-4 mb-6 relative z-10">

                <div className="w-14 h-14 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    aaiswaribm.learning@gmail.com
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 mb-6 relative z-10">

                <div className="w-14 h-14 rounded-full bg-pink-500 text-white flex items-center justify-center text-xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    +91 9092988705
                  </p>
                </div>

              </div>

              {/* Location */}
              <div className="flex items-center gap-4 relative z-10">

                <div className="w-14 h-14 rounded-full bg-purple-400 text-white flex items-center justify-center text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Tamil Nadu, India
                  </p>
                </div>

              </div>

              {/* Resume Button */}
              <a
                href={resumePdf}
                download
                className="inline-block w-fit mt-10 px-7 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all duration-300 relative z-10"
              >
                Download Resume
              </a>

              {/* Animated Developer Icon Section */}
              <div className="mt-10 flex items-center gap-5 relative z-10">

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative flex-shrink-0"
                >

                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-2xl rounded-full"></div>

                  {/* Icon Box */}
                  <div className="relative w-28 h-28 rounded-3xl bg-white/30 dark:bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl">

                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                      }}
                      className="text-5xl text-purple-500 dark:text-purple-400"
                    >
                      <FaLaptopCode />
                    </motion.div>

                  </div>

                </motion.div>

                {/* Collaboration Text */}
                <div className="flex-1">

                  <h4 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    Collaborative & Creative
                  </h4>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Open to internships, freelance projects,
                    and exciting opportunities to build impactful
                    digital experiences.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="h-full"
          >

            <form
              onSubmit={handleSubmit}
              className="backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl h-full flex flex-col justify-center"
            >

              {/* Name */}
              <div className="mb-6">

                <label className="block mb-2 font-medium">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-5 py-3 rounded-xl bg-white/30 dark:bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.name}
                  </p>
                )}

              </div>

              {/* Email */}
              <div className="mb-6">

                <label className="block mb-2 font-medium">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 rounded-xl bg-white/30 dark:bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email}
                  </p>
                )}

              </div>

              {/* Message */}
              <div className="mb-6">

                <label className="block mb-2 font-medium">
                  Your Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full px-5 py-3 rounded-xl bg-white/30 dark:bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 resize-none"
                ></textarea>

                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.message}
                  </p>
                )}

              </div>

              {/* Success Message */}
              {success && (
                <p className="text-green-500 mb-5 font-medium">
                  {success}
                </p>
              )}

              {/* ✅ POPUP (ONLY ADDITION) */}
              {popup && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-5 px-4 py-3 rounded-xl bg-green-500/10 border border-green-400 text-green-600 font-medium"
                >
                  {popup}
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-[1.02] transition-all duration-300 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;