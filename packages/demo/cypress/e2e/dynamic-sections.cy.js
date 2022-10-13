describe('Dynamic Sections', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.react-toggle').click();
  });

  it('Sections should be visible', () => {
    cy.checkHeader(['HOME', 'ABOUT', 'PROJECTS', 'CONTACT']);
  });

  it('Clicking on "ABOUT" should show About me Section', () => {
    cy.clickOnHeader('ABOUT');

    cy.get('section[id="about"]').inViewport();
  });

  it('Moving between Sections should work', () => {
    cy.clickOnHeader('ABOUT');

    cy.clickOnHeader('CONTACT');

    cy.clickOnHeader('PROJECTS');

    cy.get('section[id="projects"]').inViewport();
  });
});
