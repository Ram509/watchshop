import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import profile_icon from "../../Assets/profile_icon.png"; // Import the profile icon
// import logo_one from "../../Assets/logo.png"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">WatchShop</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="cart-icon">
      <Link to="/login">Login</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/profile">
          <img src={profile_icon} alt="Profile" className="profile-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
