import React from 'react';
import { Monitor } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ThemeToggle from './componets/ThemeToggle';
// import { useEffect, useRef, useState } from 'react';
import BackToTopButton from './componets/BackToTopButton';
// import Chat from './pages/ChatPage';
import { useEffect, useState } from 'react';
import './index.css';
import TeamPortfolio from './pages/TeamPortfolio';
// import HomePage from './Dumb_comp/HomePage';
import NavBar from './componets/NavBar';
import Home2Page from './pages/Home2Page';
import ChatPage from './Dumb_comp/ChatPage';
import FeaturesPage from './pages/FeaturesPage';
import PrivacyPolicy from './pages/Footer_Pages/PrivacyPolicy';
import TermsConditions from './pages/Footer_Pages/TermsConditions';
import Disclaimer from './pages/Footer_Pages/Disclaimer';
import ScrollToTop from './componets/ScrollToTop';
import Service from './pages/Footer_Pages/Service';
import ContactUs from './pages/Footer_Pages/ContactUs';
import RouteChangeProgress from './componets/RouterChangeProgress';
import Signup from './pages/LoginPages/SignUp';
import Signin from './pages/LoginPages/Signin';
import UserSchema2 from './pages/LoginPages/UserSchema2';
import USchemaWithAD from './pages/LoginPages/USchemaWithAD';

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
      {/* <NavBar /> */}
      <RouteChangeProgress />
       <ScrollToTop />
      {/* <HomePage /> */}
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/UserSchema2" element={<USchemaWithAD />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/" element={<Home2Page />} />
        <Route path="/About_us" element={<TeamPortfolio />} />
        <Route path="/Features" element={<FeaturesPage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
        <Route path="/Disclaimer" element={<Disclaimer />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      {/* <TeamPortfolio /> */}




    </Router>

  );
}

export default App;