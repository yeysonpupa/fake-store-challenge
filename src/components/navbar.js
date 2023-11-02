import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [user, setUser] = useState([]);
 
  useEffect(() => {
    fetch("https://fakestoreapi.com/users/6")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="user-data">
        {user.name != null
        ? user.name.firstname[0] + user.name.lastname[0]
        : ""}
        </div>
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