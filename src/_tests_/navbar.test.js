import React from 'react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/navbar';

// Prueba unitaria 3
test('Navbar renderiza las rutas', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  //Verificar que existen las rutas 
  const homeLink = screen.getByText('Home');
  expect(homeLink).toHaveAttribute('href', '/');

  const cartLink = screen.getByText('Carrito 🛒');
  expect(cartLink).toHaveAttribute('href', '/cart');
});