import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fading, setFading] = useState(false);
  const [icon, setIcon] = useState<'menu' | 'close'>('menu');

  const toggleMenu = () => {
    setFading(true);
    setTimeout(() => {
      setMenuOpen(!menuOpen);
      setIcon(icon === 'menu' ? 'close' : 'menu');
      setFading(false);
    }, 200);
  };

  const closeMenu = () => {
    setFading(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIcon('menu');
      setFading(false);
    }, 200);
  };

  return (
    <nav className="navbar">
      <div className="navbar-center">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="MitoPulse Logo" className="logo-image" />
          <div className="logo-text">
            <span className="logo-text-en">MitoPulse</span>
            <span className="logo-text-cn">线粒脉</span>
          </div>
        </Link>

        <div
          className={`hamburger-toggle ${fading ? 'fade-toggle' : ''}`}
          onClick={toggleMenu}
        >
          {icon === 'menu' ? '☰' : '✖'}
        </div>

        <div className={`navbar-links ${menuOpen ? 'mobile-open' : ''}`}>
          <NavLink to="/bixeps" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>BIXEPS</NavLink>
          <NavLink to="/qmt" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>QMT</NavLink>
          <NavLink to="/pricing" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>PRICING</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>ABOUT</NavLink>
          <NavLink to="/support" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>SUPPORT</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;