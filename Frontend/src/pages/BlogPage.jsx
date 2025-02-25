import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Breadcrum from "../components/Breadcrum";

const articles = [
  {
    date: "02-02-2025",
    title: "Five Quick Tips Regarding Architecture",
    content:
      "Architecture is an art form that marries creativity with functionality, shaping the spaces where we live, work, and play.",
    image: "https://picsum.photos/400/250?random=1",
  },
  {
    date: "01-11-2024",
    title: "Residential Space with Luxurious Interiors",
    content:
      "Transform your home into a masterpiece of luxury and comfort with our expertly designed residential spaces.",
    image: "https://picsum.photos/400/250?random=2",
  },
  {
    date: "01-10-2025",
    title: "Structural Design with Luxurious Interiors",
    content:
      "In the realm of modern architecture, the fusion of structural design with luxurious interiors has become a hallmark of sophistication, comfort, and innovation.",
    image: "https://picsum.photos/400/250?random=3",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const BlogPage = () => {
  return (
    <div className="">
      
      <Breadcrum
        title="Recent Blog"
        items={[
          { label: "Home", link: "/" },
          { label: "Blogs", link: "/blogs" },
        ]}
      />

      <div className="container px-4 grid grid-cols-3 mx-auto py-10 lg:py-14 md:py-12">
       
          {articles.map((article, index) => (
             <div key={index} className="px-2">
                          <div className="relative group  overflow-hidden shadow-lg cursor-pointer">
                            <img
                              src={article.image}
                              alt="Article"
                              className="w-full h-96 object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
                            />
            
                            <div className="absolute text-xs top-0 translate-y-20 group-hover:translate-0  -rotate-90 group-hover:rotate-0 group-hover:left-0  -left-7 bg-primary text-white px-3 py-2 z-20 transition-all duration-500 ease-in-out">
                              {article.date}
                            </div>
            
                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end opacity-100 h-full transition-all duration-500 ease-in-out cursor-pointer  text-white">
                              <h3 className="font-semibold text-xl px-4">{article.title}</h3>
                              <p className="text-sm mt-1 px-4">{article.content}</p>
                              <Link className="mt-6 group inline-block bg-primary-btn text-white px-6 py-3 hover:tracking-wider  items-center space-x-2 hover:bg-[#7A5F4D] transition-all duration-600">
                                       Read More<MdKeyboardDoubleArrowRight className="inline  group-hover:pl-4 w-9 transition-all duration-700  text-xl"/>
                                     </Link>
                            </div>
                          </div>
                        </div>
          ))}
       
      </div>
    </div>
  );
};

export default BlogPage;
