import * as React from 'react';
import { mount } from '@cypress/react';

import MegaNav from '../components/meganav';

describe('MegaNav', () => {
  beforeEach(() => {
    cy.mount(<MegaNav />);
    cy.injectAxe();
    cy.get('[data-testid="megamenu-section1"]').focus();
  });

  it('should operate with the keyboard via toggle buttons', () => {
    cy.get('[data-testid="megamenu-section1"]').click();

    cy.focused().should('have.attr', 'aria-expanded', 'true');
  });

  it('submenus should not be reachable when closed', () => {
    cy.get('button[data-testid="megamenu-section1"]').realPress('Tab');

    cy.focused().should('not.have.attr', '[data-testid="link-0"]');

    cy.focused().then(($el) => {
      expect($el).to.have.attr('data-testid', 'megamenu-section2');
    });
  });

  it('reach submenu items with keyboard', () => {
    cy.get('[data-testid="megamenu-section1"]').click().realPress('Tab');
    cy.focused().should('not.have.attr', '[data-testid="megamenu-section2"]');

    cy.focused().then(($el) => {
      expect($el).to.have.attr('data-testid', 'link-0');
    });
  });

  it('should have no accessibility issues when open', () => {
    cy.get('button[data-testid="megamenu-section1"]').click();

    cy.checkA11y('#header-megamenu', {
      runOnly: {
        type: 'tag',
        values: ['cat.color', 'wcag2aa', 'wcag143', 'ACT'],
      },
    });
  });
});
