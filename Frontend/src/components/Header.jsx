import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Header = ({ isOpen, setIsOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 transform -translate-x-1/2 w-full   flex items-center justify-between px-8 md:px-12 py-4 z-20 transition-all ease-in-out duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-lg shadow-lg" : "bg-black/10 backdrop-blur-sm top-5 max-w-[1200px] rounded-xl"
      }`}
    >
      <h1 className="text-white text-2xl font-bold">Lancet Logo</h1>

      <div className="flex items-center space-x-3 text-white">
        <Link to="/" className="btn" data-hover="+91-8707438955">
          <span>Contact Now</span>
        </Link>

        <Link to="/" className="btn" data-hover="contact@lancetarchitect.com">
          <span>contact@lancetarchitect.com</span>
        </Link>

        <HamburgerMenu isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
      </div>
    </header>
  );
};

export default Header;
