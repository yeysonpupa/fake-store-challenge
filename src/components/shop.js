import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './shop.css';
import Navbar from './navbar';
import { useAppContext } from '../AppContext';

function Shop() {
  const { state, dispatch } = useAppContext();

  const [showAll, setShowAll] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ha ocurrido un error');
        }
        return response.json();
      })
      .then((data) => {
        // Almacena los productos en el estado global
        dispatch({ type: 'SET_PRODUCTS', payload: data });
      })
      .catch((error) => {
        console.error('Ha ocurrido un error', error);
      });
  }, [dispatch]);

  // Filtro
  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  return (
    <div className="shop">
      <Navbar />
      <div className='filtro'>
        <select onChange={(e) => handleCategoryChange(e.target.value)} value={selectedCategory}>
          <option value="Todos">Todos</option>
          <option value="men's clothing">Ropa de hombre</option>
          <option value="jewelery">Joyería</option>
          <option value="electronics">Electrónica</option>
          <option value="women's clothing">Ropa de mujer</option>
        </select>
      </div>
      <div className="products">
        {state.products
          .filter((product) =>
            selectedCategory === 'Todos'
              ? true
              : product.category === selectedCategory
          )
          .slice(0, showAll ? state.products.length : 6)
          .map((product) => (
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
                <Link to={`/products/${product.id}`} className="button-link">
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
      </div>
      <button onClick={() => setShowAll(!showAll)} className="button-ver">
        {showAll ? 'Ver Menos' : 'Ver Más'}
      </button>
      <p>
        Se están mostrando {showAll ? state.products.length : 6} de {state.products.length} productos
      </p>
      <p>
        Autor del ejercicio <a href="https://github.com/yeysonpupa">Yeyson Pulido </a>- 0000222746
      </p>
    </div>
  );
}

export default Shop;
