describe("locators", () => {
  beforeEach(() => {
    cy.visit("/dynamicid");
  });
  it("cy.contains", () => {
    cy.contains("Button with Dynamic ID").should("contain.text", "Dynamic");
  });

  it("cy.get + cy.find", () => {
    cy.get(".container").find("button").should("contain.text", "Dynamic");
  });

  it("Css selector using an attribute", () => {
    cy.get('button[class="btn btn-primary"]').should("contain.text", "Dynamic");
  });

  it("Css selector using a class", () => {
    cy.get(".btn-primary").should("have.text", "Button with Dynamic ID");
  });
});
