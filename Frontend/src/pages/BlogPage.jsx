import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Breadcrum from "../components/Breadcrum";
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




const BlogPage = () => {

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
    <div>
      {/* Breadcrumb Navigation */}
      <Breadcrum
        title="Recent Blog"
        items={[
          { label: "Home", link: "/" },
          { label: "Blogs", link: "/blogs" },
        ]}
      />

      {/* Blog Grid */}
      <div className="container lg:px-4 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto py-10 lg:py-14">
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
                <h3 className="font-semibold text-xl">{article.title}</h3>
                
                {/* Render HTML Description */}
                {/* <div
                  className="text-sm mt-1 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: article.description }}
                /> */}

                {/* Read More Button */}
                <Link
                  to={`/blogs/${article.slug}`}
                  className="mt-6 inline-block bg-primary-btn text-white px-6 py-3 hover:tracking-wider items-center space-x-2 hover:bg-[#7A5F4D] transition-all duration-600"
                >
                  Read More
                  <MdKeyboardDoubleArrowRight className="inline group-hover:pl-4 w-9 transition-all duration-700 text-xl" />
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
