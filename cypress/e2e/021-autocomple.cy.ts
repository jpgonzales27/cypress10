describe("Auto complete", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/auto-complete`);
  });
  it("auto complete validation", () => {
    cy.log("autocomplete");
    cy.get("#autoCompleteMultipleContainer").type("y");
    cy.contains(".auto-complete__option", "Yellow").click();
    cy.get(".auto-complete__multi-value").should("have.text", "Yellow");
  });
});
