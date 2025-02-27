import React, { memo } from "react";
import experience from "../assets/Home/stats/experience.svg";
import project from "../assets/Home/stats/project.svg";
import team from "../assets/Home/stats/team.svg";
import client from "../assets/Home/stats/cliet.svg"; // Fixed typo
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
      className="relative bg-cover bg-center text-white py-14"
      style={{ backgroundImage: `url(${bg})` }}
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 -mt-4 ">
        <p className="lg:text-lg  text-primary uppercase font-bold flex items-center justify-center gap-2">
          <span className="h-[2px] w-7 bg-primary"></span> Our Stats{" "}
          <span className="h-[2px] w-7 bg-primary"></span>
        </p>
        <h2 className="lg:text-3xl text-xl font-bold text-white text-center lg:mb-6 messiri">
          Together we can envision, inspire and transform your business
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-12 mt-6 lg:mt-14">
        {stats.map(({ id, icon, title, value },index) => (
          <div
          data-aos="fade-up"
          data-aos-delay={index * 200}
            key={id}
            className="bg-white text-black shadow-lg border border-gray-100 text-center py-5 relative"
          >
            <img src={icon} alt={title} className="w-14 h-14 mx-auto mb-2 bg-primary p-2 rounded-full" loading="lazy" />
            <h3 className="text-4xl font-bold text-primary">{value}</h3>
            <p className="mt-2 text-sm md:text-base font-medium">{title}</p>
            <div className="absolute top-0 left-0 w-full h-2 bg-primary rounded-b-2xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(StatsComponent);
