import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => (
  <footer className="px-5 md:px-12 py-16">
    <div className="flex flex-col py-6 md:flex-row items-center justify-between">
      <div className="flex items-center mb-4 md:mb-0 gap-0.5">
        <img src="/estatery-logo.svg" alt="Estatery logo" />
        <span className="text-xl font-bold text-gray-900">Estatery</span>
      </div>

      <nav className="flex space-x-8 text-sm font-medium text-gray-600">
        <a href="#" className="hover:text-secondary-300">Help Center</a>
        <a href="#" className="hover:text-secondary-300">FAQ</a>
        <a href="#" className="hover:text-secondary-300">Terms & Privacy</a>
      </nav>
    </div>

    <div className="border-t border-gray-200">
      <div className="flex flex-col md:flex-row py-6 items-center justify-between text-sm text-gray-500">
        <span>©2021 Estatery. All rights reserved.</span>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-secondary-300">
            <FaFacebook size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-secondary-300">
            <FaInstagram size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-secondary-300">
            <FaTwitter size={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-secondary-300">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
