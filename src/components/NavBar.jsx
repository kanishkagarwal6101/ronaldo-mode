import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-red-600/30 shadow-md flex justify-between items-center px-6 py-3">
      {/* Lottie logo */}
      <div className="w-12 h-12">
        <Player
          autoplay
          loop
          src="/cr7.json" // if cr7.json is in public folder
        />
      </div>

      {/* Links */}
      <ul className="flex space-x-6 text-white font-semibold text-lg">
        <li>
          <a href="#home" className="hover:text-red-300 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#signup" className="hover:text-red-300 transition">
            Sign Up
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-red-300 transition">
            About Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
