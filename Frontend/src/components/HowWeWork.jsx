import { Lightbulb, Box, Ruler, Building } from "lucide-react";

const steps = [
  { id: 1, title: "Concept Ready", icon: Box },
  { id: 2, title: "Idea Works!", icon: Lightbulb },
  { id: 3, title: "Prototyping Ideas", icon: Ruler },
  { id: 4, title: "Execution", icon: Building },
];

export default function HowWeWork() {
  return (
    <div className="text-center py-10 px-5 container mx-auto">
     <div className="px-4">
        <p className="text-lg text-primary uppercase font-medium flex items-center justify-start gap-2">
          <span className="h-[2px] w-7 bg-primary"></span> How We Work
        </p>
        <h2 className="text-3xl text-start font-bold text-gray-900 mb-6 messiri">
          Take a tour of our work process
        </h2>
</div>
      <div className="flex justify-center items-center mt-10 gap-10">
        {steps.map(({ id, title, icon: Icon }) => (
          <div key={id} className="text-center relative  flex justify-center flex-col items-center">
            
            {/* Icon Container */}
            <div
              className="w-24 h-24 group flex items-center border justify-center rounded-full transition-all duration-1000 
              border-gray-500 text-gray-500 hover:bg-black hover:text-white relative"
            >
              <Icon size={70} />
              {/* Number Badge */}
              <div
                className="absolute top-0 -right-2 bg-white px-3 py-1 text-gray-700 
                group-hover:text-black font-bold rounded-full border border-gray-500 transition-all duration-300 
                group-hover:-top-2 group-hover:right-0 group-hover:border-black"
              >
                {id}
              </div>
            </div>
            {/* Title & Description */}
            <h3 className="font-semibold mt-3">{title}</h3>
            <p className="text-gray-500 text-sm mt-1 max-w-xs mx-auto">
              There are many variations of that passages of Lorem available more but the dummy majority.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
