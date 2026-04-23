import WealthScore from './WealthScore'
import {useNavigate} from 'react-router-dom'
export default function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/wealth-form')
  }
  return (
    <section className="py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Transform Your Financial Future with{" "}
            <span className="bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              India’s Most Intelligent Wealth Score
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-lg mx-auto md:mx-0">
            Get your complete financial health report in just 2 minutes...
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
            onClick={handleClick}
            className="px-6 py-3 cursor-pointer rounded-lg bg-linear-to-r from-green-400 to-cyan-400 text-black font-semibold">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-lg border border-gray-600 text-white">
              Download App
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <WealthScore />
        </div>

      </div>
    </section>
  );
}