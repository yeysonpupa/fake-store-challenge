import React from 'react';
import './App.css';
import Shop from './components/shop';
import ProductDetail  from './components/detail';
import Cart from './components/cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from './AppContext';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div className="app">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductDetail  />} />
          </Routes>
        </div>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
