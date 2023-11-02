import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from '../App';

// Prueba unitaria 1
test('La aplicación renderiza correctamente la navbar', () => {
    render(<App />);

    //Obtener la navbar por classname
    expect(screen.getByRole('navigation')).toHaveClass('navbar')
});

// Prueba unitaria 2
test('La aplicación renderiza correctamente los textos', () => {
    render(<App />);

    //Verifica los textos
    const Titulo = screen.getByText('Fake Store');
    expect(Titulo).toBeInTheDocument();

    const opcion1 = screen.getByText('Todos');
    expect(opcion1).toBeInTheDocument();

    const opcion2 = screen.getByText('Ropa de hombre');
    expect(opcion2).toBeInTheDocument();

    const opcion3 = screen.getByText('Joyería');
    expect(opcion3).toBeInTheDocument();

    const opcion4 = screen.getByText('Electrónica');
    expect(opcion4).toBeInTheDocument();

    const opcion5 = screen.getByText('Ropa de mujer');
    expect(opcion5).toBeInTheDocument();

    const productos = screen.getByText('Se están mostrando 0 de 0 productos');
    expect(productos).toBeInTheDocument();

    const autor = screen.getByText('Yeyson Pulido');
    expect(autor).toBeInTheDocument();
});
