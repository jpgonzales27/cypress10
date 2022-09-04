import cypress = require("cypress");

describe("working with links that opens a new tab", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/links`);
  });
  it("first approach, not click on the link", () => {
    cy.get("#simpleLink").should("have.attr", "href", "https://demoqa.com");
    cy.get("#simpleLink").should("have.attr", "target", "_blank");
  });

  it("second approach, remove the target from the link", () => {
    cy.get("#simpleLink").invoke("removeAttr", "target").click();
    cy.url().then((url) => {
      cy.log(url);
      expect(url).to.be.equal("https://demoqa.com/");
    });
  });
});
