import React from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../../components/Button";

interface ITopNavMobileMenu {
  navLinks: string[];
  onClose: () => void;
}

const TopNavMobileMenu: React.FC<ITopNavMobileMenu> = ({ navLinks, onClose }) => {
  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-lg flex flex-col justify-between p-6 z-50">
      <div className="flex justify-end">
        <button className="text-black cursor-pointer" onClick={onClose} aria-label="Close Menu">
          <IoMdClose size={28} />
        </button>
      </div>

      <div className="flex flex-col gap-6 text-xl font-medium text-black">
        {navLinks.map((link) => (
          <a key={link} href="#" onClick={onClose}>
            {link}
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-4 mt-auto">
        <Button variant="secondary">Login</Button>
        <Button variant="primary">Sign up</Button>
      </div>
    </div>
  );
};

export default TopNavMobileMenu;
