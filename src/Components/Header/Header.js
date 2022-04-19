import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <nav>
          <div>
            <h1>this is your Header</h1>
          </div>
          <div>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
