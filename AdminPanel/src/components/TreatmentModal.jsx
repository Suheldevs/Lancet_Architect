import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill CSS
import axios from "axios";
import Swal from "sweetalert2";
import { validateImage } from "./imagevalidation";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const TreatmentModal = ({ treatmentData, onClose }) => {
  const api = import.meta.env.VITE_API_URL;

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    bgImageUrl: "",
  });

  // Separate loading states for each image
  const [uploading, setUploading] = useState({
    imageUrl: false,
    bgImageUrl: false,
  });

  useEffect(() => {
    if (treatmentData) {
      setFormData({
        title: treatmentData.title || "",
        description: treatmentData.description || "",
        imageUrl: treatmentData.imageUrl || "",
        bgImageUrl: treatmentData.bgImageUrl || "",
      });
    }
  }, [treatmentData]);

  // Handle Image Upload
  const uploadImage = async (e, field) => {
    const file = e.target.files[0];
    if (!file) return;
    const validation = validateImage(file);
    if (!validation.valid) {
      Swal.fire("Error", validation.message, "error");
      return;
    }

    setUploading((prev) => ({ ...prev, [field]: true }));

    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "dr_shashikant");
    uploadData.append("folder", "dr_shashikant/treatment");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/diz0v7rws/image/upload`,
        uploadData
      );
      setFormData((prev) => ({ ...prev, [field]: response.data.secure_url }));
      Swal.fire("Success", "Image Uploaded Successfully!", "success");
    } catch (error) {
      console.error("Error uploading image:", error);
      Swal.fire("Error", "Image Upload Failed!", "error");
    } finally {
      setUploading((prev) => ({ ...prev, [field]: false }));
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent empty ReactQuill content
    const sanitizedDescription =
      formData.description.trim() === "<p><br></p>" ? "" : formData.description;

    if (
      !formData.title ||
      !formData.bgImageUrl ||
      !sanitizedDescription ||
      !formData.imageUrl
    ) {
      Swal.fire("Warning", "All fields are required!", "warning");
      return;
    }

    try {
      const url = treatmentData
        ? `${api}/treatment/update/${treatmentData._id}`
        : `${api}/treatment/save`;

      const response = await axios[treatmentData ? "put" : "post"](
        url,
        formData
      );

      Swal.fire("Success", response.data.message, "success");
      onClose();
    } catch (error) {
      console.error("Error saving treatment:", error);
      Swal.fire("Error", "Failed to save treatment!", "error");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl mx-4 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold">
            {treatmentData ? "Update" : "Add"} Treatment
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, title: e.target.value }))
                  }
                  required
                />
              </div>

              {/* Upload Image */}
              <div>
                <label
                  htmlFor="imageUpload"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  className="mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => uploadImage(e, "imageUrl")}
                  disabled={uploading.imageUrl}
                />
                {uploading.imageUrl && (
                  <p className="text-blue-500 text-sm mt-2">Uploading...</p>
                )}
                {formData.imageUrl && (
                  <img
                    src={formData.imageUrl}
                    alt="Uploaded"
                    className="mt-2 w-20 h-20 object-cover rounded-lg"
                  />
                )}
              </div>

              {/* Upload Background Image */}
              <div>
                <label
                  htmlFor="bgImageUpload"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Background Image
                </label>
                <input
                  type="file"
                  id="bgImageUpload"
                  className="mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => uploadImage(e, "bgImageUrl")}
                  disabled={uploading.bgImageUrl}
                />
                {uploading.bgImageUrl && (
                  <p className="text-blue-500 text-sm mt-2">Uploading...</p>
                )}
                {formData.bgImageUrl && (
                  <img
                    src={formData.bgImageUrl}
                    alt="Uploaded"
                    className="mt-2 w-20 h-20 object-cover rounded-lg"
                  />
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className=" ">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>

                <SunEditor
                 setContents={formData.description}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, description: value }))
                  }
                  className="border-2 border-red-500"
                  setOptions={{
                    maxHeight: "200px", // ✅ Editor ki height badha di
                    minHeight: "150px", // ✅ Minimum height set kar di
                    buttonList: [
                      ["undo", "redo"], // Undo/Redo
                      ["bold", "underline", "italic", "strike"], // Text Formatting
                      ["font", "fontSize", "formatBlock"], // ✅ Font Customization
                      ["fontColor", "hiliteColor"], // ✅ Text Color & Background Color
                      ["align", "list", "lineHeight"], // Text Alignment & Spacing
                      ["table"], // ✅ Insert & Edit Table
                      ["link"], // ✅ Hyperlink Support (Internal & External Links)
                      ["image", "video"], // ✅ Media Support
                      ["codeView"], // View HTML Code
                    ],
                    linkProtocol: "", // ✅ Disable default "http://"
                    // attributesWhitelist: {
                    //   a: "href target title class download", // ✅ Allow custom attributes
                    // },
                    addTagsWhitelist: "a[href]", // Allow href attribute explicitly
                    sanitize: false, // Disable automatic sanitization
                    defaultTag: "div",
                  }}
                />

                {/* <ReactQuill
                  theme="snow"
                  value={formData.description}
                  onChange={(value) => setFormData((prev) => ({ ...prev, description: value }))}
                  className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  style={{ height: "200px" }} // Adjust height as needed
                /> */}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-400 text-white py-2 px-6 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={uploading.imageUrl || uploading.bgImageUrl}
              className="bg-blue-600 text-white cursor-pointer py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {treatmentData ? "Update" : "Save"} Treatment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TreatmentModal;
