import React from "react";
import { FaBuilding, FaDraftingCompass, FaProjectDiagram, FaGlobe, FaClock, FaHandshake } from "react-icons/fa";
import pattern from '../assets/pattern/element1.jpg'
const features = [
  {
    id: 1,
    icon: <FaDraftingCompass size={40} />,
    title: "Innovative Architecture",
    description: "Our designs blend aesthetics with functionality, creating sustainable and modern spaces.",
  },
  {
    id: 2,
    icon: <FaBuilding size={40} />,
    title: "Project Management",
    description: "From planning to execution, we handle every step to ensure smooth project completion.",
  },
  {
    id: 3,
    icon: <FaProjectDiagram size={40} />,
    title: "Customized Design Solutions",
    description: "We tailor designs to match your vision, needs, and budget for a perfect outcome.",
  },
  {
    id: 4,
    icon: <FaGlobe size={40} />,
    title: "Sustainable & Eco-Friendly",
    description: "We integrate green building techniques to reduce environmental impact.",
  },
  {
    id: 5,
    icon: <FaClock size={40} />,
    title: "Timely Delivery",
    description: "Our efficient planning ensures projects are delivered on schedule without compromise.",
  },
  {
    id: 6,
    icon: <FaHandshake size={40} />,
    title: "Client-Centric Approach",
    description: "We prioritize your needs and maintain transparent communication throughout the process.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="lg:py-14 py-12 grid md:grid-cols-2">
      {/* Left Image */}
      <div className="w-full">
        <img
          src="https://picsum.photos/800/600"
          alt="Architectural Design"
          className="shadow-lg object-cover w-full h-full"
        />
      </div>

      {/* Right Content */}
      <div className="py-6 px-10 bg-gray-50 flex flex-col justify-center">
        <p className="text-lg text-primary uppercase font-medium flex items-center gap-2">
          <span className="h-[2px] w-7 bg-primary"></span> Why Choose Us
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 messiri">
          Transforming Spaces with Excellence
        </h2>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative  bg-white px-2 py-6  shadow-md border border-gray-200 transition-all duration-300 hover:bg-primary  hover:shadow-lg cursor-pointer"
            >
               <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `url(${pattern})`,
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            opacity: 0.5,
                            zIndex: -1,
                          }}
                        ></div>
              <div className="text-primary flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center messiri">{feature.title}</h3>
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
