import { useEffect, useState, useCallback } from "react";
import { FiPlus, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { fetchGallleryData } from "../redux/slices/dataslice";
import Breadcrum from "../components/Breadcrum";

export default function Gallery() {
  const dispatch = useDispatch();
  const { galleryData, status, error } = useSelector((state) => state.data);

  // Fetch data only if not already loaded
  useEffect(() => {
    if (!galleryData.length) {
      dispatch(fetchGallleryData());
    }
  }, [dispatch, galleryData.length]);

  // State for modal
  const [modal, setModal] = useState({ isOpen: false, index: 0 });

  const openModal = useCallback((index) => {
    setModal({ isOpen: true, index });
  }, []);

  const closeModal = useCallback(() => {
    setModal({ isOpen: false, index: 0 });
  }, []);

  const prevImage = useCallback(() => {
    setModal((prev) => ({
      ...prev,
      index: prev.index > 0 ? prev.index - 1 : galleryData.length - 1,
    }));
  }, [galleryData.length]);

  const nextImage = useCallback(() => {
    setModal((prev) => ({
      ...prev,
      index: prev.index < galleryData.length - 1 ? prev.index + 1 : 0,
    }));
  }, [galleryData.length]);

  return (
    <div>
      <Breadcrum
        title="Gallery"
        items={[
          { label: "Home", link: "/" },
          { label: "Gallery", link: "/gallery" },
        ]}
      />
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 py-10 md:py-12 lg:py-14">
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
        {!error && galleryData.length === 0 && (
          <div className="text-red-500 text-xl font-semibold text-center">
            Gallery Data Not Found!
          </div>
        )}
        {galleryData?.map((img, index) => (
          <div
            key={img._id}
            className="relative group cursor-pointer overflow-hidden"
            onClick={() => openModal(index)}
          >
            <img
              src={img.imageUrl}
              alt={img.title || "Gallery Image"}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <FiPlus className="text-white text-4xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modal.isOpen && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
          role="dialog"
          aria-labelledby="gallery-modal"
          aria-modal="true"
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl"
            aria-label="Close Modal"
          >
            <FiX />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl"
            aria-label="Previous Image"
          >
            <FiChevronLeft />
          </button>
          <img
            src={galleryData[modal.index].imageUrl}
            alt={galleryData[modal.index].title || "Full View"}
            className="max-w-full max-h-[90vh]"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-4xl"
            aria-label="Next Image"
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
