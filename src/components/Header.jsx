// import React from 'react';
// import './Header.css';
// import logo from '../assets/images/smart lights_logo.svg'; // Update the path as needed

// function Header() {
//   return (
//     <header className="header">
//       <div className="logo-container">
//         <img src={logo} alt="Smart Lights Logo" className="logo" />
//       </div>
//       <nav>
//         <ul className="nav-links">
//           <li><a href="#">Home</a></li>
//           <li><a href="#">Products</a></li>
//           <li><a href="#">Software Services</a></li>
//         </ul>
//       </nav>
//       <button className="login-button">Login</button>
      
//     </header>
//   );
// }

// export default Header;





import React, { useRef } from 'react';
import './Header.css';
import logo from '../assets/images/smart lights_logo.svg'; // Update the path as needed

function Header() {
  const loginButtonRef = useRef(null);

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

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Smart Lights Logo" className="logo" />
      </div>
      <nav>
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
  );
}

export default Header;

