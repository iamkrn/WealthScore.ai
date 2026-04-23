import FeatureCard from "../Cards/FeatureCard";
import { FaPiggyBank, FaChartPie, FaWallet, FaShieldAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaPiggyBank />,
      title: "Liquidity",
      description: "Manage your emergency fund and cash flow efficiently for financial stability.",
    },
    {
      icon: <FaChartPie />,
      title: "Investments",
      description: "Grow your wealth with optimized investment strategies and insights.",
    },
    {
      icon: <FaWallet />,
      title: "Debt",
      description: "Track and manage loans smartly to reduce financial burden.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Insurance",
      description: "Ensure proper coverage to protect your financial future.",
    },
  ];

  return (
    <section className="bg-[#0b0f19] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Financial Health Depends on{" "}
            <span className="text-yellow-400">Four Critical Areas</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Our AI analyses every aspect of your financial life across four fundamental domains
            that matter most to Indian families.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
