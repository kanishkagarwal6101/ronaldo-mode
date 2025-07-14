import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animate only once
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}

export default App;
