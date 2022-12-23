import * as React from 'react';
import { mount } from '@cypress/react';

import MegaNav from '../components/meganav';

describe('MegaNav', () => {
  it('should operate with the keyboard via toggle buttons', () => {
    cy.mount(<MegaNav />);
    cy.get('[data-testid="megamenu-section1"]').focus().click();

    cy.focused().should('have.attr', 'aria-expanded', 'true');
  });

  it('submenus should not be reachable when closed', () => {
    cy.mount(<MegaNav />);
    cy.get('button[data-testid="megamenu-section1"]').focus().realPress('Tab');

    cy.focused().should('not.have.attr', '[data-testid="link-0"]');

    cy.focused().then(($el) => {
      expect($el).to.have.attr('data-testid', 'megamenu-section2');
    });
  });

  it('reach submenu items with keyboard', () => {
    cy.mount(<MegaNav />);
    cy.get('[data-testid="megamenu-section1"]').focus().click().realPress('Tab');
    cy.focused().should('not.have.attr', '[data-testid="megamenu-section2"]');

    cy.focused().then(($el) => {
      expect($el).to.have.attr('data-testid', 'link-0');
    });
  });
});
