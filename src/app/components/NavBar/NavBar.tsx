"use client";

import Image from "next/image";

import "./NavBar.css";
import { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <header id="header" className="header sticky-top">
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="d-none d-md-flex align-items-center">
            <i className="bi bi-clock me-1"></i> Saturday - Thursday, 11AM to
            9PM
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-phone me-1"></i> Call us now +971 528920028
          </div>
        </div>
      </div>

      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-end">
          <a
            href="index.html"
            className="logo d-flex align-items-center me-auto"
          >
            <Image
              src="/icon.jpg"
              alt="logo"
              width={30}
              height={450}
              style={{ borderRadius: "40%" }}
            />
            <h1 className="sitename">Layanmc</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a
                  href="#hero"
                  className={activeTab == 0 ? "active" : ""}
                  onClick={() => {
                    setActiveTab(0);
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={activeTab == 1 ? "active" : ""}
                  onClick={() => {
                    setActiveTab(1);
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#featured-services"
                  className={activeTab == 2 ? "active" : ""}
                  onClick={() => {
                    setActiveTab(2);
                  }}
                >
                  Services
                </a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
