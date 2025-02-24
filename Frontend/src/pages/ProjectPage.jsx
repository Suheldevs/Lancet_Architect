import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Longwater Avenue",
    slug: "longwater-avenue",
    description: "A modern architectural masterpiece with sustainable features.",
    mainImage: "https://picsum.photos/400/300?random=1",
  },
  {
    title: "Skyline Heights",
    slug: "skyline-heights",
    description: "Luxury apartments with a breathtaking city view.",
    mainImage: "https://picsum.photos/400/300?random=4",
  },
  {
    title: "Sunset Villa",
    slug: "sunset-villa",
    description: "A peaceful villa with stunning sunset views.",
    mainImage: "https://picsum.photos/400/300?random=7",
  },
  {
    title: "Ocean Breeze",
    slug: "ocean-breeze",
    description: "A coastal retreat with breathtaking ocean views.",
    mainImage: "https://picsum.photos/400/300?random=10",
  },
  {
    title: "Mountain Escape",
    slug: "mountain-escape",
    description: "A serene getaway in the heart of the mountains.",
    mainImage: "https://picsum.photos/400/300?random=13",
  },
  {
    title: "Urban Oasis",
    slug: "urban-oasis",
    description: "A modern living space in the bustling city center.",
    mainImage: "https://picsum.photos/400/300?random=16",
  },
];

const ProjectPage = () => {

  return (
    <section className=" py-52 container mx-auto">
      <div className="grid grid-cols-3">
        
          {projects.map((project, index) => (
            <div key={index} className="px-2">
              <Link
                to={`/projects/${project.slug}`}
                className="relative group overflow-hidden block"
              >
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105 "
                />
                <div
                  className="absolute inset-0 bg-black/60 h-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 group-hover:h-full p-6 duration-500 transition-all ease-in-out"
                >
                
                  <div className="flex justify-center items-center flex-grow">
                    <FiPlus className="text-white text-5xl" />
                  </div>

               
                  <div className="text-white text-2xl font-bold text-center messiri ">
                    {project.title}
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProjectPage;
