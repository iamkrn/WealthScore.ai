import React from "react";

// Props type
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div
      className="bg-[#111827] border border-gray-800 rounded-xl
      p-5 md:p-8 
      flex flex-col md:flex-row 
      items-center md:items-start 
      text-center md:text-left gap-4 
      min-h-35 md:min-h-42.5
      hover:border-cyan-400/50 transition duration-300"
    >
      {/* Icon */}
      <div
        className="w-12 h-12 md:w-14 md:h-14 rounded-lg 
        bg-linear-to-br from-teal-400 to-cyan-400 
        flex items-center justify-center
        md:mt-1.5
        text-black text-base md:text-lg 
        shrink-0"
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center">
        <h3 className="text-white font-semibold text-base md:text-lg">
          {title}
        </h3>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-2 max-w-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;