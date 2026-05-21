import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 mt-20  bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Logo + desc */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-3">
              <span className="bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                MyWealthScore
              </span>.ai
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Making Financial Planning Accessible to Every Indian
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-4 text-gray-400 text-lg">
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaLinkedin className="hover:text-white cursor-pointer" />
              <FaGithub className="hover:text-white cursor-pointer" />
            </div>
          </div>



    
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">How it works</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white font-medium mb-3">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">SIP Calculator</li>
              <li className="hover:text-white cursor-pointer">EMI Calculator</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-3">Contact</h3>
            <p className="text-sm text-gray-400">support@email.com</p>
            <p className="text-sm text-gray-400 mt-1">+91-8847529356</p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2026 MyWealthScore. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;