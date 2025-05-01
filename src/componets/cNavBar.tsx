import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NavBar from "./NavBar";

const NavbarToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="container">
      {/* Button to toggle navbar */}
      <button className="toggle-btn" onClick={toggleNavbar}>
        {isOpen ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
      </button>

      {/* Navbar visibility controlled by state */}
      <div className={`navbar ${isOpen ? "open" : "closed"}`}>
        <NavBar />
      </div>

      {/* Text behind navbar */}
      <div className="content">
        <h1>Your Text Goes Here</h1>
      </div>
    </div>
  );
};

export default NavbarToggle;
