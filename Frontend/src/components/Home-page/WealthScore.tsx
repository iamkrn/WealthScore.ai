import React from "react";

// Props type for Circle
type CircleProps = {
  value: number;
  color: string;
  size?: number;
};

const Circle = ({ value, color, size = 80 }: CircleProps) => {
  const stroke = 6;
  const radius = size / 2;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (value / 100) * circumference;

  return (
    <svg height={size} width={size}>
      {/* Background */}
      <circle
        stroke="#1f2937"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      {/* Progress */}
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        transform={`rotate(-90 ${radius} ${radius})`}
      />

      {/* Value */}
      <text
        x="50%"
        y="50%"
        dy="0.3em"
        textAnchor="middle"
        className="fill-white font-semibold"
        style={{ fontSize: size * 0.18 }}
      >
        {value}
      </text>
    </svg>
  );
};

// WealthScore component (no props needed)
const WealthScore: React.FC = () => {
  return (
    <div className="bg-[#111827] py-6 px-8 rounded-2xl border border-gray-800 w-full max-w-[320px] md:max-w-90">

      <h3 className="text-white text-lg font-semibold mb-4 text-center">
        Wealth Score
      </h3>

      {/* BIG CIRCLE */}
      <div className="flex justify-center mb-3">
        <Circle value={68} color="#f97316" size={140} />
      </div>

      <p className="text-center text-yellow-400 text-xs mb-4 tracking-wide">
        CONCERNING FINANCIAL HEALTH
      </p>

      {/* SMALL CIRCLES */}
      <div className="grid grid-cols-4 gap-x-10 lg:gap-4 place-items-center">
        <Circle value={25} color="#22c55e" size={60} />
        <Circle value={45} color="#facc15" size={60} />
        <Circle value={75} color="#38bdf8" size={60} />
        <Circle value={85} color="#0ea5e9" size={60} />
      </div>

      {/* LABELS */}
      <div className="grid grid-cols-4 text-xs text-gray-400 mt-2 text-center">
        <span>Liquidity</span>
        <span>Investments</span>
        <span>Debt</span>
        <span>Insurance</span>
      </div>

    </div>
  );
};

export default WealthScore;