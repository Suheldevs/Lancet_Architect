import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FiX } from "react-icons/fi";

const ProjectDetailModal = ({ projectId, onClose }) => {
  const [project, setProject] = useState(null);
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  const fetchProject = async () => {
    try {
      const response = await axios.get(`${api}/project/get/${projectId}`);
      setProject(response.data);
    } catch (error) {
      console.error("Error fetching project details:", error);
    }
  };

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(`${api}/project/delete/${projectId}`);
      Swal.fire("Deleted!", "The project has been deleted.", "success");
      onClose(); // Close modal after deletion
    } catch (error) {
      console.error("Error deleting project:", error);
      Swal.fire("Error!", "Failed to delete project.", "error");
    }
  };

  if (!project) return <div className="text-center text-lg">Loading...</div>;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/90 bg-opacity-50 z-50" >
        <button className="absolute top-3 right-3 text-white hover:text-gray-200" onClick={onClose}>
          <FiX size={34} />
        </button>
      <div className="bg-white p-4 shadow-lg max-w-3xl w-full relative  max-h-[90vh] overflow-y-auto">
        <div className="grid grid-cols-2 gap-6">
        <div className="">
        <h2 className="text-2xl font-bold mb-4">Project Name - {project.title}</h2>
        <img src={project.mainImageUrl} alt={project.title} className="w-full max-w-96  shadow-lg mb-4" />

        </div>
        <div className="">
        <h2 className="text-2xl font-bold mb-4">Other Images</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6">
          {project.otherImages?.map((img, index) => (
            <img key={index} src={img} alt={`Other ${index}`} className="w-full max-w-44  shadow" />
          ))}
          </div>
        </div>
        </div>
          <p className="text-lg mb-4">{project.description}</p>


        {/* <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Edit</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={handleDelete}>
            Delete
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectDetailModal;
