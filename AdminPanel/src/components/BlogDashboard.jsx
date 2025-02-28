import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import BlogModal from "./BlogModal";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const BlogDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${api}/blog/getall`);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
      Swal.fire("Error!", "Failed to fetch blogs.", "error");
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff4d4f",
      cancelButtonColor: "#1890ff",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(`${api}/blog/delete/${id}`);
      setBlogs(blogs.filter((b) => b._id !== id));
      Swal.fire("Deleted!", "The blog has been deleted.", "success");
    } catch (error) {
      console.error("Error deleting blog:", error);
      Swal.fire("Error!", "Failed to delete blog.", "error");
    }
  };

  const handleEdit = (b) => {
    setSelectedBlog(b);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedBlog(null);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    fetchBlogs();
  };

  const removeHTMLTags = (text) => {
    if (!text) return "";
    return text.replace(/<[^>]*>/g, "");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Blog Management</h2>
        <button
          onClick={handleAdd}
          className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-5 py-2 rounded-lg shadow-lg transition duration-300"
          aria-label="Add New Blog"
        >
          + Add New Blog
        </button>
      </div>

      {isFormOpen ? (
        <div className="h-full w-full">
          <BlogModal blogData={selectedBlog} onClose={handleCloseForm} />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-3">Photo</th>
                <th className="p-3">Title</th>
                <th className="p-3">Description</th>
                <th className="p-3">Posted By</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500 text-lg"
                  >
                    No Data Yet!
                  </td>
                </tr>
              ) : (
                blogs
                  .slice()
                  .reverse()
                  .map((b) => (
                    <tr
                      key={b._id}
                      className="bg-white border-b hover:bg-gray-100 transition"
                    >
                      <td className="p-1">
                        <img
                          src={b.imageUrl}
                          alt={b.title}
                          className="w-full h-full max-h-20 max-w-32 object-cover  mx-auto"
                        />
                      </td>
                      <td className="p-3 font-semibold text-gray-700">
                        {b.title}
                      </td>
                      <td className="p-3 text-gray-600">
                        <p className="overflow-y-auto max-h-[20vh]">
                          {" "}
                          {removeHTMLTags(b.description)}
                        </p>
                      </td>
                      <td className="p-3 font-medium text-gray-800">
                        {b.postedBy}
                      </td>
                      <td className="p-3 flex space-x-3 justify-center">
                        
                        <button
                          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-2 rounded transition"
                          onClick={() => handleEdit(b)}
                        >
                          <FiEdit size={24}/>
                        </button>
                        <button
                          className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded transition"
                          onClick={() => handleDelete(b._id)}
                          aria-label="Delete Blog"
                        >
                          <FiTrash2 size={24} />
                        </button>
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BlogDashboard;
