import { Lightbulb, Box, Ruler, Building } from "lucide-react";
import { useMemo } from "react";

const steps = [
  { id: 1, title: "Concept Ready", icon: Box },
  { id: 2, title: "Idea Works!", icon: Lightbulb },
  { id: 3, title: "Prototyping Ideas", icon: Ruler },
  { id: 4, title: "Execution", icon: Building },
];

const Step = ({ id, title, Icon, index }) => (
  <div className="text-center relative flex flex-col items-center">
    {/* Icon Container */}
    <div className="w-24 h-24 group flex items-center border justify-center rounded-full transition-all duration-1000 border-primary text-primary bg-white hover:bg-transparent hover:text-black relative">
      <Icon size={70} aria-hidden="true" />
      {/* Number Badge */}
      <div className="absolute top-0 -right-2 group-hover:bg-black px-3 py-1 text-primary group-hover:text-black font-bold rounded-full border border-primary transition-all duration-300 group-hover:-top-2 group-hover:right-0 group-hover:border-white bg-white">
        {id}
      </div>
    </div>
    {/* Title & Description */}
    <h3 className="font-semibold mt-3 text-white">{title}</h3>
    <p className="text-gray-400 text-sm mt-1 max-w-xs mx-auto px-2">
      There are many variations of that passages of Lorem available more.
    </p>

    {/* Arrow SVG (Hidden for last step) */}
    {index !== steps.length - 1 && (
      <svg
        className="absolute md:block hidden right-0 top-5 translate-y-1/2 translate-x-24"
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        height="54"
        viewBox="0 0 222 74"
        fill="none"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.91203 36.6111C2.02591 33.9082 0.220762 29.7777 0.0017416 25.814C-0.0865733 24.2477 3.21286 24.23 3.30117 25.8105C3.68269 32.6723 8.76257 38.0708 15.6971 38.117C24.4622 38.1755 32.8205 33.1684 40.3477 28.6591C41.4967 27.9708 42.6264 27.294 43.7353 26.6486C44.7327 26.0686 45.7298 25.4874 46.727 24.9061C54.9619 20.1061 63.2067 15.3004 71.7523 11.071C86.8223 3.61254 104.729 -3.23508 121.643 1.63781C132.345 4.72203 142.002 12.6557 147.496 22.6486C150.745 21.1779 154.125 20.0024 157.594 19.1582C177.517 14.3101 204.111 18.5502 217.862 35.449C217.307 33.7876 216.752 32.1265 216.197 30.4654C215.342 27.9066 214.487 25.3479 213.632 22.7882C213.13 21.2787 215.956 21.3001 216.648 21.9962C216.772 22.1223 216.897 22.2475 217.021 22.3727C217.146 22.4979 217.27 22.623 217.394 22.7491C217.812 23.1711 217.697 23.5351 217.332 23.7912C218.015 25.8339 218.697 27.8762 219.38 29.9184C220.235 32.4758 221.089 35.0332 221.944 37.5915C222.368 38.8595 220.269 38.998 219.52 38.7494C218.889 38.5397 218.256 38.3414 217.622 38.1546C216.948 38.2781 216.187 38.1472 215.811 37.6553C215.811 37.6546 215.811 37.654 215.81 37.6534C211.85 36.6282 207.824 36.0459 203.694 35.9081C201.684 35.8406 201.67 33.7877 203.691 33.8587C207.011 33.969 210.279 34.3359 213.501 34.9629C209.117 30.3967 203.27 26.8807 197.675 24.436C182.458 17.7867 163.758 17.8936 148.648 24.9047C150.473 28.7676 151.678 32.8918 152.098 37.1296C153.352 49.7807 147.3 63.6854 136.501 70.6041C130.39 74.5216 119.124 76.6206 115.864 67.951C112.561 59.1748 118.941 48.2215 123.992 41.5053C129.457 34.2437 136.568 28.2276 144.613 24.0486C141.079 17.3498 135.6 11.5722 129.04 7.59041C113.493 -1.84637 94.9155 3.34616 79.4922 10.2435C70.9874 14.046 62.9744 18.7902 54.9673 23.5308C47.2462 28.1021 39.5307 32.6701 31.3853 36.3873C23.5111 39.9816 12.1574 43.3948 4.91203 36.6111ZM145.74 26.3625C135.254 32.0095 126.079 41.2227 121.18 52.1532C118.704 57.6831 115.238 70.1246 124.338 71.6128C135.837 73.4916 145.121 58.983 147.717 49.6812C149.949 41.6762 148.961 33.5704 145.74 26.3625Z"
          fill="#7a7878"
        />
      </svg>
    )}
  </div>
);

export default function HowWeWork() {
  const memoizedSteps = useMemo(() => steps, []);

  return (
    <div className="text-center py-10 px-5 bg-black text-white">
      <div className="px-4 container mx-auto">
        <p className="text-lg text-primary uppercase font-medium flex items-center justify-center gap-2">
          <span className="h-[2px] w-7 bg-primary"></span> How We Work{" "}
          <span className="h-[2px] w-7 bg-primary"></span>
        </p>
        <h2 className="text-3xl font-bold text-white mb-6 messiri">
          Take a tour of our work process
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-6 container mx-auto">
        {memoizedSteps.map(({ id, title, icon }, index) => (
          <Step key={id} id={id} title={title} Icon={icon} index={index} />
        ))}
      </div>
    </div>
  );
}
