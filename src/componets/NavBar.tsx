import React, { useState, useEffect } from 'react';
import { Monitor, Menu, X, CircleUserRound } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import BackToTopButton from './BackToTopButton';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { Link } from 'react-router-dom';
import ThemeImage from './ThemeImage';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  // const logo: string = '/public/S_title_logo.jpg';

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#8494e9] to-white dark:from-[#4c5bd4] transition-colors duration-300 ease-in-out">
      <div className="bg-[#8494e9] dark:bg-[#4c5bd4] transition-all duration-300 ease-in-out relative overflow-hidden">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-1 ">
            <ThemeImage />
            {/* <img className='h-12 w-12'
          src='/sara-logo.png'
          alt='Logo'></img> */}
            {/* <Monitor className="h-8 w-8 text-white dark:text-black" /> */}
            <span className="text-white dark:text-black text-xl font-bold">Sara AI</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ThemeToggle />
            <Link to="/" className="text-xl text-white dark:text-black hover:text-black dark:hover:text-white transition-all duration-300">
              Home
            </Link>
            <Link to="/Features" className="text-xl text-white dark:text-black hover:text-black dark:hover:text-white transition-all duration-300">
              Features
            </Link>
            <Link to="/Sarav1" className="text-xl text-white dark:text-black hover:text-black dark:hover:text-white transition-all duration-300">
              Insights
            </Link>
            <Link to="/About_us" className="text-xl text-white dark:text-black hover:text-black dark:hover:text-white transition-all duration-300">
              About us
            </Link>


            <a href="#Contact us" className="text-xl text-white dark:text-black hover:text-black dark:hover:text-white transition-all duration-300">
              Contact us
            </a>

            {user ? (
              <Link to="/Dashboard">
                <button className="bg-[#8494e9] text-black dark:bg-[#4c5bd4] dark:text-white px-1 py-1 rounded-full  hover:scale-110 transition-all duration-300"
                  title='Profile Page'>
                  <CircleUserRound className=" inline-block h-9 w-9" />
                </button>
              </Link>
            ) : (
              <Link to="/Signin">
                <button className="bg-white text-black dark:bg-black dark:text-white px-6 py-2 rounded-full shadow hover:scale-110 transition-all duration-300"
                  title='Log In'>
                  Log In
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white dark:text-black focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-6 pb-6 space-y-4">
            <ThemeToggle />
            <Link to="/" className="block text-lg text-white dark:text-black hover:text-black dark:hover:text-white transition">
              Home
            </Link>
            <Link to="/About_us" className="block text-lg text-white dark:text-black hover:text-black dark:hover:text-white transition">
              About us
            </Link>
            <Link to="/Features" className="block text-lg text-white dark:text-black hover:text-black dark:hover:text-white transition">
              Features
            </Link>
            <Link to="/Sarav1" className="block text-lg text-white dark:text-black hover:text-black dark:hover:text-white transition">
              Insights
            </Link>
            <Link to="/ContactUs" className="block text-lg text-white dark:text-black hover:text-black dark:hover:text-white transition">
              Contact us
            </Link>
            {user ? (
              <Link to="/Dashboard">
                <button className="w-full bg-white text-black dark:bg-black dark:text-white px-6 py-2 rounded-full shadow hover:scale-105 transition-all duration-300">
                  Profile
                </button>
              </Link>
            ) : (
              <Link to="/Signin">
                <button className="w-full bg-white text-black dark:bg-black dark:text-white px-6 py-2 rounded-full shadow hover:scale-105 transition-all duration-300">
                  Log In
                </button>
              </Link>
            )}
          </div>
        )}
      </div>

      <BackToTopButton />
    </div>
  );
};

export default NavBar;
