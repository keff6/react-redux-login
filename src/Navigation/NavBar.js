import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <Link to="/home" className="navbar-brand">react-redux-login</Link>

    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item" style={{float: 'right'}}>
          <Link to="/login" className="nav-link">Logout</Link>
        </li>        
      </ul>
    </div>
  </nav>
)