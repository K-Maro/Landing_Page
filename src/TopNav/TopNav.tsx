import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Button from "../components/Button";
import TopNavMobileMenu from "./TopNavMobileMenu";

const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Rent", "Buy", "Sell", "Manage Property", "Resources"];

  return (
    <header className="h-24 flex items-center justify-between px-5 md:px-12 relative z-50">
      <div className="flex items-center font-bold text-lg gap-0.5">
        <img src="/estatery-logo.svg" />
        Estatery
      </div>

      <nav className="hidden lg:flex items-center gap-12 text-sm font-medium text-black">
        {navLinks.map((link) => (
          <a key={link} href="#">
            {link}
          </a>
        ))}
      </nav>

      <div className="hidden lg:flex items-center gap-4">
        <Button variant="secondary">Login</Button>
        <Button variant="primary">Sign up</Button>
      </div>

      <button className="lg:hidden cursor-pointer" onClick={() => setMenuOpen(true)} aria-label="Open Menu">
        <IoIosMenu size={24} />
      </button>

      {menuOpen && <TopNavMobileMenu navLinks={navLinks} onClose={() => setMenuOpen(false)} />}
    </header>
  );
};

export default TopNav;
