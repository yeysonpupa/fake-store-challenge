import React from 'react';
import './App.css';
import Shop from './components/shop';
import Detail from './components/detail';
import Cart from './components/cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
          path="/"
          element={<Shop />} />
          <Route
          path="/cart"
          element={<Cart />} />
          <Route
          path="/products/:id"
          element={<Detail />} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;