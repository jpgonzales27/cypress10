let img: HTMLImageElement;

describe("Broken imagens", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/upload-download`);
  });
  it("upload a file", () => {
    cy.get("input#uploadFile").attachFile("example.json");
    cy.get("#uploadedFilePath").should("contain.text", "example.json");
  });
});
