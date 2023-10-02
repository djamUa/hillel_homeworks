describe('Cypress.io UI Test', () => {
    beforeEach(() => {
      cy.visit('https://docs.cypress.io/api/commands/eq#Syntax');
    });
  
    it('should perform 10 steps with data input and element verification', () => {
    
      cy.title().should('contain', 'eq');
  
      cy.get('.search-input').type('Cypress eq command');
  
      cy.get('.search-button').click();
  
      cy.get('.search-results').should('exist');
  
      cy.get('.search-results li').eq(0).click();
  
      cy.get('.search-result-content').should('contain', 'Syntax');
  
      cy.go('back');
  
      cy.url().should('contain', '/commands/eq');
  
      cy.get('.search-results li').eq(1).click();
  
      cy.get('.search-result-content').should('contain', 'Example');
})
})
  