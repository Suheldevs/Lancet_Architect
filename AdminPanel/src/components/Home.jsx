import { useState, useEffect } from "react";
import axios from "axios";


import InquiryData from "./InquiryData";
import { FolderOpenDot, MailQuestion, Rss } from "lucide-react";

const Home = () => {
  const [blogCount, setBlogCount] = useState(0);
  const [caseCount, setCaseCount] = useState(0);
  const [inquiryCount, setInquiryCount] = useState(0);

  const fetchData = async () => {
    try {
      // Fetch total blogs
      const inquiryResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/inquiry/getall`
      );
      setInquiryCount(inquiryResponse.data.length);

      const blogResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/blog/getall`
      );
      console.log(blogResponse)
      setBlogCount(blogResponse.data.length);

      // Fetch total cases
      const caseResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/project/getall`
      );
      setCaseCount(caseResponse.data?.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <h1 className="text-3xl font-semibold text-center text-gray-900 mb-4">Hello Admin</h1> */}
      <div className="bg-gray-100   py-6 px-4 sm:px-6 lg:px-8">
        <div className="">
          {/* Greeting */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
            <div className="relative bg-slate-800  shadow-xl py-10 px-6 text-white overflow-hidden">
           
            
              {/* Content */}
              <div className="relative flex flex-col items-center text-center">
                <MailQuestion/>
                <h2 className="text-xl font-semibold">Total Inquiry</h2>
                <p className="text-4xl font-semibold mt-2">{inquiryCount}</p>
              </div>
            </div>

            <div className="relative bg-slate-800  py-10 px-6  shadow-xl text-white overflow-hidden">
             
             {/* Content */}
             <div className="relative  flex flex-col items-center text-center">
             <FolderOpenDot className="text-2xl"/>
               <h2 className="text-xl font-semibold">Total Projects</h2>
               <p className="text-4xl font-semibold mt-2">{caseCount}</p>
             </div>
           </div>

            <div className="relative bg-slate-800  shadow-xl py-10 px-6 text-white overflow-hidden">
             

              {/* Content */}
              <div className="relative flex flex-col items-center text-center z-10">
              <Rss/>
                <h2 className="text-xl font-semibold">Total Blogs</h2>
                <p className="text-4xl font-semibold mt-2">{blogCount}</p>
              </div>
            </div>

           
          </div>
        </div>
        <div className="my-10"><InquiryData/></div>
      </div>
    </>
  );
};

export default Home;
