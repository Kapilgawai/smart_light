



import React, { useRef, useEffect, useState } from 'react';
import './HeroSection.css';
import './Header.css';
import heroVideo from '../assets/images/earth.mp4'; 
import logo from '../assets/images/smart lights_logo.svg'; 

function HeroSection() {
  const loginButtonRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpacity, setNavOpacity] = useState(1); 

  const handleMouseMove = (e) => {
    const btn = loginButtonRef.current;
    if (btn) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      btn.style.setProperty('--x', `${x}px`);
      btn.style.setProperty('--y', `${y}px`);
    }
  };

  const handleScroll = () => {
    const heroSection = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    const heroHeight = heroSection.clientHeight;

    setIsScrolled(scrollPosition > heroHeight);
    setNavOpacity(scrollPosition > heroHeight ? 0 : 1); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero">
      <header className={`header ${isScrolled ? 'header-shrink' : ''}`}>
        <div className="logo-container">
          <img src={logo} alt="Smart Lights Logo" className="logo" />
        </div>
        <nav style={{ opacity: navOpacity }}> {/* Apply opacity directly */}
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Software Services</a></li>
          </ul>
        </nav>
        <button
          className="login-button"
          ref={loginButtonRef}
          onMouseMove={handleMouseMove}
        >
          <span>Login</span>
        </button>
      </header>
      <video autoPlay loop muted className="hero-video">
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h2>Smart Lighting Solution</h2>
        <h1>Bringing A New Perspective To Street Lights <br />And The Cities Of Tomorrow.</h1>
        <button className="hero-button"
          ref={loginButtonRef}
          onMouseMove={handleMouseMove}>
          <span>Login</span>
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
