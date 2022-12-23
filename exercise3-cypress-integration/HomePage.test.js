describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/');
    cy.injectAxe();
  });

  it('should have a Header', () => {
    cy.get('#header').contains('CampSpots');
  });

  it('should have no accessibility violations', () => {
    cy.checkA11y({
      exclude: ['div#portal-root'],
    });
  });

  it('header link should have aria-current', () => {
    // she went with '#header a'
    cy.get('.header-main-item').should('have.attr', 'aria-current', 'true');
  });
});
