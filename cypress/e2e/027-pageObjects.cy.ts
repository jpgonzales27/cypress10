//https://docs.cypress.io/guides/references/experiments#Configuration
import { LoginPage } from "../pages/Login";
import { ProfilePage } from "../pages/Profile";
describe("Basics", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("Sucess Login Scenario", () => {
    // LoginPage.submitLogin("test", "Test1234");
    LoginPage.usernameElement.type("test");
    LoginPage.passwordElement.type("Test1234*");
    LoginPage.loginElement.click();
    cy.url().should("contain", "profile");
    LoginPage.userElement.should("have.text", "test");
    ProfilePage.headerElement.should("have.text", "Profile");
    cy.get("#userName-value").should("have.text", "test");
  });

  it("Wrong User Login Scenario", () => {
    LoginPage.submitLogin("wrongUser", "wrongPassword");
    cy.url().should("not.contain", "profile");
    LoginPage.invalidLoginMessageElement.should(
      "have.text",
      "Invalid username or password!"
    );
    LoginPage.headerElement.should("have.text", "Login");
  });
});
