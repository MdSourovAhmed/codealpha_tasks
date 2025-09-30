import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  // Initialize darkMode from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Sync dark mode with document and localStorage
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  //   localStorage.setItem("darkMode", JSON.stringify(darkMode));
  //   console.log("Dark Mode:", darkMode); // Debug
  // }, [darkMode]);

  // const toggleDarkMode = () => {
  //   setDarkMode((prev) => !prev);
  // };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-20">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-teal-500">
          Admin Panel
        </Link>
        <button
          className="md:hidden font-bold text-teal-500 dark:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
        <div className={`md:flex ${isOpen ? "block" : "hidden"} md:block`}>
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              to="/"
              className="font-bold text-teal-500 dark:text-gray-300 hover:text-teal-500"
            >
              Home
            </Link>
            {user ? (
              <>
                <Link
                  to="/admin"
                  className="font-bold text-teal-500 dark:text-gray-300 hover:text-teal-500"
                >
                  Admin Panel{" "}
                </Link>
                <Link
                  to="/admin/menu"
                  className="font-bold text-teal-500 dark:text-gray-300 hover:text-teal-500"
                >
                  Events
                </Link>
                <Link
                  to="/admin/tables"
                  className="font-bold text-teal-500 dark:text-gray-300 hover:text-teal-500"
                >
                  Tables
                </Link>
                {/* <Link to="/chapters" className="font-bold text-teal-500 dark:text-gray-300 hover:text-teal-500">
                  Chapters
                </Link> */}
                {/* <span className="font-bold text-teal-500 dark:text-gray-300">
                  Welcome, {user.name || user.email}
                </span> */}
                <button
                  onClick={handleLogout}
                  className="font-bold text-teal-500 dark:text-gray-300 hover:text-teal-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/events"
                  className="font-bold text-teal-500 dark:text-gray-300 hover:text-teal-500"
                >
                  Events
                </Link>
                <Link
                  to="/login"
                  className="font-bold text-teal-500 dark:text-gray-300 hover:text-teal-500"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="font-bold text-teal-500 dark:text-gray-300 hover:text-teal-500"
                >
                  Register
                </Link>
              </>
            )}
            {/* <button
              onClick={toggleDarkMode}
              className="font-bold text-teal-500 dark:text-gray-300 hover:text-teal-500"
            >
              {darkMode ? "☀️" : "🌙"}
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
