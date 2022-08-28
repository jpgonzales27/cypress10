describe("locators", () => {
  beforeEach(() => {
    cy.visit("/classattr");
  });
  it("how to find elements by its text", () => {
    cy.xpath("//*[text()='Correct variant is']").should(
      "contain.text",
      "Correct"
    );
  });

  it("how to find elements by its attribute using xpath", () => {
    cy.xpath("//pre[@class=' language-html']").should("contain.text", "button");
  });

  it("find by class (middle and spaces)", () => {
    cy.xpath(
      "//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-warning ')]"
    ).should("have.css", "background-color", "rgb(255, 193, 7)");
  });
});
