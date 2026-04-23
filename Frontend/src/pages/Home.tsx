import Navbar from "../components/Layout/Navbar";
import Hero from "../components/Home-page/Hero";
import Footer from "../components/Layout/Footer";
import Stats from "../components/Home-page/Stats";
import Features from "../components/Home-page/Features";
import Steps from "../components/Home-page/Steps";
import CTASection from "../components/Home-page/CTASection";

const Home = () => {
  return (
    <div className="bg-[#0B0F14] text-white min-h-screen">
      <Navbar />

      <main className="px-6 md:px-16">
        <Hero />
        <Stats/>
        <Features/>
        <Steps/>
        <CTASection/>
      </main>

      <Footer />
    </div>
  );
};

export default Home;