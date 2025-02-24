import React from "react";
import { FaTools, FaHeadset, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className=" lg:py-14 py-12 grid md:grid-cols-2 ">
      {/* Left Image */}
      <div className="w-full">
        <img
          src="https://picsum.photos/800/600"
          alt="Modern House"
          className=" shadow-lg object-cover w-full h-full"
        />
      </div>

      {/* Right Content */}
      <div className="py-4 px-10 bg-amber-700/5 flex justify-center items-cente flex-col">
      <p className="text-lg text-primary uppercase font-medium flex items-center gap-2">
         <span className="h-[2px] w-7 bg-primary"></span> Why Choose Us
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Take Control & Learn About Your Money.
        </h2>

        {/* Features List */}
        <div className="space-y-6">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="bg-primary p-4 rounded-full text-white">
              <FaTools size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Working with Modern Tools
              </h3>
              <p className="text-gray-700">
                Working with modern tools enhances efficiency, accuracy, and
                creativity in design, construction, and problem-solving across
                various industries and disciplines.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="bg-primary p-4 rounded-full text-white">
              <FaHeadset size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                24/7 Customer Support
              </h3>
              <p className="text-gray-700">
                24/7 customer support provides continuous assistance, ensuring
                help is available anytime for resolving issues and answering
                queries.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <div className="bg-primary p-4 rounded-full text-white">
              <FaUsers size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Professional Team Members
              </h3>
              <p className="text-gray-700">
                Professional team members bring expertise, collaboration, and
                dedication, ensuring high-quality outcomes and efficient project
                execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
