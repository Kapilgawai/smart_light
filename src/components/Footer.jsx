import React from 'react';
import './Footer.css';
import backgroundImage from '../assets/images/Footer.png'; // Import the background image
import logo from '../assets/images/smart lights_logo.svg'; 

function Footer() {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="footer-header">
        <div className="logo-container">
          <img src={logo} alt="Smart Lights Logo" className="logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Products</a></li>
          
            <li><a href="#">Software Services</a></li>
            <li><a href="#">Follow Us</a></li>
          </ul>
        </nav>
      
       
      </div>
      <div className='navfooter'>
      <nav>
          <ul className="nav-links2">
            <li><p>Privacy Policy</p></li>
          
            <li><p>Terms & Conditions</p></li>
            <li><p>Cookie Policy</p></li>

          </ul>
        </nav>
      </div>
      
    </footer>
  );
}

export default Footer;
