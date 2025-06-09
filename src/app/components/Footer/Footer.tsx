import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">Medicio</span>
            </a>
            <div className="footer-contact pt-3">
              <p>Street 13A, Oud Metha</p>
              <p>Dubai - United Arab Emirates Dubai, United Arab Emirates</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+971 528920028 </span>
                <span> +971 524668988</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@example.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="" target="_blank">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://www.facebook.com/people/Layan-Medical-Center/61571346552026/"
                target="_blank"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a href="" target="_blank">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="" target="_blank">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#">Dental</a>
              </li>
              <li>
                <a href="#">Skin Care</a>
              </li>
              <li>
                <a href="#">Dermatology</a>
              </li>
              <li>
                <a href="#">Cupping</a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Hic solutasetp</h4>
            <ul>
              <li>
                <a href="#">Molestiae accusamus iure</a>
              </li>
              <li>
                <a href="#">Excepturi dignissimos</a>
              </li>
              <li>
                <a href="#">Suscipit distinctio</a>
              </li>
              <li>
                <a href="#">Dilecta</a>
              </li>
              <li>
                <a href="#">Sit quas consectetur</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Nobis illum</h4>
            <ul>
              <li>
                <a href="#">Ipsam</a>
              </li>
              <li>
                <a href="#">Laudantium dolorum</a>
              </li>
              <li>
                <a href="#">Dinera</a>
              </li>
              <li>
                <a href="#">Trodelas</a>
              </li>
              <li>
                <a href="#">Flexo</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">Layanmc</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
}
