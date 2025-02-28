import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logo.png'
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(true); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "", label: "Home", width: "w-20" },
    { id: "about", label: "About Us", width: "w-32" },
    { id: "projects", label: "Projects", width: "w-28" },
    { id: "gallery", label: "Gallery", width: "w-24" },
    { id: "testimonial", label: "Testimonial", width: "w-36" },
    { id: "blogs", label: "Blog", width: "w-20" },
    { id: "contact", label: "Contact Us", width: "w-32" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
    <header
      className={`lg:flex hidden fixed left-1/2 transform -translate-x-1/2 w-full  items-center justify-between px-6 md:px-12 py-4 z-50 transition-all ease-in-out duration-1000 ${
        scrolled
          ? "bg-black/90 backdrop-blur-lg shadow-lg"
          : "bg-black/10 hover:bg-black/50 backdrop-blur-sm top-5 lg:max-w-[1200px] 2xl:max-w-[1400px] rounded-xl"
      }`}
    >
      <Link to="/" className="w-44"  onClick={scrollToTop}>
        <img src={logo}/>
      </Link>

      <div className={`flex items-center space-x-3 text-white gap-4`}>
        <div className={`${isOpen ? "hidden" : "block"}`}>
          <a
            href="tel:8707438955"
            className={`btn min-w-[170px] text-lg`}
            data-hover="+91-8707438955"
          >
            <span>Contact Now</span>
          </a>
        </div>
        <div className={`${isOpen ? "hidden" : "block"}`}>
          <a
            href="mailto:contact@lancetarchitect.com"
            className={`btn min-w-[300px] text-lg`}
            data-hover="contact@lancetarchitect.com"
          >
            <span>contact@lancetarchitect.com</span>
          </a>
        </div>
        {/* Hamburger Menu */}
        <div
          className={`toggle z-50 ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bars bar1"></div>
          <div className="bars bar2"></div>
          <div className="bars bar3"></div>
        </div>
      </div>

      {/* Full-screen Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 ml-44 mr-3 lg:left-5  rounded-xl flex justify-center items-center text-white text-lg  -z-40"
          >
            {/* <button
              className="absolute top-6 right-6 text-4xl focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button> */}

            {menuItems.map(({ id, label, width }) => (
              <Link
              onClick={scrollToTop}
                key={id}
                to={`/${id}`}
                className={`btn ${width} px-6`}
                data-hover={label}
                // onClick={() => setIsOpen(false)}
              >
                <span>{label}</span>
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
    <div className={`lg:hidden z-50 block w-full fixed top-0  ${scrolled ? "bg-black/90 backdrop-blur-lg shadow-lg ": '' }`} >
      <MobileMenu/>
    </div>
    </>
  );
};

export default Header;
