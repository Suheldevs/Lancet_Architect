import Swal from "sweetalert2";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Breadcrum from "../components/Breadcrum";
import { Link } from "react-router-dom";
import axios from "axios";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();
    const email = e.target.email.value.trim();
    const subject = e.target.subject.value.trim();
    const message = e.target.message.value.trim();

    if (!name) return Swal.fire("Error", "Name is required!", "error");
    if (!email) return Swal.fire("Error", "Email is required!", "error");
    if (!phone || phone.length !== 10)
      return Swal.fire("Error", "Phone number must be 10 digits!", "error");
    if (!subject) return Swal.fire("Error", "Subject is required!", "error");
    if (!message) return Swal.fire("Error", "A message is required!", "error");

    const formData = { name, phone, email, subject, message };

    try {
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BACKENDURL}/inquiry/save`,
        formData
      );
      console.log(res);
      Swal.fire("Success", "Your message has been sent!", "success");
      e.target.reset(); // Reset the form
    } catch (err) {
      Swal.fire("Error", "Internal Server Error", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Breadcrum
        title="Contact Us"
        items={[
          { label: "Home", link: "/" },
          { label: "Contact", link: "/Contact" },
        ]}
      />
      <div className="container lg:px-4 px-2 mx-auto flex flex-col lg:flex-row justify-center py-10 lg:py-14 md:py-12 bg-gray-100">
        {/* Left Section - Contact Info */}
        <div className="bg-white shadow-lg py-2 lg:w-1/3 w-full text-center">
          <h2 className="text-4xl font-bold italic tracking-widest messiri">
            <span className="block -ml-24">Let's</span> Talk !
          </h2>
          <p className="text-gray-700 text-base mb-6 px-6">
            Tell us about your dream project, we will make it come true
          </p>
          <div className="flex flex-col text-start lg:px-6 px-4">
            <h3 className="text-2xl font-semibold mb-2">Contact Details</h3>
            <div className="text-start"> 
              <FaPhoneAlt className="inline-block text-xl mr-2" />
              <a href="tel:8707438955" className="text-gray-700">
                +91-8707438955,{" "}
              </a>
              <a href="tel:7275712348" className="text-gray-700">
                +91-7275712348
              </a>
            </div>
            <div className="text-start mt-2">
              <FaEnvelope className="inline-block text-xl mr-2" />
              <a href="mailto:contact@lancetarchitect.com" className="text-gray-700">
                contact@lancetarchitect.com,
              </a>
              <br />
              <a href="mailto:info@lancetarchitect.com" className="ml-7 text-gray-700">
                info@lancetarchitect.com
              </a>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-5 my-2 mt-4 lg:px-6 px-4">
            {[
              { icon: FaFacebookF, link: "#" },
              { icon: FaSquareXTwitter, link: "#" },
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
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="lg:w-1/2 w-full mt-6 lg:mt-0 lg:ml-8">
          <form className="bg-white shadow-lg p-6" onSubmit={handleFormSubmit}>
            <h2 className="text-2xl font-bold mb-4 messiri">Get in Touch</h2>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              className="w-full p-4 mb-4 bg-gray-100 focus:outline-none"
            />
            <input
              type="number"
              name="phone"
              required
              placeholder="Your Phone No"
              className="w-full p-4 mb-4 bg-gray-100 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full p-4 mb-4 bg-gray-100 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your Subject"
              required
              name="subject"
              className="w-full p-4 mb-4 bg-gray-100 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              required
              name="message"
              className="w-full p-4 h-32 bg-gray-100 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className={`${
                loading ? "cursor-not-allowed" : "cursor-pointer"
              } mt-4 p-3 bg-black text-white font-semibold w-full hover:bg-red-600`}
              disabled={loading}
            >
              {loading ? "SENDING..." : "SEND MAIL"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
