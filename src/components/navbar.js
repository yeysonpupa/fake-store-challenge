import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import LogoFakeStore from '../assets/logoFakeStore.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={LogoFakeStore} alt="logo" />
        <h1>Fake Store</h1>
      </div>
      <ul className="app__navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Carrito 🛒</Link>
      </ul>
    </nav>
  );
}

export default Navbar;