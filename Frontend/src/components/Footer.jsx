import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import cclogo from "../assets/Home/ccogo-suhel.webp";
import pattern from '../assets/pattern/banner2.jpg'
const Footer = () => {
  return (
    <footer className="relative bg-black/95 text-white">
      <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${pattern})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.6,
                    zIndex: -1,
                  }}
                ></div>
      <div className="container mx-auto py-10 px-20 lg:py-12 md:py-12 grid  grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 ">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img src="/logo.png" alt="Space Culture" className="h-16 mb-4" />
          <p className="text-sm">Fill design in your life...</p>
          <div className="flex space-x-3 mt-4">
            {[
              { icon: FaFacebookF, link: "#" },
              { icon: FaTwitter, link: "#" },
              { icon: FaInstagram, link: "#" },
              { icon: FaLinkedinIn, link: "#" },
            ].map(({ icon: Icon, link }, index) => (
              <Link
                key={index}
                to={link}
                className="p-2 text-xl bg-gray-800 rounded-full transition transform hover:scale-110 hover:-rotate-12 hover:bg-yellow-600"
              >
                <Icon className="text-white" />
              </Link>
            ))}
          </div>
        </div>

        {/* Useful Links & Our Projects */}
        <div className="">
          <div>
            <h3 className="text-xl font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-2 text-base">
              {[
                "About Us",
                "Gallery",
                "Testimonial",
                "Blog",
                "Contact Us",
                "Admin Login",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="group flex items-center space-x-2 transition transform hover:translate-x-2"
                  >
                    <MdKeyboardDoubleArrowRight className="text-xl text-gray-400 group-hover:text-[#cca72d] transition-all" />
                    <span className="group-hover:text-gray-400 transition">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Projects</h3>
            <ul className="space-y-2 text-base">
              {[
                "Commercial",
                "Residential",
                "City Planning",
                "Interior Design",
                "Project Analysis",
                "Renovation",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="group flex items-center space-x-2 transition transform hover:translate-x-2"
                  >
                    <MdKeyboardDoubleArrowRight className="text-xl text-gray-400 group-hover:text-[#cca72d] transition-all" />
                    <span className="group-hover:text-gray-400 transition">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
          <div className="space-y-2 text-base">
            <a href="tel:8707438955" className="flex items-center space-x-2 group">
              <FaPhoneAlt className="text-gray-400 group-hover:text-yellow-600" />{" "}
              <span className="group-hover:text-gray-400">+91-8707438955</span>
            </a>
            <a href="tel:7275712348" className="flex items-center space-x-2 group">
            <IoPhonePortrait className="text-gray-400 group-hover:text-yellow-600" />{" "}
              <span className="group-hover:text-gray-400">+91-7275712348</span>
            </a>
            <a href="mailto:contact@lancetarchitect.com" className="flex items-center space-x-2 mt-2 group">
              <FaEnvelope className="text-gray-400 group-hover:text-yellow-600" />{" "}
              <span className="group-hover:text-gray-400">contact@lancetarchitect.com</span>
            </a>
            <a href="mailto:info@lancetarchitect.com" className="flex items-center space-x-2 mt-2 group">
              <FaEnvelope className="text-gray-400 group-hover:text-yellow-600" />{" "}
              <span className="group-hover:text-gray-400">info@lancetarchitect.com</span>
            </a>
            <a href='https://maps.app.goo.gl/xNWVtXzzQJ2iNmRM6' className="flex items-center space-x-2 mt-2 group">
              <FaMapMarkerAlt className="text-gray-400  text-5xl group-hover:text-yellow-600" />
             <span className="group-hover:text-gray-400 text line-clamp-2"> 14, Raibareli Rd, near Sainik Dhaba, Amrapali Vihar, Sainik Nagar, Telibagh, Lucknow, Uttar Pradesh 226012
             </span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className=" mt-4 border-t border-gray-900 py-2 text-center flex lg:flex-row flex-col justify-center items-center">
        <p className=" text-sm px-2">
          Copyright 2025 Lancet Architect || All Rights Reserved || Designed By
        </p>
        <Link to="https://www.codecrafter.co.in/" target="_blank">
          <img
            src={cclogo}
            className="lg:w-28 w-20 transition transform hover:scale-110"
            alt="CodeCrafter Logo"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
