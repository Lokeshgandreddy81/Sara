import React, { useState } from 'react';
import { Monitor, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import BackToTopButton from './BackToTopButton';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#8494e9] to-white dark:from-[#4c5bd4] transition-colors duration-300 ease-in-out">
      <div className="bg-[#8494e9] dark:bg-[#4c5bd4] transition-all duration-300 ease-in-out relative overflow-hidden">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Monitor className="h-8 w-8 text-white dark:text-black" />
            <span className="text-white dark:text-black text-xl font-bold">Sara AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ThemeToggle />
            <Link to="/" className="text-xl text-white dark:text-black hover:text-black dark:hover:text-white transition-all duration-300">
              Home</Link>
            <Link to="/About_us" className="text-xl text-white dark:text-black hover:text-black dark:hover:text-white transition-all duration-300">
              About us
            </Link>
            <Link to="/Features" className="text-xl text-white dark:text-black hover:text-black dark:hover:text-white transition-all duration-300">
              Features
            </Link>
            <a href="#Contact us" className="text-xl text-white dark:text-black hover:text-black dark:hover:text-white transition-all duration-300">
              Contact us
            </a>
            <Link to='/Signup'>
            <button className="bg-white text-black dark:bg-black dark:text-white px-6 py-2 rounded-full shadow hover:scale-110 transition-all duration-300">
              Sign In
            </button></Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white dark:text-black focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden px-6 pb-4 space-y-3">
            <ThemeToggle /><br /><br />
            <Link to="/" className="text-xl text-white dark:text-black hover:text-black dark:hover:text-white transition-all duration-300">
              Home</Link>
            <Link to="/About_us" className="block text-lg text-white dark:text-black hover:text-black dark:hover:text-white transition">
              About us
            </Link>
            <Link to="/Features" className="block text-lg text-white dark:text-black hover:text-black dark:hover:text-white transition">
              Features
            </Link>
            <Link to="/ContactUs" className="block text-lg text-white dark:text-black hover:text-black dark:hover:text-white transition">
              Contact us
            </Link>
            <button className="bg-white text-black dark:bg-black dark:text-white px-6 py-2 rounded-full shadow hover:scale-110 transition-all duration-300 w-full">
              Sign In
            </button>
          </div>
        )}
      </div>

      <BackToTopButton />
    </div>
  );
};

export default NavBar;
