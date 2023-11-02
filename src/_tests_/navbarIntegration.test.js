import React from 'react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Navbar from '../components/navbar';

// Prueba de integración
describe('NavBar', () => {
    it('Verifica usuario', async () => {
      render(
          <MemoryRouter>
            <Navbar />
          </MemoryRouter>
        );
     
      await waitFor(() => {
          const usuario = screen.getByText(/dr/i);
          return usuario;
        });
     
      const usuario = screen.getByText(/dr/i);
      expect(usuario).toBeInTheDocument();
    });
});