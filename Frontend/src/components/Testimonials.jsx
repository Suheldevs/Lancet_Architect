import React from "react";

function Testimonial() {
  return (
    <div className="py-10 md:py-10 lg:py-14 bg-gray-50">
    <div className="container mx-auto  mb-1">
    <div className="px-4">
        <p className="lg:text-lg text-primary uppercase font-medium flex items-center gap-2">
          <span className="h-[2px] w-7 bg-primary"></span> Our Testimonial
        </p>
        <h2 className="lg:text-3xl text-xl font-bold text-gray-900 mb-2 messiri">
        Take a look what our client says
        </h2>
</div>
      <div className="md:px-8 px-4 lg:mt-4">
        <iframe
          src="https://widget.tagembed.com/2156631"
          className="w-full lg:h-[30vh] overflow-y-auto"
          title="lancet reviews"
        ></iframe>
      </div>
    </div>
    </div>
  );
}


export default Testimonial;
