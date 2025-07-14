import react from "react";
import "../index.css";

const Header = (props) => {
  return (
    <>
      {/* the heading for the landing page which begins with ronaldo and then his image and mode */}
      <div className="relative w-screen h-screen overflow-hidden ">
        {/* Background Image */}
        <img
          src="/ronaldo.jpg"
          alt="Ronaldo"
          className="absolute overflow-hidden top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 z-10" /> */}

        {/* Overlay Text */}
        <div className="absolute inset-0 text-[#F2DE9B] font-bold text-5xl md:text-7xl lg:text-8xl font-landing z-20">
          <div className="absolute drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)] [text-shadow:_0_0_10px_#ff1e1e] text-[--font-landing] bottom-150 left-35 lg:bottom-90 lg:left-45">
            <span>RONALDO</span>
          </div>
          <div className="absolute drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)] [text-shadow:_0_0_10px_#ff1e1e] lg:bottom-90 lg:right-65 bottom-40 right-45">
            <span>MODE</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
