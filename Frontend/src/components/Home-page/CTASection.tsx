import { FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";

export default function CTASection() {
  const points = [
    "FREE Wealth Score Analysis",
    "AI Recommendations for Indian Products",
    "Tax Optimization Strategies",
    "No Hidden Charges",
    "RBI Compliant Security",
  ];

  return (
    <section className="relative bg-[#0b0f19] py-20 px-6 md:px-16 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-25 left-1/2 -translate-x-1/2 w-100 h-100 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-3xl mx-auto text-center">

        {/* Heading */}
        <SectionTitle
          title="Start Your Financial Transformation"
          highlight="Today"/>
          
        {/* Description */}
        <p className="text-gray-400 mb-8">
          Stop worrying about your financial future. In just 2 minutes, get a complete
          picture of your financial health with personalized recommendations.
        </p>

        {/* Points */}
        <div className="grid sm:grid-cols-2 gap-3 mb-8 text-left">
          {points.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
              <FaCheckCircle className="text-cyan-400" />
              {item}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-linear-to-r cursor-pointer hover:active:translate-y-px from-yellow-400 to-cyan-400 text-black font-semibold">
            Check My Wealth Score - FREE
          </button>

          <button className="px-6 py-3 rounded-lg border border-gray-600 text-white">
            See Sample Report
          </button>
        </div>

        {/* Bottom */}
        <p className="text-xs text-gray-500 mt-4">
          Join 100,000+ Indians who improved their financial health
        </p>

      </div>
    </section>
  );
}