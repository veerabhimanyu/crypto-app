import React from "react";
import "./Title.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        CryptoApp
      </Link>
      <Link to="/CryptoNews" className="navbar-brand">
        CryptoNews
      </Link>
    </nav>
  );
};

export default Navbar;
