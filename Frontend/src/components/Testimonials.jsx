import React from "react";

function Testimonial() {
  return (
    <div className="py-8 md:py-10 lg:py-12 bg-amber-50">
    <div className="container mx-auto  mb-1">
    <div className="px-4">
        <p className="text-lg text-primary uppercase font-medium flex items-center gap-2">
          <span className="h-[2px] w-7 bg-primary"></span> Our Testimonial
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Take a look what our client says
        </h2>
</div>
      <div className="md:px-10 px-4 ">
        <iframe
          src="https://widget.tagembed.com/2154852"
          className="w-full h-96"
          title="Xpress Tour & Travels Reviews"
        ></iframe>
      </div>
    </div>
    </div>
  );
}

export default Testimonial;
