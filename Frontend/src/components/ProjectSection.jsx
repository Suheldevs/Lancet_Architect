import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
    {
      title: "Longwater Avenue",
      slug: "longwater-avenue",
      description: "A modern architectural masterpiece with sustainable features.",
      mainImage: "https://picsum.photos/400/300?random=1",
      images: [
        "https://picsum.photos/400/300?random=2",
        "https://picsum.photos/400/300?random=3",
      ],
    },
    {
      title: "Skyline Heights",
      slug: "skyline-heights",
      description: "Luxury apartments with a breathtaking city view.",
      mainImage: "https://picsum.photos/400/300?random=4",
      images: [
        "https://picsum.photos/400/300?random=5",
        "https://picsum.photos/400/300?random=6",
      ],
    },
    {
      title: "Sunset Villa",
      slug: "sunset-villa",
      description: "A peaceful villa with stunning sunset views.",
      mainImage: "https://picsum.photos/400/300?random=7",
      images: [
        "https://picsum.photos/400/300?random=8",
        "https://picsum.photos/400/300?random=9",
      ],
    },
    {
      title: "Ocean Breeze",
      slug: "ocean-breeze",
      description: "A coastal retreat with breathtaking ocean views.",
      mainImage: "https://picsum.photos/400/300?random=10",
      images: [
        "https://picsum.photos/400/300?random=11",
        "https://picsum.photos/400/300?random=12",
      ],
    },
    {
      title: "Mountain Escape",
      slug: "mountain-escape",
      description: "A serene getaway in the heart of the mountains.",
      mainImage: "https://picsum.photos/400/300?random=13",
      images: [
        "https://picsum.photos/400/300?random=14",
        "https://picsum.photos/400/300?random=15",
      ],
    },
    {
      title: "Urban Oasis",
      slug: "urban-oasis",
      description: "A modern living space in the bustling city center.",
      mainImage: "https://picsum.photos/400/300?random=16",
      images: [
        "https://picsum.photos/400/300?random=17",
        "https://picsum.photos/400/300?random=18",
      ],
    },
  ];

const ProjectSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-sm text-yellow-500 font-semibold mb-2">Latest Projects</h2>
        <p className="text-lg text-gray-700 mb-8">
          Our projects showcase the effectiveness of our approach. Each success
          story reflects our commitment to delivering impactful solutions and
          achieving measurable outcomes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={`/projects/${project.slug}`}
              className="relative group overflow-hidden"
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <motion.div
                className="absolute inset-0 bg-black/30 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-white text-5xl">+</span>
                <span className="text-white text-xl font-bold">{project.title}</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
