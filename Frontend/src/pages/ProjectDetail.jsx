import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Breadcrum from "../components/Breadcrum";
import { X, ChevronLeft, ChevronRight, Plus } from "lucide-react";

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

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projects.find((proj) => proj.slug === slug);
  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-500">Project Not Found!</h2>
        <Link to="/projects" className="mt-4 inline-block text-primary underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.otherImagesUrl.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.otherImagesUrl.length) % project.otherImagesUrl.length);
  };

  return (
    <section>
      <Breadcrum
        title={project.title}
        items={[
          { label: "Home", link: "/" },
          { label: "Projects", link: "/projects" },
          { label: project.title, link: `/projects/${project.slug}` },
        ]}
      />

      <div className="container mx-auto px-4 lg:py-14 md:py-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={project.mainImageUrl} alt={project.title} className="w-full shadow-lg" />
            <div className="mt-4">
              <h1 className="text-3xl font-bold messiri">{project.title}</h1>
              <p className="mt-2 text-gray-700">{project.description}</p>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              {project.otherImagesUrl.map((img, index) => (
                <div key={index} className="relative cursor-pointer" onClick={() => openModal(index)}>
                  <img src={img} alt={`Project ${index}`} className="shadow-md" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition">
                    <Plus className="text-white w-10 h-10" />
                  </div>
                </div>
              ))}
            </div>
            <Link to="/projects" className="mt-6 inline-block text-primary font-semibold underline underline-offset-4">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/95 z-50">
          <button onClick={closeModal} className="absolute top-5 right-5 text-white p-2">
            <X size={30} />
          </button>
          <button onClick={prevImage} className="absolute left-5 text-white p-2">
            <ChevronLeft size={40} />
          </button>
          <img src={project.otherImagesUrl[currentImageIndex]} alt="Gallery" className="max-w-3xl max-h-screen shadow-lg" />
          <button onClick={nextImage} className="absolute right-5 text-white p-2">
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectDetailPage;
