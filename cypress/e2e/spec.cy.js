describe('Prueba E2E de React App', () => {
  it('Verificar flujo agregar producto', () => {
    
    cy.visit('http://localhost:3000');

    cy.get('h1').should('contain', 'Fake Store');
    cy.contains('Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED').parent().contains('Ver Detalles').click();
    cy.url().should('include', '/products')
    cy.contains('Añadir al carrito').click()
    cy.contains('Carrito 🛒').click()
    cy.url().should('include', '/cart')
    cy.get('h2').should('contain', 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED');
  });
});