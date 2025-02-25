import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import pattern from '../assets/pattern/element1.jpg'

const projects = [
  {
    title: "Longwater Avenue Longwater",
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

const ProjectSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Show navigation arrows
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 relative lg:py-14 container mx-auto">
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
      <div className="">
        <div className="px-4">
        <p className="text-lg text-primary uppercase font-medium flex items-center gap-2">
          <span className="h-[2px] w-7 bg-primary"></span> OUR LATEST PROJECTS
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 messiri">
          Take a tour of our work
        </h2>
</div>
        <Slider {...settings} className="">
          {projects.map((project, index) => (
           <div
                       key={index}
                       className="px-2">
                       <Link
                         to={`/projects/${project.slug}`}
                         className="relative group overflow-hidden block"
                       >
                         {/* Image with zoom effect */}
                         <img
                           src={project.mainImage}
                           alt={project.title}
                           className="w-full h-96 object-cover transition-transform duration-300 "
                         />
           
                         {/* Sliding text with Read More Button */}
                         <div
                           className="absolute right-0 bottom-0 w-fit px-6 py-4 flex flex-col items-start 
                           bg-white translate-x-full translate-z-full  group-hover:translate-x-0 group-hover-0
                           opacity-0 group-hover:opacity-100 group-hover:z-10 perspective-distant
                           duration-700 transition-all ease-in-out uppercase text-sm text-left shadow-lg"
                         >
                           {/* Project Title */}
                           <div className="text-black font-medium text-left">{project.title}</div>
           
                           {/* Read More Button */}
                           <Link
                             to={`/projects/${project.slug}`}
                             className="mt-2 text-xs text-primary flex items-center font-semibold gap-2"
                           >
                             View Details
                             <MdKeyboardDoubleArrowRight className="text-lg text-gray-500 group-hover:text-[#cca72d] transition-all" />
                           </Link>
                         </div>
                       </Link>
                     </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectSection;
