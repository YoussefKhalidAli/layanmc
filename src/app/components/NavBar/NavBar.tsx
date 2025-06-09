"use client";

import Image from "next/image";
import "./NavBar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Image src="/icon.jpg" alt="logo" width={47.25} height={73.35} />
          <span className="logo-text">Layan Medical Center</span>
        </div>

        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#footer">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="cta">
          <a href="#book">Book Now</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
