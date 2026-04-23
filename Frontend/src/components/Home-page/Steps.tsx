import StepItem from "./StepItem";

const Steps = () => {
  const steps = [
    {
      number: "01",
      title: "Analyze Your Finances",
      desc: "Input your financial data to get a complete overview.",
    },
    {
      number: "02",
      title: "Get Wealth Score",
      desc: "Receive a detailed score based on your financial health.",
    },
    {
      number: "03",
      title: "Improve & Grow",
      desc: "Follow AI suggestions to improve your financial future.",
    },
  ];

  return (
    <section className="py-20 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get Started in{" "}
            <span className="bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>

          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Simple process to transform your financial life
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Line (only desktop) */}
          <div className="hidden lg:block absolute top-7 left-0 w-full h-0.5 bg-gray-800"></div>

          {steps.map((step, index) => (
            <StepItem key={index} {...step} />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Steps;