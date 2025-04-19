import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './index.css';
import TeamPortfolio from './pages/TeamPortfolio';
import Home2Page from './pages/Home2Page';
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
import USchemaWithAD from './pages/LoginPages/USchemaWithAD';
import NoInternetOverlay from './componets/NoInternet';
import Dashboard from './pages/Dashboard';
import UserList from './pages/AdminPgs/Userdata';
import React from 'react';
import { Monitor } from 'lucide-react';
import UserSchema2 from './Dumb_comp/UserSchema2';
import ChatPage from './Dumb_comp/ChatPage';
import BackToTopButton from './componets/BackToTopButton';
import NavBar from './componets/NavBar';
import Footer from './componets/Footer_FIn';
import ThemeToggle from './componets/ThemeToggle';
import HomePage from './Dumb_comp/HomePage';

function App() {
  // const [isMobile, setIsMobile] = useState(false);

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
      {/* <UserList /> */}
      <NoInternetOverlay />
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
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
      




    </Router>

  );
}

export default App;