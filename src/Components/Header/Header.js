import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div>
      <div>
        <nav className="nav-container">
          <div>
            <h1 className="header-heading">Fitmax Gym</h1>
          </div>
          <div>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/login">LogIn</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
