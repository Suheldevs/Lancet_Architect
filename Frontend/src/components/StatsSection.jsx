import { FaRegClock, FaTrophy, FaUsers, FaSmile } from "react-icons/fa";

const StatsSection = () => {
  return (
    <div
      className="relative w-full py-16 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://picsum.photos/1600/600')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div> {/* Dark overlay */}

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        
        {/* Years of Experience */}
        <div className="flex flex-col items-center">
          <FaRegClock size={50} className="mb-4" />
          <h3 className="text-lg font-semibold">Years Of Experience</h3>
          <p className="text-3xl font-bold mt-2">5+</p>
        </div>

        {/* Success Projects */}
        <div className="flex flex-col items-center">
          <FaTrophy size={50} className="mb-4" />
          <h3 className="text-lg font-semibold">Success Projects</h3>
          <p className="text-3xl font-bold mt-2">1+</p>
        </div>

        {/* Team Members */}
        <div className="flex flex-col items-center">
          <FaUsers size={50} className="mb-4" />
          <h3 className="text-lg font-semibold">Team Members</h3>
          <p className="text-3xl font-bold mt-2">15+</p>
        </div>

        {/* Client Satisfaction */}
        <div className="flex flex-col items-center">
          <FaSmile size={50} className="mb-4" />
          <h3 className="text-lg font-semibold">Clients Satisfaction</h3>
          <p className="text-3xl font-bold mt-2">100%</p>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;
