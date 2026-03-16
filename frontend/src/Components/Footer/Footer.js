import React from "react";
import "./Footer.css";
import { Heart, InstagramIcon, Facebook, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-title">
              <span className="cake">🍰</span>
              <span className="brand-name">BLISS</span>
            </div>

            <p className="brand-text">
              Bringing sweetness to your life, one dessert at a time.
            </p>

            <div className="social-icons">
              <a href="https://www.instagram.com" className="icon">
                <InstagramIcon size={20}/>
              </a>
              <a href="https://www.facebook.com" className="icon">
                <Facebook size={20}/>
              </a>
              <a href="https://x.com" className="icon">
                <Twitter size={20}/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Our Story</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/">Careers</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3>Customer Service</h3>
            <ul className="footer-links">
              <li><a href="/">FAQs</a></li>
              <li><a href="/">Shipping Info</a></li>
              <li><a href="/">Returns</a></li>
              <li><a href="/">Track Order</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3>Stay Updated</h3>
            <p className="newsletter-text">
              Subscribe to get special offers and updates!
            </p>

            <div className="newsletter">
              <input type="email" placeholder="Your email"/>
              <button>Subscribe</button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            Made with <Heart size={16}/> by BLISS © 2026. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;