import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import AuthModal from "../Auth/AuthModal";
import useAuthStore from "../../store/useAuthStore";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

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

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          {isAuthenticated ? (
            <>
              {/* User Info */}
              <span className="text-gray-300 text-sm">
                Hey, <span className="text-white font-medium">{user?.name}</span>
              </span>

              {/* Go to Form */}
              <button
                onClick={() => navigate("/wealth-form")}
                className="bg-linear-to-r from-yellow-400 to-cyan-400 text-black px-5 py-2 rounded-lg font-medium hover:opacity-90 transition"
              >
                Get Score
              </button>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm hover:border-red-500 hover:text-red-400 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="bg-linear-to-r from-yellow-400 to-cyan-400 text-black px-5 py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
              Login / Sign Up
            </button>
          )}
        </div>

        {/* Auth Modal */}
        <AuthModal isOpen={showModal} onClose={() => setShowModal(false)} />

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
        <div className="lg:hidden px-6 pb-4 flex flex-col gap-4 text-gray-300">
          <a href="#" className="hover:text-white">Vision</a>
          <a href="#" className="hover:text-white">Four Pillars</a>
          <a href="#" className="hover:text-white">AI Intelligence</a>

          {isAuthenticated ? (
            <>
              <span className="text-white text-sm">Hey, {user?.name}</span>
              <button
                onClick={() => navigate("/wealth-form")}
                className="bg-linear-to-r from-yellow-400 to-cyan-400 text-black px-4 py-2 rounded-lg font-medium"
              >
                Get Score
              </button>
              <button
                onClick={handleLogout}
                className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="mt-2 bg-linear-to-r from-yellow-400 to-cyan-400 text-black px-4 py-2 rounded-lg font-medium"
            >
              Login / Sign Up
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;