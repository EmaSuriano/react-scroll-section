describe('Check project status', () => {
  it('Pull request', () => {
    cy.visit('/');
    cy.login();
    cy.get('.loading').should('not.be.visible');
    cy.get("[e2e-id='Pull Requests'].bg-danger").should('not.be.visible');
  });

  it('Issues', () => {
    cy.visit('/');
    cy.login();
    cy.get('.loading').should('not.be.visible');
    cy.get("[e2e-id='Issues'].bg-danger").should('not.be.visible');
  });
});
