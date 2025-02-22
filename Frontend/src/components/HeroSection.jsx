import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import bgvideo from "../assets/hero-video.mp4";
import { FaTimes } from "react-icons/fa";
import Btn1 from "./Btn1";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bgvideo} type="video/mp4" />
      </video>

      {/* Header Component */}
      <Header isOpen={isOpen} setIsOpen={setIsOpen} className="z-50" />

      {/* Full-screen Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black flex flex-col justify-center items-center text-white text-3xl space-y-6 z-40"
          >
            <button
              className="absolute top-6 right-6 text-4xl focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            <a href="#home" tabIndex="0" aria-label="Go to Home">Home</a>
            <a href="#portfolio" tabIndex="0" aria-label="View Portfolio">Portfolio</a>
            <a href="#about" tabIndex="0" aria-label="Learn About Us">About us</a>
            <a href="#services" tabIndex="0" aria-label="Explore Services">Services</a>
            <a href="#contacts" tabIndex="0" aria-label="Contact Us">Contacts</a>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero Section Buttons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-6">
        <Btn1 text="View Portfolio" link="/portfolio" className="mt-4 px-8" />
      </div>
    </div>
  );
};

export default HeroSection;
