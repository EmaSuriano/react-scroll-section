Cypress.Commands.add('checkHeader', (labelList) => {
  labelList.forEach((label) => {
    cy.get('li').contains(label).should('be.visible');
  });
});

Cypress.Commands.add('clickOnHeader', (label) => {
  cy.get('li').contains(label).click();

  cy.wait(500);
});

Cypress.Commands.add(
  'inViewport',
  { prevSubject: true },
  (subject, visible = true) => {
    const scrollPosition = Cypress.$(cy.state('window')).height() - 1;
    const { top, bottom } = subject[0].getBoundingClientRect();
    if (visible) {
      expect(scrollPosition).to.be.within(top, bottom);
    } else {
      expect(scrollPosition).not.to.be.within(top, bottom);
    }

    return subject;
  },
);
