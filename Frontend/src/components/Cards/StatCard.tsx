import React from "react";

// Props type
type StatCardProps = {
  icon: React.ReactNode;
  value: string | number;
  description: string;
};

const StatCard = ({ icon, value, description }: StatCardProps) => {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 flex items-start gap-4 hover:border-teal-400/50 transition">

      {/* Icon */}
      <div
        className="w-10 h-10 flex items-center justify-center 
        rounded-lg bg-teal-500/10 text-teal-400 mt-2 text-lg shrink-0"
      >
        {icon}
      </div>

      {/* Text */}
      <div>
        <p className="text-teal-400 text-2xl font-semibold">
          {value}
        </p>
        <p className="text-gray-400 text-sm mt-1 leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
};

export default StatCard;