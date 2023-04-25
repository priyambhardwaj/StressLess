import { useState } from "react";
import { FaUser } from "react-icons/fa";
import '../src/css/navbar.css';
import logo from '../src/images/new.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
          <span>StressLess</span>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li onMouseEnter={handleDropdown} onMouseLeave={handleMouseLeave} className="navbar-profile">
          <span className="navbar-profile-icon">
            <FaUser />
          </span>
          <span className="navbar-profile-label"></span>
          {showDropdown && (
            <div className="navbar-dropdown">
              <Link to="/Profile">Your Accout</Link>
              <Link to="/subscription">Subscription</Link>
              <Link to="/login">Logout</Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
