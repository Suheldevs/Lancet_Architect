import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { validateImage } from "./imagevalidation";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const api = import.meta.env.VITE_API_URL;
const cloudinaryUrl = import.meta.env.VITE_CLOUDINARY_URL || "https://api.cloudinary.com/v1_1/diz0v7rws/image/upload";

// Reducer to manage form state
const formReducer = (state, action) => {
  return { ...state, [action.field]: action.value };
};

const BlogModal = ({ blogData, onClose }) => {
  const [formData, dispatch] = useReducer(formReducer, {
    title: "",
    postedBy: "",
    description: "",
    imageUrl: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (blogData) {
      dispatch({ field: "title", value: blogData.title || "" });
      dispatch({ field: "postedBy", value: blogData.postedBy || "" });
      dispatch({ field: "description", value: blogData.description || "" });
      dispatch({ field: "imageUrl", value: blogData.imageUrl || "" });
    }
  }, [blogData]);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validation = validateImage(file);
    if (!validation.valid) {
      Swal.fire("Error", validation.message, "error");
      return;
    }

    setLoading(true);
    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "lancet");
    uploadData.append("folder", "lancet/blog");

    try {
      const response = await axios.post(cloudinaryUrl, uploadData);
      if (response.data.secure_url) {
        dispatch({ field: "imageUrl", value: response.data.secure_url });
        Swal.fire("Success", "Image Uploaded Successfully!", "success");
      } else {
        throw new Error("Invalid response from Cloudinary");
      }
    } catch (error) {
      console.error("Image upload failed:", error);
      Swal.fire("Error", "Image Upload Failed!", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.postedBy.trim() || !formData.description.trim() || !formData.imageUrl) {
      Swal.fire("Warning", "All fields are required!", "warning");
      return;
    }

    try {
      const response = blogData
        ? await axios.put(`${api}/blog/update/${blogData._id}`, formData)
        : await axios.post(`${api}/blog/save`, formData);

      Swal.fire("Success", response.data.message, "success");
      onClose();
    } catch (error) {
      console.error("Error saving blog:", error);
      Swal.fire("Error", "Failed to save blog!", "error");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl mx-4 p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4 uppercase">
          {blogData ? "Update" : "Add"} Blog
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter Blog Title"
            value={formData.title}
            onChange={(e) => dispatch({ field: "title", value: e.target.value })}
            className="w-full p-3 border-2 border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-900"
            required
          />
          <input
            type="text"
            placeholder="Posted By"
            value={formData.postedBy}
            onChange={(e) => dispatch({ field: "postedBy", value: e.target.value })}
            className="w-full p-3 border-2 border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-900"
            required
          />
          <input
            type="file"
            onChange={uploadImage}
            disabled={loading}
            className="w-full p-3 border-2 border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
          {loading && <p className="text-blue-500 text-sm mt-2">Uploading...</p>}
          {formData.imageUrl && (
            <img
              src={formData.imageUrl}
              alt="Uploaded"
              className="mt-2 w-28 h-28 object-cover rounded-lg border"
            />
          )}
          <SunEditor
            setContents={formData.description}
            onChange={(value) => dispatch({ field: "description", value })}
            setOptions={{
              minHeight: "150px",
              buttonList: [
                ["undo", "redo"],
                ["bold", "underline", "italic", "strike"],
                ["font", "fontSize", "formatBlock"],
                ["fontColor", "hiliteColor"],
                ["align", "list", "lineHeight"],
                ["table"],
                ["link"],
                ["image", "video"],
                ["codeView"],
              ],
              linkProtocol: "",
              addTagsWhitelist: "a[href]",
              sanitize: false,
              defaultTag: "div",
            }}
          />
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-600"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 cursor-pointer text-white py-2 px-6 rounded-lg hover:bg-blue-700"
            >
              {blogData ? "Update" : "Save"} Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogModal;
