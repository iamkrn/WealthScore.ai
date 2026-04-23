import React from "react";

// Props type
type SectionTitleProps = {
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
};

const SectionTitle = ({
  title,
  highlight,
  description,
  center = true,
}: SectionTitleProps) => {
  return (
    <div className={`${center ? "text-center" : "text-left"} mb-12`}>

      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-semibold leading-tight text-white">
        {title}{" "}
        {highlight && (
          <span className="bg-linear-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`text-gray-400 mt-4 max-w-2xl text-sm md:text-base ${
            center ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}

    </div>
  );
};

export default SectionTitle;