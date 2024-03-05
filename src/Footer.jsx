import React from "react";
import "./Footer.css";
import { useAuth0 } from "@auth0/auth0-react";

const Footer = () => {
  const { user } = useAuth0();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p> {user?.email}</p>
          <p>{user?.phone_number ? user?.phone_number : "7219061602"}</p>
          {/* Add more contact information as needed */}
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-media-links">
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://www.twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
            {/* Add more social media links as needed */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Subscribe to Our Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your E-commerce Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
