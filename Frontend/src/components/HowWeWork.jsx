import { Lightbulb, Box, Ruler, Building } from "lucide-react";

const steps = [
  { id: 1, title: "Concept Ready", icon: Box },
  { id: 2, title: "Idea Works!", icon: Lightbulb },
  { id: 3, title: "Prototyping Ideas", icon: Ruler },
  { id: 4, title: "Execution", icon: Building },
];

export default function HowWeWork() {
  return (
    <div className="text-center py-10 px-5  bg-black text-white">
      <div className="px-4 container mx-auto">
        <p className="text-lg text-primary uppercase font-medium flex items-center justify-start gap-2">
          <span className="h-[2px] w-7 bg-primary"></span> How We Work
        </p>
        <h2 className="text-3xl text-start font-bold text-white mb-6 messiri">
          Take a tour of our work process
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-6 container mx-auto">
        {steps.map(({ id, title, icon: Icon }) => (
          <div key={id} className="text-center relative flex justify-center flex-col items-center">
            {/* Icon Container */}
            <div
              className="w-24 h-24 group flex items-center border justify-center rounded-full transition-all duration-1000 
              border-primary text-primary hover:bg-white hover:text-black relative"
            >
              <Icon size={70} />
              {/* Number Badge */}
              <div
                className="absolute top-0 -right-2 bg-black px-3 py-1 text-primary 
                group-hover:text-black font-bold rounded-full border border-primary transition-all duration-300 
                group-hover:-top-2 group-hover:right-0 group-hover:border-white group-hover:bg-white"
              >
                {id}
              </div>
            </div>
            {/* Title & Description */}
            <h3 className="font-semibold mt-3 text-white">{title}</h3>
            <p className="text-gray-400 text-sm mt-1 max-w-xs mx-auto px-2">
              There are many variations of that passages of Lorem available more.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
