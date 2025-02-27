import { Link } from "react-router-dom";
import bgvideo from "../assets/Lancet-video.mp4";
import { ChevronsRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative w-full lg:h-screen h-[95vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bgvideo} type="video/mp4" />
      </video>

      {/* Overlay Text */}
      <div className="absolute z-30 left-5 lg:bottom-12 bottom-52 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-1/2 lg:text-center text-white">

      <div className="rounded-full overflow-hidden w-fit bg-black/10 hover:bg-black/30 backdrop-blur text-white lg:text-lg text-sm font-medium px-4 py-2  flex items-center space-x-2">
  <span className="relative flex justify-center items-center h-4 w-4">
    <span className="absolute animate-ping h-5 w-5 bg-red-400 rounded-full opacity-75 duration-500"></span>
    <span className="relative h-3 w-3 bg-red-500 rounded-full"></span>
  </span>
  <span>Welcome to</span>
</div>

        <h1 className="text-3xl lg:text-6xl font-bold uppercase tracking-wide">
          Lancet Architect
        </h1>
        <p className="text-lg lg:text-2xl lg:mt-4 font-medium">
          Designing the Future, Building with Passion.
        </p>
      </div>

      {/* Hero Section Buttons */}
      <div className="absolute z-30 left-5 lg:bottom-8 bottom-52 lg:left-1/2 transform lg:-translate-x-1/2 flex space-x-6">
      <Link
            to="/"
            className="btn lg:min-w-[200px] min-w-[130px] lg:text-lg text-sm relative overflow-hidden rounded-full bg-black/10 hover:bg-black/30 backdrop-blur b-white/20 text-white lg:px-6 px-4 lg:py-3 py-2 inline-flex justify-center items-center font-medium transition-all duration-500 ease-in-out"
            data-hover="+91-8707438955"
          >
            <span>Contact Now</span>
          </Link>
        <Link
            to="/"
            className="btn  lg:min-w-[200px] min-w-[130px] lg:text-lg text-sm relative overflow-hidden rounded-full bg-black/10 hover:bg-black/30 backdrop-blur b-white/20 text-white lg:px-6 px-4 lg:py-3 py-2 inline-flex justify-center items-center font-medium transition-all duration-500 ease-in-out"
            data-hover="View Projects"
          >
            <span>View Projects</span> 
          </Link>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute lg:bottom-1 bottom-5 transform -translate-x-1/2 animate-bounce left-1/2">
        <ChevronsRight className="rotate-90 text-white " />
      </div>
    </div>
  );
};

export default HeroSection;
