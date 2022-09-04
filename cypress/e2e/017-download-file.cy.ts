describe("Broken imagens", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/upload-download`);
  });
  it("download a file", () => {
    cy.get("#downloadButton").click();
    cy.verifyDownload("sampleFile.jpeg");
  });
});
