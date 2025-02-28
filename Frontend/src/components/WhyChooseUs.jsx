import React from "react";
import {
  FaBuilding,
  FaDraftingCompass,
  FaProjectDiagram,
  FaGlobe,
  FaClock,
  FaHandshake,
} from "react-icons/fa";
import pattern from "../assets/pattern/pattern2.png";
import image from '../assets/Home/whyChooseUs.jpg'
const features = [
  {
    id: 1,
    icon: <FaDraftingCompass size={40} />,
    title: "Innovative Architecture",
    description:
      "Our designs blend aesthetics with functionality, creating sustainable and modern spaces.",
  },
  {
    id: 2,
    icon: <FaBuilding size={40} />,
    title: "Project Management",
    description:
      "From planning to execution, we handle every step to ensure smooth project completion.",
  },
  {
    id: 3,
    icon: <FaProjectDiagram size={40} />,
    title: "Customized Design Solutions",
    description:
      "We tailor designs to match your vision, needs, and budget for a perfect outcome.",
  },
  {
    id: 4,
    icon: <FaGlobe size={40} />,
    title: "Sustainable & Eco-Friendly",
    description:
      "We integrate green building techniques to reduce environmental impact.",
  },
  {
    id: 5,
    icon: <FaClock size={40} />,
    title: "Timely Delivery",
    description:
      "Our efficient planning ensures projects are delivered on schedule without compromise.",
  },
  {
    id: 6,
    icon: <FaHandshake size={40} />,
    title: "Client-Centric Approach",
    description:
      "We prioritize your needs and maintain transparent communication throughout the process.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="lg:py-14 md:py-12 py-10 grid  lg:grid-cols-2" data-aos="fade-up">
      {/* Left Image */}
      <div className="w-full lg:block hidden" data-aos="zoom-in" data-aos-delay='200'>
        <img
          src={image}
          alt="Architectural Design"
          className="shadow-lg object-cover w-full h-full"
        />
      </div>

      {/* Right Content */}
      <div className="lg:py-6 lg:px-10 px-4 bg-gray-50 flex flex-col justify-center ">
        <p className="lg:text-lg text-primary uppercase font-medium flex items-center gap-2">
          <span className="h-[2px] w-7 bg-primary"></span> Why Choose Us
        </p>
        <h2 className="lg:text-3xl text-xl font-bold text-gray-900 mb-6 messiri">
        Designing Dreams, Building Reality
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 lg:gap-6 gap-3">
          {features.map((feature,index) => (
            <div
            data-aos="fade-up" data-aos-delay={index * 200}
              key={feature.id}
              className="group relative z-10 px-2 py-6 bg-white  shadow-md border border-gray-200 transition-all duration-300 hover:bg-primary  hover:shadow-lg cursor-pointer"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${pattern})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.3,
                  zIndex: -1,
                }}
              ></div>
              <div className="text-white flex justify-center mb-4">
               <span className="bg-primary p-2 shadow-2xl rounded-full"> {feature.icon} </span>
              </div>
              <h3 className="lg:text-xl font-semibold text-center messiri">
                {feature.title}
              </h3>
              {/* <p className="text-gray-600 text-center mt-2 group-hover:text-gray-100">
                {feature.description}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
