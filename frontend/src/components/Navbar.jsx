import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");

    handleSuccess("User logged out");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <nav className="bg-white shadow-lg p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          MyApp
        </Link>

        {/* Right Side (User + Logout) */}
        <div className="flex items-center gap-6">
            <Link to="/about">About</Link>

          {/* Username */}
          {loggedInUser ? (
            <span className="font-semibold text-gray-700">
              Hello, <span className="text-indigo-600">{loggedInUser}</span>
            </span>
          ) : (
            <Link
              to="/login"
              className="text-gray-600 hover:text-indigo-600 font-medium"
            >
              Login
            </Link>
          )}

          {/* Logout Button */}
          {loggedInUser && (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      <ToastContainer />
    </nav>
  );
};

export default Navbar;
