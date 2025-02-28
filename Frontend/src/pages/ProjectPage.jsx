import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Breadcrum from "../components/Breadcrum";

const projects = [
  {
    title: "Longwater Avenue",
    slug: "longwater-avenue",
    description: "A modern architectural masterpiece with sustainable features.",
    mainImageUrl: "https://picsum.photos/400/300?random=1",
    otherImagesUrl: [
      "https://picsum.photos/400/300?random=101",
      "https://picsum.photos/400/300?random=102",
      "https://picsum.photos/400/300?random=103",
      "https://picsum.photos/400/300?random=104",
    ],
  },
  {
    title: "Skyline Heights",
    slug: "skyline-heights",
    description: "Luxury apartments with a breathtaking city view.",
    mainImageUrl: "https://picsum.photos/400/300?random=4",
    otherImagesUrl: [
      "https://picsum.photos/400/300?random=105",
      "https://picsum.photos/400/300?random=106",
      "https://picsum.photos/400/300?random=107",
      "https://picsum.photos/400/300?random=108",
    ],
  },
  {
    title: "Sunset Villa",
    slug: "sunset-villa",
    description: "A peaceful villa with stunning sunset views.",
    mainImageUrl: "https://picsum.photos/400/300?random=7",
    otherImagesUrl: [
      "https://picsum.photos/400/300?random=109",
      "https://picsum.photos/400/300?random=110",
      "https://picsum.photos/400/300?random=111",
      "https://picsum.photos/400/300?random=112",
    ],
  },
  {
    title: "Ocean Breeze",
    slug: "ocean-breeze",
    description: "A coastal retreat with breathtaking ocean views.",
    mainImageUrl: "https://picsum.photos/400/300?random=10",
    otherImagesUrl: [
      "https://picsum.photos/400/300?random=113",
      "https://picsum.photos/400/300?random=114",
      "https://picsum.photos/400/300?random=115",
      "https://picsum.photos/400/300?random=116",
    ],
  },
  {
    title: "Mountain Escape",
    slug: "mountain-escape",
    description: "A serene getaway in the heart of the mountains.",
    mainImageUrl: "https://picsum.photos/400/300?random=13",
    otherImagesUrl: [
      "https://picsum.photos/400/300?random=117",
      "https://picsum.photos/400/300?random=118",
      "https://picsum.photos/400/300?random=119",
      "https://picsum.photos/400/300?random=120",
    ],
  },
  {
    title: "Urban Oasis",
    slug: "urban-oasis",
    description: "A modern living space in the bustling city center.",
    mainImageUrl: "https://picsum.photos/400/300?random=16",
    otherImagesUrl: [
      "https://picsum.photos/400/300?random=121",
      "https://picsum.photos/400/300?random=122",
      "https://picsum.photos/400/300?random=123",
      "https://picsum.photos/400/300?random=124",
    ],
  },
];



const ProjectPage = () => {
  return (
    <section>
      <Breadcrum
        title="Projects "
        items={[
          { label: "Home", link: "/" },
          { label: "Projects", link: "/projects" },
        ]}
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto lg:py-14 md:py-12 py-10 gap-6 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="px-2">
            <Link
              to={`/projects/${project.slug}`}
              className="relative group overflow-hidden block"
            >
              <img
                src={project.mainImageUrl}
                alt={project.title}
                className="w-full h-96 object-cover transition-transform duration-300 "
              />

              {/* Sliding text with Read More Button */}
              <div
                className="absolute right-0 bottom-0  w-72  px-6 py-4 flex flex-col items-start 
                bg-white lg:translate-x-full translate-z-full  group-hover:translate-x-0  group-hover-0
                lg:opacity-0 opacity-100 group-hover:opacity-100 group-hover:z-10 perspective-distant
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
      </div>
    </section>
  );
};

export default ProjectPage;
