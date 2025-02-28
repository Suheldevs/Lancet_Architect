import React, { useEffect, useState } from 'react';
import { FaHome, FaUsers, FaBlog, FaBriefcase, FaImage, FaSignOutAlt, FaCalendarCheck, FaBriefcaseMedical, FaPhotoVideo } from 'react-icons/fa';
import ProjectDashboard from '../components/ProjectDashboard';
import BlogDashboard from '../components/BlogDashboard';
import Home from '../components/Home';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import InquiryDashboard from '../components/InqueryDashboard';
import TreatmentDashboard from '../components/TreatmentDashboard';
import GalleryDashboard from '../components/GalleryDashboard';


import { FolderOpenDot, House, Images, MailQuestion, Rss } from 'lucide-react';

const SidebarItem = ({ name, icon, onClick }) => {
  return (
    <div
      className="flex items-center space-x-4 text-white bg-slate-800 mt-1 cursor-pointer p-3 hover:bg-gray-700 rounded-md"
      onClick={() => onClick(name)}
    >
      {icon}
      <span>{name}</span>
    </div>
  );
};

const DashboardContent = ({ section }) => {
  switch (section) {
    case 'Home':
      return <div className=""><Home/></div>;
    case 'Blog':
      return <div className=""><BlogDashboard/></div>;
    case 'Project':
      return <div className=""><ProjectDashboard/></div>;
    case 'Inquiry Data':
      return <div className=""><InquiryDashboard/></div>;
    case 'Treatments':
      return <div className=""><TreatmentDashboard/></div>;
    case 'Gallery':
      return <div className=""><GalleryDashboard/></div>;
    default:
      return <div><Home/></div>;
  }
};

const Dashboard = () => {
  const location = useLocation()
  const navigate= useNavigate()
  const [section, setSection] = useState('Home');
  const [user, setUser] = useState('Mohd Suhel');
  
  const {adminData} = location?.state || 'Admin'

  useEffect(()=>{
    if(adminData){
      setUser(adminData?.user?.email || 'Admin')
    }
    else{
      setUser('Admin')
    }

  },[])

  

  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("admin");
        Swal.fire({
          title: "Logged Out",
          text: "You have been logged out successfully!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/")
        });
      }
    });
  };
  

  return (
    <div className="flex flex-col sm:flex-row ">
      {/* Sidebar */}
      <div className="bg-slate-900 max-h-[100vh] overflow-hidden text-white min-h-screen  sm:w-64 py-6 px-3">
        <div className="text-2xl font-semibold mb-6 px-4">Dashboard</div>
        <SidebarItem name="Home" icon={<House />} onClick={setSection} />
        <SidebarItem name="Inquiry Data" icon={<MailQuestion />} onClick={setSection} />
        <SidebarItem name="Blog" icon={<Rss />} onClick={setSection} />
        <SidebarItem name="Project" icon={<FolderOpenDot />} onClick={setSection} />
        <SidebarItem name="Gallery" icon={<Images />} onClick={setSection} />
        {/* <SidebarItem name="Treatments" icon={<FaBriefcaseMedical />} onClick={setSection} /> */}
        <button
            onClick={logout}
            className=" group absolute bottom-5 cursor-pointer left-5 text-white bg-slate-800 z-20 p-2 px-4 rounded flex items-center space-x-2"
          >
            <FaSignOutAlt className='rotate-180 group-hover:-translate-x-1'/>
            <span>Logout</span>
          </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ">
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 flex justify-end items-center">
          <div className="flex items-center space-x-4">
            <span>{user}</span>
            <img
              src="https://www.w3schools.com/w3images/avatar3.png"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
          
        </div>

        {/* Section Content */}
        <div className=" max-h-[90vh] overflow-y-auto">
          <DashboardContent section={section} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
