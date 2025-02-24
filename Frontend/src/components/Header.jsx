import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // ✅ Added state for the menu

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "home", label: "Home", width: "w-20" },
    { id: "about", label: "About Us", width: "w-32" },
    { id: "portfolio", label: "Projects", width: "w-28" },
    { id: "services", label: "Gallery", width: "w-24" },
    { id: "testimonial", label: "Testimonial", width: "w-36" },
    { id: "contacts", label: "Contact", width: "w-24" },
    { id: "blog", label: "Blog", width: "w-20" },
  ];

  return (
    <header
      className={`fixed left-1/2 transform -translate-x-1/2 w-full flex items-center justify-between px-6 md:px-12 py-4 z-20 transition-all ease-in-out duration-1000 ${
        scrolled
          ? "bg-black/90 backdrop-blur-lg shadow-lg"
          : "bg-black/10 backdrop-blur-sm top-5 max-w-[1200px] rounded-xl"
      }`}
    >
      <h1 className="text-white text-2xl font-bold">Lancet Logo</h1>

      <div className={`flex items-center space-x-3 text-white gap-4`}>
        <div className={`${isOpen ? "hidden" : "block"}`}>
          <Link
            to="/"
            className={`btn min-w-[200px] text-xl`}
            data-hover="+91-8707438955"
          >
            <span>Contact Now</span>
          </Link>
        </div>
        <div className={`${isOpen ? "hidden" : "block"}`}>
          <Link
            to="/"
            className={`btn min-w-[250px] text-xl`}
            data-hover="contact@lancetarchitect.com"
          >
            <span>contact@lancetarchitect.com</span>
          </Link>
        </div>
        {/* Hamburger Menu */}
        <div
          className={`toggle ${isOpen ? "open" : ""}`}
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
            className="fixed inset-0 mx-44 left-5  rounded-xl flex flex-co justify-center items-center text-white text-xl  z-40"
          >
            {/* <button
              className="absolute top-6 right-6 text-4xl focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button> */}

            {menuItems.map(({ id, label, width }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`btn ${width} px-6`}
                data-hover={label}
                onClick={() => setIsOpen(false)}
              >
                <span>{label}</span>
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
