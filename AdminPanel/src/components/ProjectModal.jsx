import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { validateImage } from "./imagevalidation";

const ProjectModal = ({ projectData, onClose }) => {
  const api = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    title: "",
    mainImageUrl: "",
    description: "",
    otherImages: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (projectData) {
      setFormData({
        title: projectData.title || "",
        mainImageUrl: projectData.mainImageUrl || "",
        description: projectData.description || "",
        otherImages: projectData.otherImages || [],
      });
    }
  }, [projectData]);

  const uploadImage = async (e, field) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    
    const validation = validateImage(file);
    if (!validation.valid) {
      Swal.fire("Error", validation.message, "error");
      setLoading(false);
      return;
    }

    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "dr_shashikant");
    uploadData.append("folder", "dr_shashikant/project");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/diz0v7rws/image/upload`,
        uploadData
      );
      const imageUrl = response.data.secure_url;

      if (field === "mainImageUrl") {
        setFormData((prev) => ({ ...prev, mainImageUrl: imageUrl }));
      } else {
        setFormData((prev) => ({ ...prev, otherImages: [...prev.otherImages, imageUrl] }));
      }
      Swal.fire("Success", "Image Uploaded Successfully!", "success");
    } catch (error) {
      console.error("Error uploading image:", error);
      Swal.fire("Error", "Image Upload Failed!", "error");
    } finally {
      setLoading(false);
    }
  };

  const removeOtherImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      otherImages: prev.otherImages.filter((_, idx) => idx !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.mainImageUrl || !formData.description) {
      Swal.fire("Warning", "All fields are required!", "warning");
      return;
    }

    try {
      const response = projectData
        ? await axios.put(`${api}/project/update/${projectData._id}`, formData)
        : await axios.post(`${api}/project/save`, formData);

      Swal.fire("Success", response.data.message, "success");
      onClose();
    } catch (error) {
      console.error("Error saving project:", error);
      Swal.fire("Error", "Failed to save project!", "error");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">{projectData ? "Update" : "Add"} Project</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              value={formData.title}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              value={formData.description}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Main Image</label>
            <input type="file" className="mt-2" onChange={(e) => uploadImage(e, "mainImageUrl")} />
            {loading && <p className="text-blue-500 text-sm">Uploading...</p>}
            {formData.mainImageUrl && (
              <div className="mt-2 flex items-center gap-2">
                <img src={formData.mainImageUrl} alt="Main" className="w-20 h-20 object-cover" />
                <button
                  type="button"
                  className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                  onClick={() => setFormData((prev) => ({ ...prev, mainImageUrl: "" }))}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Other Images</label>
            <input type="file" className="mt-2" onChange={(e) => uploadImage(e, "otherImages")} multiple />
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.otherImages.map((img, idx) => (
                <div key={idx} className="relative">
                  <img src={img} alt={`Other ${idx}`} className="w-16 h-16 object-cover rounded" />
                  <button
                    type="button"
                    className="absolute top-0 right-0 bg-red-500 text-white text-xs p-1 rounded-full"
                    onClick={() => removeOtherImage(idx)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <button disabled={loading} type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              {projectData ? "Update" : "Save"} Project
            </button>
            <button type="button" className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectModal;
