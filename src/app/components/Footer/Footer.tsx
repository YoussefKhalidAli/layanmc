"use client";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-item">
          <h4>About Layan Medical Center</h4>
          <p>
            Layan Medical Center is a specialist clinic located in Ramallah,
            offering quality healthcare services including dermatology, cupping
            therapy, dental care, and more.
          </p>
        </div>
        <div className="footer-item">
          <h4>Location</h4>
          <p>
            📍 Street 13A, Oud Metha - Dubai - United Arab Emirates, Dubai,
            United Arab Emirates
          </p>
        </div>
        <div className="footer-item">
          <h4>Contact Us</h4>
          <p>📞 +971 524668988</p>
          <p>📞 +971 528920028</p>
        </div>

        <div className="footer-item">
          <h4>Follow Us</h4>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Layan Medical Center. All rights reserved.</p>
      </div>
    </footer>
  );
}
