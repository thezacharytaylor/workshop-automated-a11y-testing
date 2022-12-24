describe('Passes Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/passes');

    cy.injectAxe();
  });
  xit('should have no accessibility violations on load', () => {
    cy.checkA11y({
      exclude: ['div#portal-root'],
    });
  });
  it('focus should return to previous element on modal close', () => {
    cy.get('#btn-join-pro').focus().click().realPress('Tab');
    cy.focused().click();
    cy.focused().then(($el) => {
      expect($el).to.have.attr('id', 'btn-join-pro');
    });
  });
});
