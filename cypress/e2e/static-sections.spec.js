describe('Static Sections', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Sections should be visible', () => {
    cy.checkHeader(['LANDING', 'ABOUT ME', 'MY PROJECTS', 'CONTACT ME!']);
  });

  it('Home section should be visible', () => {
    cy.get('section[id="home"]').inViewport();
  });

  it('About me section should not be visible', () => {
    cy.get('section[id="about"]').inViewport(false);
  });

  it('Clicking on "About me" should show About me Section', () => {
    cy.clickOnHeader('ABOUT ME');

    cy.get('section[id="about"]').inViewport();
  });

  it('Moving between Sections should work', () => {
    cy.clickOnHeader('CONTACT ME');

    cy.clickOnHeader('MY PROJECTS');

    cy.get('section[id="projects"]').inViewport();
  });
});
