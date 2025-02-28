import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Trash2 } from "lucide-react";

const InquiryData = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [loadCount, setLoadCount] = useState(5);
  const [expandedMessageId, setExpandedMessageId] = useState(null);

  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await axios.get(`${api}/inquiry/getall`);
        setInquiries(response.data.reverse());
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchInquiries();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });
    if (!result.isConfirmed) return;
    try {
      await axios.delete(`${api}/inquiry/delete/${id}`);
      setInquiries((prev) => prev.filter((inquiry) => inquiry._id !== id));
      Swal.fire("Deleted!", "The inquiry has been deleted.", "success");
    } catch (error) {
      Swal.fire("Error!", "Failed to delete inquiry.", "error");
    }
  };

  const toggleMessage = (id) => {
    setExpandedMessageId(expandedMessageId === id ? null : id);
  };

  return (
    <div className="p-4 min-h-screen dark:bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Recent Inquiries</h2>
      {loading && <p className="text-center text-lg">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-700 rounded-lg shadow-lg bg-gray-800">
            <thead>
              <tr className="bg-gray-700 text-gray-300">
                <th className="border border-gray-600 px-4 py-3">Name</th>
                <th className="border border-gray-600 px-4 py-3">Phone</th>
                <th className="border border-gray-600 px-4 py-3">Email</th>
                <th className="border border-gray-600 px-4 py-3">Subject</th>
                <th className="border border-gray-600 px-4 py-3">Message</th>
                <th className="border border-gray-600 px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.slice(0, loadCount).map((inquiry) => (
                <tr key={inquiry._id} className="hover:bg-gray-700">
                  <td className="border border-gray-600 px-4 py-3 text-center">{inquiry.name}</td>
                  <td className="border border-gray-600 px-4 py-3 text-center">{inquiry.phone}</td>
                  <td className="border border-gray-600 px-4 py-3 text-center">{inquiry.email}</td>
                  <td className="border border-gray-600 px-4 py-3 text-center">{inquiry.subject}</td>
                  <td className="border border-gray-600 px-4 py-3 text-center">
                    <p className={`${expandedMessageId === inquiry._id ? "" : "truncate w-40"}`}>
                      {inquiry.message}
                    </p>
                    <button
                      className="ml-2 text-blue-400 text-xs font-semibold hover:underline"
                      onClick={() => toggleMessage(inquiry._id)}
                    >
                      {expandedMessageId === inquiry._id ? "Show Less" : "Read More"}
                    </button>
                  </td>
                  <td className="border border-gray-600 px-4 py-3 text-center">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg shadow-md transition duration-200"
                      onClick={() => handleDelete(inquiry._id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {loadCount < inquiries.length && (
            <div className="text-center mt-6">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md font-semibold transition duration-200"
                onClick={() => setLoadCount((prev) => Math.min(prev + 5, inquiries.length))}
              >
                Show More
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InquiryData;
