import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import "../styles/header.css";

function Header() {
  const { token } = useAuth();

  return (
    <header>
      <div>
        <img src="logo.png" alt="logo" />
      </div>

      <nav>
        <ul>
          <li><Link to="/home" className="link-header">Home</Link></li>
          <li><Link to="/about" className="link-header">About</Link></li>
          <li><Link to="/contact" className="link-header">Contact</Link></li>
          
          {!token && (
            <>
              <li><Link to="/login" className="link-header">Login</Link></li>
              <li><Link to="/signup" className="link-header">Get account</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
