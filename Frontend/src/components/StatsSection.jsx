// StatsComponent.jsx
import React , {memo} from "react";
import experience from '../assets/Home/stats/experience.svg'
import project from '../assets/Home/stats/project.svg'
import team from '../assets/Home/stats/team.svg'
import client from '../assets/Home/stats/cliet.svg'
import bg from '../assets/pattern/banner1.jpg'

const stats = [
    { id: 4, icon: <img src={experience} alt="Happy Clients icon" className="h-full w-full"/>, title: "Years Of Experience", value: "5+" },
  { id: 1, icon: <img src={project} alt="Years Of Experience icon" className="h-full w-full"/>, title: "Success Projects", value: "2+" },
  { id: 2, icon: <img src={team} alt="Team Members" className="h-full w-full"/>, title: "Team Members", value: "15+" },
  { id: 3, icon: <img src={client} alt="Team Members" className="h-full w-full"/>, title: "Clients Satisfactions", value: "100%" },
];

const StatsComponent = () => {
  return (
    <div className="relative text-white/90 "  style={{
        backgroundImage:  `url(${bg})`, 
        backgroundPosition:'center'
      }}>
        <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4  ">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center hover:bg-yellow-600  md:py-16 py-8 bg-black text-center space-y-1 border-l border-gray-500"
          >
            
            <div className="h-24 w-24  ">{stat.icon}</div>
            {/* <div className="bg-white h-[1px] w-24 mt-1"></div> */}
            <p className="text-lg font-medium">{stat.title}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(StatsComponent);
