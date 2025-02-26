
import { Link } from "react-router-dom";
import bgvideo from "../assets/Lancet-video.mp4";

const HeroSection = () => {

  return (
    <div className="relative w-full h-screen overflow-hidden ">
      {/* Video Background */}
      <div className="absolute inset-0 bg-black/40 z-20"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bgvideo} type="video/mp4" />
      </video>

     
      {/* Hero Section Buttons */}
      <div className="absolute z-50 bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-6">
      <Link
            to="/"
            className="btn min-w-[200px] text-lg relative overflow-hidden rounded-full bg-black/10 hover:bg-black/30 backdrop-blur b-white/20 text-white px-6 py-3 inline-flex justify-center items-center font-medium transition-all duration-500 ease-in-out"
            data-hover="+91-8707438955"
          >
            <span>Contact Now</span>
          </Link>
      <Link
            to="/"
            className="btn  min-w-[200px] text-lg relative overflow-hidden rounded-full bg-black/10 hover:bg-black/30 backdrop-blur b-white/20 text-white px-6 py-3 inline-flex justify-center items-center font-medium transition-all duration-500 ease-in-out"
            data-hover="View Projects"
          >
            <span>View Projects</span>
          </Link>
      </div>
    </div>
  );
};

export default HeroSection;
