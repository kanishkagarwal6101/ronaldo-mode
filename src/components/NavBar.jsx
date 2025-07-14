import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const NavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsCollapsed(currentScrollY > lastScrollY && currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50
        backdrop-blur-lg bg-[#F2DE9B]/50 shadow-md rounded-full
        transition-all duration-500 ease-in-out
        ${isCollapsed ? "px-4 py-2 w-[70px]" : "px-8 py-3 w-[500px]"}`}
    >
      {/* Collapsed View */}
      {isCollapsed ? (
        <div className="flex items-center justify-center w-full">
          <div className="w-[60px] h-[60px] flex items-center justify-center">
            <Player
              autoplay
              loop
              src="/Cr7.json"
              style={{ width: "60px", height: "60px" }}
            />
          </div>
        </div>
      ) : (
        // Expanded View
        <div className="flex items-center justify-between w-full">
          <div className="w-[60px] h-[60px] flex items-center justify-center shrink-0">
            <Player
              autoplay
              loop
              src="/Cr7.json"
              style={{ width: "60px", height: "60px" }}
            />
          </div>
          <ul className="flex space-x-10 text-white font-semibold text-lg">
            <li>
              <a href="/" className="hover:text-red-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="signup" className="hover:text-red-300 transition">
                Sign Up
              </a>
            </li>
            <li>
              <a href="about" className="hover:text-red-300 transition">
                About Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
