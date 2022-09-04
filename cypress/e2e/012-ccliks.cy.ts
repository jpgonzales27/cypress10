import cypress = require("cypress");

describe("Demo QA", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/buttons`);
  });
  it("Duuble click", () => {
    cy.get("#doubleClickBtn").dblclick();
    cy.get("#doubleClickMessage").should(
      "have.text",
      "You have done a double click"
    );
  });

  it("Right click", () => {
    cy.get("#rightClickBtn").rightclick();
    cy.get("#rightClickMessage").should(
      "have.text",
      "You have done a right click"
    );
  });
});
