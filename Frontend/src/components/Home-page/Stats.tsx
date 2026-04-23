import {
  FaPercentage,
  FaUniversity,
  FaChartLine,
  FaRupeeSign,
  FaShieldAlt,
} from "react-icons/fa";
import StatCard from "../Cards/StatCard";
import SectionTitle from "../ui/SectionTitle";

const stats = [
  { icon: <FaPercentage />, value: "76%", description: "Indians are financially illiterate" },
  { icon: <FaUniversity />, value: "68%",  description: "Depend on traditional savings" },
  { icon: <FaChartLine />, value: "85%",  description: "Don't invest in equity markets" },
  { icon: <FaRupeeSign />, value: "30%",  description: "Saves more but invests poorly" },
  { icon: <FaShieldAlt />, value: "87%",  description: "Lack adequate life insurance" },
];

export default function Stats() {
  return (
    <section className="bg-[#0b0f19] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Title */}
        <div className="text-center mb-14">
          <SectionTitle
              title="The Financial Planning Crisis in"
              highlight="India"
              description="Most Indians are navigating their financial journey without proper guidance..."
            />
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Most Indians are navigating their financial journey without proper guidance.
            Traditional financial advisors are expensive and often push products for commissions.
            The real challenge isn't lack of money, it's lack of personalized, unbiased financial guidance.
          </p>
        </div>

        {/* Top 3 */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.slice(0, 3).map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>

        {/* Bottom 2 */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 md:w-2/3 md:mx-auto">
          {stats.slice(3).map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>

      </div>
    </section>
  );
}