import React from "react";

const AboutSection = () => {
  return (
    <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
      {/* Left Side Content - col-7 */}
      <div className="md:w-7/12 text-left">
        <p className="text-lg text-[#9B7D63] uppercase font-medium">
          Welcome To Lancet Architect
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Best Interior & Architectural Company in India
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          <strong>Lancet Architect</strong>, where creativity meets functionality in the world of
          architecture and interior design. We are a dedicated team of professionals committed
          to transforming spaces into vibrant, usable environments that reflect the unique
          personality and needs of each client.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed">
          At <strong>Lancet Architect</strong>, we believe that design is not just about aesthetics;
          it's about creating experiences. Our approach seamlessly blends modern design
          principles with cultural elements, resulting in spaces that are not only visually
          stunning but also deeply meaningful. Whether we're working on a cozy home, a dynamic
          office, or an innovative commercial space, our focus remains on enhancing the overall
          usability and ambiance.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Our commitment to excellence is reflected in every project we undertake. We blend the
          latest in design trends with sustainable practices, ensuring that each project is
          innovative, environmentally responsible, and crafted to the highest standards of
          quality.
        </p>

        {/* Button */}
        <button className="mt-6 bg-[#9B7D63] text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-[#7A5F4D] transition duration-300">
          <span>Learn More</span>
          <span>→</span>
        </button>
      </div>

      {/* Right Side Image - col-5 */}
      <div className="md:w-5/12">
        <img
          src="https://picsum.photos/500/500
" 
          alt="Interior Design"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;
