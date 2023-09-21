import React, { useState, useEffect } from 'react';
import './shop.css';

function Shop() {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(true);

  // Fetch API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Acción botón
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="shop">
      <div className="iniciales">YP</div>
      <h1>Fake Store</h1>
      <button onClick={toggleShowAll}>
        {showAll ? 'Ver Menos' : 'Ver Más'}
      </button>
      <p>
        Se están mostrando {showAll ? products.length : 6} de {products.length} productos
      </p>
      <div className="products">
        {products.slice(0, showAll ? products.length : 6).map((product) => (
          <div key={product.id} className="card">
            <div className="image">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
            </div>
            <div className="details">
              <h2>{product.title}</h2>
              <p>Precio: ${product.price}</p>
              <p>Categoría: {product.category}</p>
              <p>Descripción: {product.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p>
        Autor del ejercicio <a href="https://github.com/yeysonpupa">Yeyson Pulido </a>- 0000222746
      </p>
    </div>
  );
}

export default Shop;
