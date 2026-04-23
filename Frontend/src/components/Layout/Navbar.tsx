import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import AuthModal from "../Auth/AuthModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-800">
      <div className="flex items-center justify-between px-6 md:px-16 py-4">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-semibold">
          <span className="text-gradient bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            MyWealthScore
          </span>
          <span className="text-white">.ai</span>
        </h1>

        {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Vision</a>
          <a href="#" className="hover:text-white transition">Four Pillars</a>
          <a href="#" className="hover:text-white transition">AI Intelligence</a>
        </nav>

        {/* Desktop Button */}
        <button 
        onClick={()=>setOpen(true)}
        className="hidden lg:block bg-linear-to-r from-yellow-400 to-cyan-400 text-black px-5 py-2 rounded-lg font-medium hover:opacity-90 transition">
          Login / Sign Up
        </button>
        <AuthModal isOpen={open} onClose={() => setOpen(false)} />

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-300">
          <a href="#" className="hover:text-white">Vision</a>
          <a href="#" className="hover:text-white">Four Pillars</a>
          <a href="#" className="hover:text-white">AI Intelligence</a>

          <button className="mt-2 bg-linear-to-r from-yellow-400 to-cyan-400 text-black px-4 py-2 rounded-lg font-medium">
            Login / Sign Up
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;