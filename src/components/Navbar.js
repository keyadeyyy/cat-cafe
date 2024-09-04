import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const handleSelect = (path) => {
    setActive(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
    
      </div>
      <ul className="navbar-list">
        <li className={`navbar-item ${active === '/' ? 'active' : ''}`}>
          <Link to="/" onClick={() => handleSelect('/')}>Home</Link>
        </li>
        <li className={`navbar-item ${active === '/adopt' ? 'active' : ''}`}>
          <Link to="/adopt" onClick={() => handleSelect('/adopt')}>Adoption</Link>
        </li>
        <li className={`navbar-item ${active === '/menu' ? 'active' : ''}`}>
          <Link to="/menu" onClick={() => handleSelect('/menu')}>Menu</Link>
        </li>
        <li className={`navbar-item ${active === '/gallery' ? 'active' : ''}`}>
          <Link to="/gallery" onClick={() => handleSelect('/gallery')}>Gallery</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
