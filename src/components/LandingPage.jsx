import React, { useEffect } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      {/* <NavBar /> */}
      <Header className="overflow-hidden" />
      <div
        data-aos="fade-up"
        className="bg-black text-white w-screen h-screen text-[--font-quote] py-24 px-6 flex flex-col items-center  justify-center text-center"
      >
        {/* Ronaldo Quote */}
        <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mb-6">
          "If you don't believe you are the best, then you will never achieve
          all that you are capable of."
        </h2>
        <p className="text-lg md:text-xl text-red-500 font-bold max-w-2xl">
          Cristiano Ronaldo
        </p>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          The Ronaldo Mode mindset is about showing up — no excuses, no off
          days.
        </p>
      </div>
    </>
  );
};

export default LandingPage;
