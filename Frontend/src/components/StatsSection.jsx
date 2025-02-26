import React, { memo } from "react";
import experience from "../assets/Home/stats/experience.svg";
import project from "../assets/Home/stats/project.svg";
import team from "../assets/Home/stats/team.svg";
import client from "../assets/Home/stats/cliet.svg";
import bg from "../assets/pattern/banner1.jpg";

const stats = [
  { id: 1, icon: experience, title: "Years Of Experience", value: "5+" },
  { id: 2, icon: project, title: "Success Projects", value: "2+" },
  { id: 3, icon: team, title: "Team Members", value: "15+" },
  { id: 4, icon: client, title: "Clients Satisfactions", value: "100%" },
];

const StatsComponent = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-16 h-[300px] mb-36"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">
          Together we can envision, inspire and transform your business
        </h2>
      </div>
      <div className="absolute bottom-0 translate-y-1/2 w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-12">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white text-black shadow-lg  text-center  py-24 relative"
          >
            {/* <img src={stat.icon} className="bg-black"/> */}
            <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
            <p className="mt-2 text-sm md:text-base font-medium">{stat.title}</p>
            {/* <button className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded">
              Read More
            </button> */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary "></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(StatsComponent);
