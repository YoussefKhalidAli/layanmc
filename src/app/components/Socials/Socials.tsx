"use client";

import { useEffect, useState } from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import "./Socials.css";

export default function SocialIcons() {
  const [scrolledPastNav, setScrolledPastNav] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      setScrolledPastNav(scrollY > 100); // adjust as needed
      setAtBottom(scrollY + windowHeight >= fullHeight - 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconClass = `social-icons ${scrolledPastNav ? "stacked" : ""} ${
    atBottom ? "final" : ""
  }`;

  return (
    <div className={iconClass}>
      <a
        href="https://instagram.com"
        target="_blank"
        style={{
          color: "red",
        }}
      >
        <FaInstagram />
      </a>
      <a
        href="https://tiktok.com"
        target="_blank"
        style={{ color: "#010101 " }}
      >
        <FaTiktok />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61571346552026"
        target="_blank"
        style={{ color: "#2f80ea " }}
      >
        <FaFacebookF />
      </a>
    </div>
  );
}
