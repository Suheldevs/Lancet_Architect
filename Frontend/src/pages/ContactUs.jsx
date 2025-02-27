import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import Breadcrum from "../components/Breadcrum";
import { IoPhonePortrait } from "react-icons/io5";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="">
      <Breadcrum
        title="Contact Us"
        items={[
          { label: "Home", link: "/" },
          { label: "Contact", link: "/Contact" },
        ]}
      />
      <div className="conatiner lg:px-4 px-2 mx-auto flex flex-col lg:flex-row justify-center py-10 lg:py-14 md:py-12 bg-gray-100">
        {/* Left Section - Contact Info Card */}
        <div className="bg-white shadow-lg  py-2  lg:w-1/3 w-full text-center">
          <h2 className="text-4xl font-bold  messiri italic tracking-widest">
            <span className="block -ml-24">Let's</span> Talk !
          </h2>
          <p className="text-gray-700 text-base mb-6 px-6">
            Tell us about your dream project, we will make it come true
          </p>
          <div className="flex space-y-2 flex-col text-start lg:px-6 px-4">
            <h3 className="text-2xl font-semibold messiri mb-2">
              Contact Details
            </h3>
            <div className="text-start">
              <FaPhoneAlt className="inline-block text-black/90  text-xl mr-2" />
              <a href="tel:8707438955">
                <span className="group-hover:text-gray-400">
                  +91-8707438955,{" "}
                </span>
              </a>
              <a href="tel:7275712348">
                <span className="group-hover:text-gray-400">
                  +91-7275712348
                </span>
              </a>
            </div>
            <div className="text-start ">
              <FaEnvelope className="inline-block text-black/90  text-xl mr-2" />
              {/* <div className="ms-2"> */}
              <a href="mailto:contact@lancetarchitect.com">
                <span className="group-hover:text-gray-400">
                  contact@lancetarchitect.com,
                </span>
              </a>
               <br />
              <a href="mailto:info@lancetarchitect.com">
                <span className="group-hover:text-gray-400 ml-7 ">
                  info@lancetarchitect.com
                </span>
              </a> 
              {/* </div> */}
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-5 my-2  lg:px-6 px-4">
            {[
              { icon: FaFacebookF, link: "#" },
              { icon: FaTwitter, link: "#" },
              { icon: FaInstagram, link: "#" },
              { icon: FaLinkedinIn, link: "#" },
            ].map(({ icon: Icon, link }, index) => (
              <Link
                key={index}
                to={link}
                className="p-2 text-xl bg-black/90 rounded-full transition transform hover:scale-110 hover:-rotate-12 hover:bg-red-600"
              >
                <Icon className="text-white" />
              </Link>
            ))}
          </div>
          <div className="mt-6 px-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.066656370495!2d80.9430907!3d26.7741451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd043e42fa3d%3A0xa8fed4d13bd8049!2sLANCET%20ARCHITECTS!5e0!3m2!1sen!2sin!4v1740479047816!5m2!1sen!2sin"
             className="h-52 w-full"
              allowfullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="lg:w-1/2 w-full mt-6 lg:mt-0 lg:ml-8">
          <form className="bg-white shadow-lg p-6">
            <h2 className="messiri text-2xl font-bold mb-4">Get in Touch</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 mb-4 bg-gray-100  focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your Phone No"
              className="w-full p-4 mb-4 bg-gray-100 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 mb-4 bg-gray-100 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your Subject"
              className="w-full p-4 mb-4 bg-gray-100 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 h-32 bg-gray-100 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full mt-4 p-3 bg-black text-white font-semibold  hover:bg-red-600 cursor-pointer"
            >
              SEND MAIL
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
