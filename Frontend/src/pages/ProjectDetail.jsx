import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Breadcrum from "../components/Breadcrum";
import { X, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectData } from "../redux/slices/dataslice";



const ProjectDetailPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { projectData, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    if (!projectData.length) dispatch(fetchProjectData());
  }, [dispatch, projectData.length]);

  const project = projectData.find((item) => item.slug === slug);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.otherImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.otherImages.length) % project.otherImages.length);
  };


  if (status === "loading")
    return <div className="text-gray-800 text-xl my-24  font-semibold text-center">Loading...</div>;

  if (error)
    return <div className="text-red-500 text-xl  my-24 font-semibold text-center">{error}</div>;

  if (!project)
    return <div className="text-red-500 text-xl my-24  font-semibold text-center">Project Not Found!</div>;


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
              {project.otherImages?.map((img, index) => (
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
          <img src={project.otherImages[currentImageIndex]} alt="Gallery" className="max-w-3xl max-h-screen shadow-lg" />
          <button onClick={nextImage} className="absolute right-5 text-white p-2">
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectDetailPage;
