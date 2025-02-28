import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import TreatmentModal from "./TreatmentModal";

const TreatmentDashboard = () => {
  const [treatments, setTreatments] = useState([]);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchTreatments();
  }, []);

  const fetchTreatments = async () => {
    try {
      const response = await axios.get(`${api}/treatment/getall`);
      setTreatments(response.data);
    } catch (error) {
      console.error("Error fetching treatment data:", error);
      Swal.fire("Error!", "Failed to fetch treatments.", "error");
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(`${api}/treatment/delete/${id}`);
      setTreatments(treatments.filter((b) => b._id !== id));
      Swal.fire("Deleted!", "The treatment has been deleted.", "success");
    } catch (error) {
      console.error("Error deleting treatment:", error);
      Swal.fire("Error!", "Failed to delete treatment.", "error");
    }
  };

  const handleEdit = (b) => {
    setSelectedTreatment(b);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedTreatment(null);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    fetchTreatments();
  };

  const removeHTMLTags = (text) => {
    if (!text) return "";
    return text.replace(/<[^>]*>/g, "");
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-2">
        <h2 className="md:text-2xl text-lg font-bold text-gray-800 uppercase">Treatment Management</h2>
        <button
          onClick={handleAdd}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 cursor-pointer text-white px-5 py-2 rounded-lg shadow-md"
          aria-label="Add New Treatment"
        >
          Add New Treatment
        </button>
      </div>

      {isFormOpen ? (
        <div className="h-full w-full">
          <TreatmentModal treatmentData={selectedTreatment} onClose={handleCloseForm} />
        </div>
      ) : (
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Background</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {treatments.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6">
                  <div className="text-gray-500 text-xl">No Data Available</div>
                </td>
              </tr>
            ) : (
              treatments.slice().reverse().map((b) => (
                <tr key={b._id} className="border-b border-gray-300 hover:bg-gray-100 transition duration-200">
                  <td className="p-2">
                    <img
                      src={b.imageUrl}
                      alt={b.title}
                      className="w-full h-16 mx-auto"
                    />
                  </td>
                  <td className="p-2">
                    <img
                      src={b.bgImageUrl}
                      alt={b.title}
                      className="w-full h-16  mx-auto"
                    />
                  </td>
                  <td className="p-4 text-gray-800 font-medium">{b.title}</td>
                  <td className="p-4 text-gray-600">
                    <div className="overflow-y-auto max-h-[20vh]">{removeHTMLTags(b.description)}</div>
                  </td>
                  <td className="p-4 flex space-x-3">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-sm transition duration-300 transform hover:scale-105"
                      onClick={() => handleEdit(b)}
                      aria-label="Edit Treatment"
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-sm transition duration-300 transform hover:scale-105"
                      onClick={() => handleDelete(b._id)}
                      aria-label="Delete Treatment"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TreatmentDashboard;