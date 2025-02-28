import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import bg from '../assets/archi-pattern.png'
function AdminLogin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter both email and password.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    const apiKey = `${import.meta.env.VITE_API_URL}/admin/login`;

    try {
      setLoading(true);
      const response = await axios.post(apiKey, formData);
      if(response.status == 200 || 201){
      localStorage.setItem("admin", JSON.stringify(response?.data)); 
      }
     

      const adminData = response.data;
      navigate('/dashboard', { state: { adminData } });

      setLoading(false);
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Login failed. Please try again.';
      Swal.fire({
        title: 'Failed!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'Try Again!',
      });

      setLoading(false);
    }
  };

  return (
    <div className={`flex items-center justify-center min-h-screen bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/002/835/701/large_2x/futuristic-skyline-city-background-free-vector.jpg')]`}>
      <div className=''>
        <img src=''/>
      </div>
      <div className="bg-white py-6 px-3 r-lg shadow-lg w-full max-w-sm rounded-tl-4xl rounded-br-4xl">
        <div className=''>
          <img src={logo} className='w-full h-16'/>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 px-2 mt-4">
          <div>
            <label className="block text-gray-900 text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder='Enter Email'
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <label className="block text-gray-900 text-lg font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder='Enter Password'
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 r-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <button
            type="submit"
            className={` ${loading?'cursor-not-allowed':''} w-full text-center cursor-pointer bg-black hover:bg-black/90 text-white font-semibold py-2 px-4 r-md transition duration-300`}
            disabled={loading}
          >
            {loading ? (<div className='animate-spin h-6 w-6 border-b-2 border-l-2  border-white rounded-full'></div>): 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
