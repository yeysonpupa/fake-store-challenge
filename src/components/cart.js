import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css';
import Navbar from './navbar';

function Cart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  return (
    <div className='container'>
      <div className='navbar-container'>
        <Navbar />
      </div>
      <div className='cart-container'>
        <h2>Carrito de Compras</h2>
          {cartItems.map((product) => (
            <li key={product.id} className='card'>
              <div className="image">
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
              </div>
              <div className="details">
                <h2>{product.title}</h2>
                <p>Precio: ${product.price}</p>
                <p>Categoría: {product.category}</p>
                <Link to={`/products/${product.id}`}>Ver Detalles</Link>
              </div>
            </li>
          ))}
      </div>
    </div>
  );
}

export default Cart;
