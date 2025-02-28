import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import pattern from '../assets/pattern/pattern2.png'
import pencil from '../assets/pattern/pencil.png'
const AboutSection = () => {
  return (
    <section className="relative container mx-auto px-4 lg:py-14 md:py-12 py-10 flex flex-col md:flex-row items-center lg:gap-6 gap-4" id='about' >
<div className="lg:block hidden absolute z-20  top-10 right-0 rotate-45 lg:p-4 bg-white rounded-full">
<img src={pencil} alt='pencile ' className="h-16 animate-bounce "/>
</div>

      {/* Left Side Content - col-7 */}
      <div className="relative z-10  lg:w-7/12 text-left">
      <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${pattern})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.1,
              zIndex: -1,
            }}
          ></div>
        <p className="lg:text-lg text-primary uppercase font-medium flex items-center gap-2">
         <span className="h-[2px] w-7 bg-primary"></span> Welcome To Lancet Architect
        </p>
        <h2 className="text-2xl lg:text-3xl font-bold mt-2 messiri">
          Best Interior & Architectural Company in India
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed text-justify">
          <strong>Lancet Architect</strong>, where creativity meets functionality in the world of
          architecture and interior design. We are a dedicated team of professionals committed
          to transforming spaces into vibrant, usable environments that reflect the unique
          personality and needs of each client.
        </p>
        <p className="text-gray-700 mt-2 leading-relaxed text-justify" data-aos="fade-up">
          At <strong>Lancet Architect</strong>, we believe that design is not just about aesthetics;
          it's about creating experiences. Our approach seamlessly blends modern design
          principles with cultural elements, resulting in spaces that are not only visually
          stunning but also deeply meaningful. Whether we're working on a cozy home, a dynamic
          office, or an innovative commercial space, our focus remains on enhancing the overall
          usability and ambiance.
        </p>
        <p className="text-gray-700 mt-2 leading-relaxed text-justify" data-aos="fade-up">
          Our commitment to excellence is reflected in every project we undertake. We blend the
          latest in design trends with sustainable practices, ensuring that each project is
          innovative, environmentally responsible, and crafted to the highest standards of
          quality.
        </p>

        {/* Button */}
        <Link to='/contact' data-aos="fade-up" className="mt-6 group inline-block bg-primary-btn text-white px-6 py-3 hover:tracking-wider  items-center space-x-2 hover:bg-[#7A5F4D] transition-all duration-600">
          Learn More<MdKeyboardDoubleArrowRight className="inline  group-hover:pl-4 w-9 transition-all duration-500  text-xl"/>
        </Link>
      </div>

      {/* Right Side Image - col-5 */}
      <div className="lg:w-5/12 lg:block hidden" data-aos="zoom-in">
        <img
          src="https://images.adsttc.com/media/images/5de8/8330/3312/fd9f/fd00/01d3/large_jpg/08_Architect-Offices-Rivierstaete-Kantoren-Amsterdam-MVSA-%C2%A9Barwerd_van_der_Plas_W.jpg?1575519018
" 
          alt="Interior Design"
          className="w-full lg:h-[450px]  shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;
