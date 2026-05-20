// BrainTeaser.jsx

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";

const words = [
  {
    word: "react",
    hint: "Popular frontend library",
  },
  {
    word: "javascript",
    hint: "Programming language of the web",
  },
  {
    word: "mongodb",
    hint: "NoSQL database",
  },
  {
    word: "express",
    hint: "Backend framework for Node.js",
  },
  {
    word: "developer",
    hint: "Person who builds software",
  },
  {
    word: "tailwind",
    hint: "Utility-first CSS framework",
  },
  {
    word: "portfolio",
    hint: "Showcase website",
  },
  {
    word: "animation",
    hint: "Motion effects in UI",
  },
  {
    word: "frontend",
    hint: "Client-side development",
  },
  {
    word: "backend",
    hint: "Server-side development",
  },
];

const BrainTeaser = () => {

  const [currentWord, setCurrentWord] = useState("");
  const [scrambledWord, setScrambledWord] = useState("");
  const [hint, setHint] = useState("");
  const [showHint, setShowHint] = useState(false);

  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);

  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // NEW STATES
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  // Shuffle Word
  const shuffleWord = (word) => {
    return word
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  };

  // Generate New Word
  const generateWord = () => {

    const randomItem =
      words[Math.floor(Math.random() * words.length)];

    setCurrentWord(randomItem.word);
    setHint(randomItem.hint);

    setScrambledWord(shuffleWord(randomItem.word));

    setUserInput("");
    setMessage("");
    setShowHint(false);
  };

  // Start Game
  const startGame = () => {
    setGameStarted(true);
    setGameEnded(false);
    setScore(0);
    setTimer(30);
    setShowPopup(false);
    generateWord();
  };

  // Timer
  useEffect(() => {

    if (!gameStarted || gameEnded) return;

    if (timer > 0) {

      const countdown = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearTimeout(countdown);

    } else {

      setShowPopup(true);
      setGameEnded(true);

    }

  }, [timer, gameStarted, gameEnded]);

  // Check Answer
  const checkAnswer = () => {

    if (userInput.toLowerCase() === currentWord) {

      setScore(score + 1);

      setMessage("🎉 Correct Answer!");

      setTimeout(() => {
        generateWord();
      }, 700);

    } else {

      setMessage("❌ Wrong Answer");

    }

  };

  // Restart Game
  const restartGame = () => {

    setScore(0);
    setTimer(30);

    setMessage("");

    setShowPopup(false);
    setGameEnded(false);
    setGameStarted(true);

    generateWord();

  };

  // End Game
  const endGame = () => {
    setShowPopup(false);
    setGameStarted(false);
    setGameEnded(false);
    setTimer(30);
    setScore(0);
    setMessage("");
    setUserInput("");
  };

  return (
    <section
      id="brainteaser"
      className="px-4 sm:px-6 md:px-16 py-24 bg-gradient-to-br from-[#f9f4ff] via-white to-[#efe4ff] dark:from-[#0f0f0f] dark:via-[#161616] dark:to-[#1b1028] text-black dark:text-white transition-all duration-300 overflow-hidden"
    >

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Brain Teaser Game
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>

          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            Unscramble the word before time runs out.
          </p>

        </motion.div>

        {/* START SCREEN */}
        {!gameStarted && (

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden backdrop-blur-xl bg-white/20 dark:bg-white/10 border border-white/20 rounded-[32px] p-10 shadow-2xl text-center"
          >

            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400/20 blur-3xl rounded-full"></div>

            <div className="relative z-10">

              <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Ready to Play?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 text-lg mb-10">
                Test your vocabulary and coding knowledge with this fun word scramble challenge.
              </p>

              <button
                onClick={startGame}
                className="px-10 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Game
              </button>

            </div>

          </motion.div>

        )}

        {/* GAME CARD */}
        {gameStarted && (

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden backdrop-blur-xl bg-white/20 dark:bg-white/10 border border-white/20 rounded-[32px] p-6 sm:p-10 shadow-2xl text-center"
          >

            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400/20 blur-3xl rounded-full"></div>

            {/* SCORE + TIMER */}
            <div className="relative z-10 flex flex-row items-center justify-center gap-3 sm:gap-6 mb-10">

              {/* Score */}
              <div className="flex-1 sm:flex-none min-w-0 sm:min-w-[170px] px-4 sm:px-6 py-4 rounded-2xl bg-white/40 dark:bg-white/10 border border-white/20 shadow-lg backdrop-blur-lg">

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Current Score
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {score}
                </h3>

              </div>

              {/* Timer */}
              <div className="flex-1 sm:flex-none min-w-0 sm:min-w-[170px] px-4 sm:px-6 py-4 rounded-2xl bg-white/40 dark:bg-white/10 border border-white/20 shadow-lg backdrop-blur-lg">

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Time Remaining
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-pink-500">
                  {timer}s
                </h3>

              </div>

            </div>

            {/* SCRAMBLED WORD */}
            <motion.div
              key={scrambledWord}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 mb-10"
            >

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[10px] text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text uppercase break-all">
                {scrambledWord}
              </h1>

            </motion.div>

            {/* INPUT */}
            <div className="relative z-10 flex justify-center">

              <input
                type="text"
                placeholder="Enter correct word"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                disabled={timer === 0}
                className="w-full md:w-[70%] px-5 py-4 rounded-2xl bg-white/40 dark:bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-purple-400 text-lg transition-all duration-300"
              />

            </div>

            {/* BUTTONS */}
            <div className="relative z-10 flex flex-wrap justify-center items-center gap-4 mt-8">

              {/* Submit */}
              <button
                onClick={checkAnswer}
                disabled={timer === 0}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
              >
                Submit
              </button>

              {/* Desktop Hint */}
              <button
                onClick={() => setShowHint(!showHint)}
                className="hidden sm:flex px-8 py-3 rounded-xl border border-yellow-400 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900/20 transition-all duration-300 items-center gap-2"
              >
                <FaLightbulb />
                {showHint ? "Hide Hint" : "Show Hint"}
              </button>

              {/* Mobile Hint Icon */}
              <button
                onClick={() => setShowHint(!showHint)}
                className="sm:hidden w-12 h-12 rounded-xl border border-yellow-400 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900/20 transition-all duration-300 flex items-center justify-center text-xl"
              >
                <FaLightbulb />
              </button>

            </div>

            {/* HINT */}
            <AnimatePresence>

              {showHint && (

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="relative z-10 mt-6"
                >

                  <p className="inline-block px-5 py-3 rounded-2xl bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 font-medium">
                    💡 Hint: {hint}
                  </p>

                </motion.div>

              )}

            </AnimatePresence>

            {/* MESSAGE */}
            {message && (

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative z-10 mt-8 text-xl font-semibold"
              >
                {message}
              </motion.p>

            )}

          </motion.div>

        )}

        {/* FINAL SCORE POPUP */}
        <AnimatePresence>

          {showPopup && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            >

              <motion.div
                initial={{ scale: 0.7 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.7 }}
                className="w-full max-w-md rounded-3xl bg-white dark:bg-[#161616] p-8 text-center shadow-2xl border border-white/20"
              >

                <h2 className="text-3xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                  Game Over
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Your Final Score
                </p>

                <div className="text-6xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
                  {score}
                </div>

                {/* FINAL BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">

                  <button
                    onClick={restartGame}
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all duration-300"
                  >
                    Play Again
                  </button>

                  <button
                    onClick={endGame}
                    className="px-8 py-3 rounded-xl border border-purple-400 text-purple-700 dark:text-purple-300 dark:border-purple-500 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300"
                  >
                    End Game
                  </button>

                </div>

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </section>
  );
};

export default BrainTeaser;