import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Btn1 = ({ text, link, className = "" }) => {
  return (
    <Link
      to={link}
      className={`btn relative overflow-hidden rounded-full bg-black/10 backdrop-blur bg-white/20 text-white px-6 py-3 inline-flex justify-center items-center font-medium transition-all duration-500 ease-in-out ${className}`}
      aria-label={text}
    >
      {/* Default Text */}
      <span className="absolute top-1/2 left-1/2 transform  transition-transform duration-300 ease-in-out group-hover:-translate-y-full opacity-100">
        {text}
      </span>

      {/* Hover Text */}
      <span className="absolute top-[150%] left-1/2 transform -translate-x-1/2 opacity-0 transition-all duration-300 ease-in-out group-hover:top-1/2 group-hover:opacity-100">
        {text}
      </span>
    </Link>
  );
};

Btn1.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  className: PropTypes.string,
};

export default Btn1;
