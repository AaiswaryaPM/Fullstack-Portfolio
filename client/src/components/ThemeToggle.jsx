import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check saved theme on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle Theme
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:scale-110 transition duration-300"
    >
      {darkMode ? (
        <Sun className="text-yellow-400" size={20} />
      ) : (
        <Moon className="text-purple-700" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;