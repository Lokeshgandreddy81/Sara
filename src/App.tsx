import React from 'react';
import { Monitor } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ThemeToggle from './componets/ThemeToggle';
// import { useEffect, useRef, useState } from 'react';
import BackToTopButton from './componets/BackToTopButton';
// import Chat from './pages/ChatPage';
import { useEffect, useState } from 'react';
import './index.css';
import TeamPortfolio from './componets/TeamPortfolio';
import HomePage from './pages/HomePage';
import NavBar from './componets/NavBar';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkMobile = () => {
  //     const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  //     setIsMobile(isMobileDevice);
  //   };
  //   checkMobile();
  // }, []);

  // if (isMobile) {
  //   return (
  //     <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f8f8', }}>
  //       <h1 className='text-red' >Use a Laptop or Desktop to Access this Website</h1>
  //       <h2 className='text-red' style={{ color: 'red' }}>This website is not optimized for Mobile Devices</h2>
  //       <h2>If you are using Mobile Device use Desktop mode to Access this website</h2>
  //       <h2>😊</h2>
  //     </div>
  //   );
  // }

  return (
    <Router>
      <NavBar />
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About_us" element={<TeamPortfolio />} />
      </Routes>
      {/* <TeamPortfolio /> */}




    </Router>

  );
}

export default App;