import React from 'react';
import './Footer.css'; // Make sure to create this CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>RESOURCES</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Track your order</a></li>
            <li><a href="#">Return / Exchange</a></li>
            <li><a href="#">Customer Support</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund/Exchange Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>FOLLOW US</h3>
          <div className="social-links">
            <a href="#" className="social-icon">F</a>
            <a href="#" className="social-icon">I</a>
          </div>
        </div>
        
        <div className="footer-column">
          <h3>CONTACT US</h3>
          <p>Reach out to us on WhatsApp!</p>
          <p>Or, you can call our helpline:<br />Phone - +91999999999</p>
          <p>Working Hours - 10 AM to 6 PM, Mon to Sat</p>
        </div>
        
        <div className="footer-column">
          <h3>PUELLA STORE</h3>
          <p>Visit us at:</p>
          <p>A, Ground Floor, Sector 19, 29th Rd,<br />opposite Tower, Faridabad, Haryana 110054</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
