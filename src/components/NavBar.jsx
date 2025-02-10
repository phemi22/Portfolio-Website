import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className={`fixed w-full p-4 z-50 transition-colors duration-300 ${
      isDark ? "bg-gray-900/80" : "bg-white/80"
    } backdrop-blur-sm`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
          Femi Adedokun
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              isDark ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-gray-900"
            }`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isDark ? "text-white" : "text-gray-900"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <NavLinks isDark={isDark} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full ${
          isDark ? "bg-gray-900/95" : "bg-white/95"
        } backdrop-blur-sm p-4`}>
          <div className="flex flex-col space-y-4">
            <NavLinks isDark={isDark} mobile onClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ isDark, mobile, onClick }) => {
  const links = ["about", "projects", "skills", "contact"];
  
  return links.map(link => (
    <a
      key={link}
      href={`#${link}`}
      onClick={onClick}
      className={`capitalize ${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} 
      transition-colors ${mobile ? "block" : ""}`}
    >
      {link}
    </a>
  ));
};

export default Navbar;