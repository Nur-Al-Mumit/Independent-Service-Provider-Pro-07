import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <div>
        <nav className="nav-container">
          <div>
            <h1 className="header-heading">Fitmax Gym</h1>
          </div>
          <div>
            <Link to="/home">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/blogs">Blogs</Link>
            {user ? (
              <button className="add-btn" onClick={handleSignOut}>
                {" "}
                LogOut
              </button>
            ) : (
              <Link to="/login">LogIn</Link>
            )}
            <Link to="/register">Register</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
