import React from "react";
import { useLocation, Link } from "react-router-dom";
import Breadcrum from "../components/Breadcrum";

const blogs = [
  {
    slug: "five-quick-tips-architecture",
    date: "02-02-2025",
    title: "Five Quick Tips Regarding Architecture",
    description: `<p>Architecture is an <strong>art form</strong> that marries creativity with functionality...</p>`,
    image: "https://picsum.photos/400/250?random=1",
  },
  {
    slug: "residential-space-luxury-interiors",
    date: "01-11-2024",
    title: "Residential Space with Luxurious Interiors",
    description: `<p>Transform your home into a <strong>masterpiece</strong> of luxury and comfort...</p>`,
    image: "https://picsum.photos/400/250?random=2",
  },
  {
    slug: "structural-design-luxury-interiors",
    date: "01-10-2025",
    title: "Structural Design with Luxurious Interiors",
    description: `<p>In the realm of modern architecture, the fusion of structural design with luxury...</p>`,
    image: "https://picsum.photos/400/250?random=3",
  },
];

const BlogDetail = () => {
  const location = useLocation();
  const article = location.state?.article;

  if (!article) {
    return (
      <div className="container mx-auto text-center py-20">
        <h2 className="text-3xl font-semibold">Blog Not Found</h2>
        <Link
          to="/blogs"
          className="mt-6 inline-block bg-primary-btn text-white px-6 py-3 rounded-lg hover:bg-[#7A5F4D] transition-all duration-300"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  // Filter other blogs except the current one
  const relatedBlogs = blogs.filter((blog) => blog.slug !== article.slug);

  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrum
        title="Blog Detail"
        items={[
          { label: "Home", link: "/" },
          { label: "Blogs", link: "/blogs" },
          { label: article.title, link: `/blogs/${article.slug}` },
        ]}
      />

      {/* Blog Content with Related Blogs Section */}
      <div className="container mx-auto px-4 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Blog Details Section */}
        <div className="lg:col-span-2">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover  shadow-md"
          />
          <p className="text-gray-500 text-sm mt-4">{article.date}</p>
          <h1 className="lg:text-3xl text-xl font-semibold mt-2">{article.title}</h1>

          {/* Blog Description (Render as HTML) */}
          <div
            className="mt-4 lg:text-lg text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.description }}
          />

          {/* Back to Blogs Button */}
          <Link
            to="/blogs"
            className="mt-6 inline-block bg-primary-btn text-white px-6 py-3  hover:bg-[#7A5F4D] transition-all duration-300"
          >
            Back to Blogs
          </Link>
        </div>

        {/* Related Blogs Section */}
        <div className="lg:col-span-1 border p-2 border-gray-100 ">
          <h2 className="text-2xl font-semibold mb-4 messiri ">Other Blogs</h2>
          <div className="space-y-6 max-h-[90vh] overflow-y-auto">
            {relatedBlogs.map((blog) => (
              <Link
                to={`/blogs/${blog.slug}`}
                state={{ article: blog }}
                key={blog.slug}
                className="block p-4 bg-white border border-gray-100 shadow-md  hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 object-cover "
                />
                <p className="text-gray-500 text-sm mt-2">{blog.date}</p>
                <h3 className="text-lg font-semibold mt-1 line-clamp-1">{blog.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
