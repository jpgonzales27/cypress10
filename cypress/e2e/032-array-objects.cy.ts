import { User } from "./models/model";

describe("Array of Objects - Users", () => {
  it("Getting user information", () => {
    cy.fixture<{ users: User[] }>("example.json")
      .its("users")
      .then((users) => {
        cy.log("USERS: ", users);
      });
  });

  it("Getting user information 2", () => {
    cy.fixture<{ users: User[] }>("example.json")
      .its("users")
      .then((users) => {
        users.forEach((user) => {
          cy.log(user.username);
          cy.log(user.password);
        });
      });
  });

  it("Getting user information based on my fixture", () => {
    cy.fixture<{ users: User[] }>("example.json")
      .its("users")
      .then((users) => {
        users.forEach((user) => {
          cy.visit(`${Cypress.env("demoQA")}/login`);
          cy.login(user.username, user.password);
          if (user.valid) {
            cy.url().should("contain", "profile");
          } else {
            cy.url().should("contain", "login");
          }
          cy.clearCookies();
          cy.clearLocalStorage();
        });
      });
  });
});
