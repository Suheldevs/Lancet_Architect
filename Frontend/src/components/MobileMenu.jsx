import { useState } from "react";
import {
  Home,
  FileText,
  Folder,
  Images,
  User,
  MessageSquareDiff,
  CircleUser,
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
const menuItems = [
    {
      name: "Home",
      link: "/",
      description: "Explore our architecture.",
      icon: <Home size={20} />,
    },
    {
      name: "About Us",
      link: "/about",
      description: "Our story and vision.",
      icon: <User size={20} />,
    },
    {
      name: "Projects",
      link: "/projects",
      description: "Our architectural designs.",
      icon: <Folder size={20} />,
    },
    {
      name: "Gallery",
      link: "/gallery",
      description: "Visual showcase of work.",
      icon: <Images size={20} />,
    },
    {
      name: "Testimonial",
      link: "/testimonial",
      description: "Client experiences.",
      icon: <MessageSquareDiff size={20} />,
    },
    {
      name: "Blog",
      link: "/blogs",
      description: "Architecture insights & trends.",
      icon: <FileText size={20} />,
    },
    {
      name: "Contact Us",
      link: "/contact",
      description: "Get in touch with us.",
      icon: <CircleUser size={20} />,
    },
  ];
  

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  

  return (
    <div className=" flex  justify-between  items-center p-2 px-4 w-full">
      <a href="/" className="w-32">
        <img src={logo} />
      </a>
      <div
        className={`toggle  z-50 ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className="bars bar1"></div>
        <div className="bars bar2"></div>
        <div className="bars bar3"></div>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute mx-2 top-16 left-1/2 -translate-x-1/2 border border-black/10 w-full bg-black/80 backdrop-blur-lg  rounded-lg shadow-lg p-3"
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex relative items-center gap-3 p-2 bg-black/70 hover:bg-black hover:cursor-pointer mb-2 rounded-lg"
            >
              <span className="text-white bg-white/5 p-2 rounded-xl">
                {item.icon}
              </span>
              <Link to={item.link} className="" onClick={() => setOpen(false)}>
                <p className="text-white font-semibold">{item.name}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
                {currentPath === item.link && (
                  <span className="absolute bg-white/5 text-gray-100 p-1 rounded top-2 right-4 text-sm">
                    Current
                  </span>
                )}
              </Link>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
