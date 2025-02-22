import React from "react";
import PropTypes from "prop-types";

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div>
      <input
        type="checkbox"
        id="checkbox"
        className="hidden"
        checked={isOpen}
        onChange={toggleMenu}
      />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </label>
    </div>
  );
};

HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default HamburgerMenu;
