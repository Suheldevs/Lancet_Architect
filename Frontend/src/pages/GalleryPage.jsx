import { useState } from "react";
import { FiPlus, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Breadcrum from "../components/Breadcrum";

const images = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  url: `https://picsum.photos/500/600?random=${i + 1}`,
}));

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="">
       <Breadcrum
        title="Gallery"
        items={[
          { label: "Home", link: "/" },
          { label: "Gallery", link: "/gallery" },
        ]}
      />
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 py-10 md:py-12 lg:py-14">
        {images.map((img, index) => (
          <div
            key={img.id}
            className="relative group cursor-pointer overflow-hidden"
            onClick={() => openModal(index)}
          >
            <img src={img.url} alt="Gallery" className="w-full h-full object-cover " />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <FiPlus className="text-white text-4xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
          <button onClick={closeModal} className="absolute top-4 right-4 text-white text-3xl">
            <FiX />
          </button>
          <button onClick={prevImage} className="absolute left-4 text-white text-4xl">
            <FiChevronLeft />
          </button>
          <img src={images[selectedImage].url} alt="Full View" className="max-w-full max-h-[90vh] " />
          <button onClick={nextImage} className="absolute right-4 text-white text-4xl">
            <FiChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
