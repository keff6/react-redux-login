import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => 
  <ul>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/login">Logout</Link></li>
  </ul>