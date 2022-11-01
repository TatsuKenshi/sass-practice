import React from "react";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <button>Logo</button>
      <div className="links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/profile">Profile</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
