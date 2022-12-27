describe('Passes Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/');

    // cy.injectAxe();
  });

  it('title changes when navigating pages.', () => {
    cy.title().should('eq', 'CampSpots');

    cy.visit('http://localhost:1234/about');

    // test for title change
    cy.title().should('eq', 'CampSpots About');
  });

  it('keyboard users can navigate pages.', () => {
    cy.title().should('eq', 'CampSpots');

    cy.get('#megamenu-section3').focus().realPress('Enter');
    cy.get('[data-testid="link-megamenu-section3-1-0"]').focus().realPress('Enter');

    cy.title().should('eq', 'CampSpots About');
  });
});
