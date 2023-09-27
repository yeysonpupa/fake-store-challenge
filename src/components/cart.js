import React from 'react';
import './cart.css';
import Navbar from './navbar';

function Cart() {

  return (
    <div className='container'>
      <div className='navbar-container'>
        <Navbar />
      </div>
      <div className='cart-container'>
       CART
      </div>
    </div>
  );
}

export default Cart;