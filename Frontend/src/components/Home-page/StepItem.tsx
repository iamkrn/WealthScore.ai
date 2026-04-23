import React from "react";

// Props type
type StepItemProps = {
  number: number | string;
  title: string;
  desc: string;
};

const StepItem = ({ number, title, desc }: StepItemProps) => {
  return (
    <div className="relative flex flex-col items-center text-center max-w-xs">

      {/* Circle */}
      <div
        className="w-14 h-14 flex items-center justify-center rounded-full 
        bg-linear-to-r from-green-400 to-cyan-400 text-black font-bold text-lg z-10 shadow-lg"
      >
        {number}
      </div>

      {/* Content */}
      <h3 className="text-white text-lg font-semibold mt-6">
        {title}
      </h3>

      <p className="text-gray-400 text-sm mt-2 leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

export default StepItem;