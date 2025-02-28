import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../redux/slices/dataslice";

// const blogs = [
//   {
//     slug: "five-quick-tips-architecture",
//     date: "02-02-2025",
//     title: "Five Quick Tips Regarding Architecture",
//     description: `<p>Architecture is an <strong>art form</strong> that marries creativity with functionality, shaping the spaces where we <em>live</em>, <em>work</em>, and <em>play</em>.</p>`,
//     image: "https://picsum.photos/400/250?random=1",
//   },
//   {
//     slug: "residential-space-luxury-interiors",
//     date: "01-11-2024",
//     title: "Residential Space with Luxurious Interiors",
//     description: `<p>Transform your home into a <strong>masterpiece</strong> of <span class="text-blue-500">luxury</span> and comfort with our expertly designed residential spaces.</p>`,
//     image: "https://picsum.photos/400/250?random=2",
//   },
//   {
//     slug: "structural-design-luxury-interiors",
//     date: "01-10-2025",
//     title: "Structural Design with Luxurious Interiors",
//     description: `<p>In the realm of modern architecture, the fusion of <em>structural design</em> with <strong>luxurious interiors</strong> has become a hallmark of sophistication.</p>`,
//     image: "https://picsum.photos/400/250?random=3",
//   },
// ];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true, 
  responsive: [
    {
      breakpoint: 1024, // Tablet view
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640, 
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const BlogSection = () => {
  const dispatch = useDispatch();
    const { blogData, status, error } = useSelector((state) => state.data);
    useEffect(() => {
      if (!blogData.length) {
        dispatch(fetchBlogData());
      }
    }, [dispatch, blogData.length]);
  
  
   const formattedDate = (date)=>{
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
   })
   
   }

  return (
    <div className="container mx-auto px-4 lg:py-14 md:py-12 py-10">
      <div className="px-4">
        <p className="lg:text-lg text-primary uppercase font-medium flex items-center gap-2">
          <span className="h-[2px] w-7 bg-primary"></span> OUR LATEST Blog
        </p>
        <h2 className="lg:text-3xl text-xl font-bold text-gray-900 mb-6 messiri">
          Take a tour of our latest blogs
        </h2>
      </div>

      <div className=" mx-auto">
      {status === "loading" && (
          <div className="text-gray-800 text-xl font-semibold text-center">
            Loading...
          </div>
        )}
        {error && (
          <div className="text-red-500 text-xl font-semibold text-center">
            {error}
          </div>
        )}
        {!error && blogData.length === 0 && (
          <div className="text-red-500 text-xl font-semibold text-center">
            Blog Data Not Found!
          </div>
        )}

        <Slider {...settings}>
          {blogData?.map((article, index) => (
            <div key={index} className="px-2">
              <div className="relative group overflow-hidden shadow-lg cursor-pointer ">
                {/* Blog Image */}
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
                />

                {/* Blog Date Tag */}
                <div className="absolute text-xs top-0 translate-y-20 group-hover:translate-0 -rotate-90 group-hover:rotate-0 group-hover:left-0 -left-7 bg-primary text-white px-3 py-2 z-20 transition-all duration-500 ease-in-out">
                {formattedDate(article.updatedAt)}
                </div>

                {/* Blog Overlay Content */}
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end opacity-100 h-full transition-all duration-500 ease-in-out cursor-pointer text-white p-4">
                  <h3 className="font-semibold lg:text-xl">{article.title}</h3>

                  {/* Render HTML Description */}
                  {/* <div
                    className="text-sm line-clamp-3 mt-1"
                    dangerouslySetInnerHTML={{ __html: article.description }}
                  /> */}

                  {/* Read More Button */}
                  <Link
                    to={`/blogs/${article.slug}`}
                    state={{ article }}
                    className="mt-6 inline-block bg-primary-btn text-white px-6 py-3 hover:tracking-wider items-center space-x-2 hover:bg-[#7A5F4D] transition-all duration-600"
                  >
                    Read More
                    <MdKeyboardDoubleArrowRight className="inline group-hover:pl-4 w-9 transition-all duration-700 text-xl" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogSection;
