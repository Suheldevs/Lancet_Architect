import React from "react";

const DirectorMessage = () => {
  return (
    <section className="container mx-auto px-6 lg:py-14 py-12 flex flex-col md:flex-row items-center gap-10">
      {/* Left Content - 7 Columns */}
      <div className="md:w-7/12" data-aos="zoom-in">
      <p className="text-lg text-primary uppercase font-medium flex items-center gap-2">
         <span className="h-[2px] w-7 bg-primary"></span> Welcome To Lancet Architect
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 messiri">
          About Ms. Unknown
        </h2>
        <p className="text-gray-700 mb-2 leading-relaxed">
          As the Director of <strong>Lancet Architect</strong>, I am thrilled to
          share our passion for interior design and architecture with you. Our
          firm is built on a foundation of creativity, innovation, and a
          commitment to excellence, and we believe that every project is an
          opportunity to redefine the spaces we inhabit.
        </p>
        <p className="text-gray-700 mb-2 leading-relaxed">
          At <strong>Lancet Architect</strong>, we understand that your environment
          profoundly impacts your quality of life. Whether it’s a residential
          space that reflects your personality or a commercial project that
          enhances productivity, our goal is to create functional, beautiful
          spaces that resonate with your vision and values.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our team of talented architects, designers, and craftsmen bring
          diverse perspectives and expertise to tackle challenges head-on,
          turning your ideas into reality while ensuring meticulous attention to
          detail.
        </p>
      </div>

      {/* Right Image - 5 Columns */}
      <div className="md:w-5/12 flex justify-center" data-aos="zoom-in">
        <img
          src="https://picsum.photos/400/350"
          alt="Director"
          className=" shadow-lg object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default DirectorMessage;
