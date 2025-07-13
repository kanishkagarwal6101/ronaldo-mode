import react from "react";
import "../App.css";

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

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10" />

        {/* Overlay Text */}
        <div className="absolute inset-0 text-[#FF1E1E] font-bold text-5xl md:text-7xl lg:text-9xl text-[--font-landing] z-20">
          <div className="absolute drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)] [text-shadow:_0_0_10px_#ff1e1e] text-[--font-landing] top-30 left-20 lg:top-20 lg:left-90">
            <span>RON</span>
          </div>
          <div className="absolute drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)] [text-shadow:_0_0_10px_#ff1e1e] top-30 right-10 lg:top-20 lg:right-90">
            <span>LDO</span>
          </div>
          <div className="absolute drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)] [text-shadow:_0_0_10px_#ff1e1e] lg:bottom-80 lg:left-45 bottom-150 left-25">
            <span>MO</span>
          </div>
          <div className="absolute drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)] [text-shadow:_0_0_10px_#ff1e1e] lg:bottom-80 lg:right-45 bottom-150 right-20">
            <span>DE</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
