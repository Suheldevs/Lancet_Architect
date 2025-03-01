import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import pattern from "../assets/pattern/element1.jpg";
import { fetchProjectData } from "../redux/slices/dataslice";
import { useDispatch, useSelector } from "react-redux";

const ProjectSection = () => {
 
  const dispatch = useDispatch();
  const { projectData, status, error } = useSelector((state) => state.data);
  useEffect(() => {
    if (!projectData.length) {
      dispatch(fetchProjectData());
    }
  }, [dispatch, projectData.length]);



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
    <section
      className=" pt-4 relative pb-6  container mx-auto px-4"
      data-aos="fade-up"
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
      <div className="">
        <div className="">
          <p className="lg:text-lg text-primary uppercase font-medium flex items-center gap-2">
            <span className="h-[2px] w-7 bg-primary"></span> OUR LATEST PROJECTS
          </p>
          <h2 className="lg:text-3xl text-xl font-bold text-gray-900 mb-6 messiri">
            Take a tour of our work
          </h2>
        </div>
        {status === "loading" && (
          <div className="text-gray-800 text-xl font-semibold text-center">
            Loading...
          </div>
        )}
        {error && (
          <div className="text-red-500 text-xl font-semibold text-center">
            {error}
          </div>
        )}
        {!error && projectData.length === 0 && (
          <div className="text-red-500 text-xl font-semibold text-center">
            Project Data Not Found!
          </div>
        )}
        <Slider {...settings} className="">
          {projectData?.map((project, index) => (
            <div
              key={index}
              className="px-2"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="relative group overflow-hidden block">
                {/* Image with zoom effect */}
                <img
                  src={project.mainImageUrl}
                  alt={project.title}
                  className="w-full h-96 object-cover transition-transform duration-300 "
                />

                {/* Sliding text with Read More Button */}
                <div
                  className="absolute right-0 bottom-0 w-72  px-6 py-4 flex flex-col items-start 
                           bg-white lg:translate-x-full translate-z-full  group-hover:translate-x-0 group-hover-0
                           lg:opacity-0 opacity-100 group-hover:opacity-100 group-hover:z-10 perspective-distant
                           duration-700 transition-all ease-in-out uppercase text-sm text-left shadow-lg"
                >
                  {/* Project Title */}
                  <div className="text-black font-medium text-left">
                    {project.title}
                  </div>

                  {/* Read More Button */}
                  <Link
                    to={`/projects/${project.slug}`}
                    className="mt-2 text-xs text-primary flex items-center font-semibold gap-2"
                  >
                    View Details
                    <MdKeyboardDoubleArrowRight className="text-lg text-primary transition-all group-hover:translate-x-2 delay-300 duration-1000" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectSection;
