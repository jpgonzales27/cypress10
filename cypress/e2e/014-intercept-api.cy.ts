import cypress = require("cypress");

describe("Intercepting API(Spying) requests after clicking a button", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/links`);
  });
  it("first approach, not click on the link", () => {
    cy.intercept("GET", "**/created").as("linkStatus");

    cy.get("#created").click();
    cy.wait("@linkStatus").then(({ request, response }) => {
      cy.log(`Esto es el request`, request);
      cy.log(`Esto es el response`, response);
      expect(response.statusCode).to.be.equal(201);
      expect(response.statusMessage).to.be.equal("Created");
    });
  });
});
