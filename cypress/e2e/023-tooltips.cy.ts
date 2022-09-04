describe("Tooltips describe", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/tool-tips`);
  });
  it("tool tip button", () => {
    cy.get("#toolTipButton").realHover();
    cy.get('div[role="tooltip"]').should(
      "have.text",
      "You hovered over the Button"
    );
  });

  it("tool tip button", () => {
    cy.get("#toolTipButton").realHover();
    cy.get(".tooltip-inner").should("have.text", "You hovered over the Button");
  });

  it.only("A tag tooltip", () => {
    cy.contains("a", "Contrary").realHover();
    cy.get(".tooltip-inner").should(
      "have.text",
      "You hovered over the Contrary"
    );
  });
});
