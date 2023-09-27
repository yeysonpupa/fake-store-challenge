import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './detail.css';
import Navbar from './navbar';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ha ocurrido un error');
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error('Ha ocurrido un error', error);
      });
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='container'>
      <div className='navbar-container'>
        <Navbar />
      </div>
      <div className='all-container'>
        <div className='detail-container'>
          <div key={product.id} className="card-detail">
            <div className="image-detail">
              <div className="product-image-detail">
                <img src={product.image} alt={product.title} />
              </div>
            </div>
            <div className="detail">
              <h2>{product.title}</h2>
              <p>Precio: ${product.price}</p>
              <p>Categoría: {product.category}</p>
              <p>Descripción: {product.description}</p>
            </div>
          </div>
        </div>
        <button>
            Añadir al carrito 
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
