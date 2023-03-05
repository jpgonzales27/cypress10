describe("", () => {
  before(() => {
    cy.visit("https://codenboxautomationlab.com/");
  });
  it("scroll into view", () => {
    cy.wait(3000);
    cy.contains("Contact Us").scrollIntoView();
    cy.wait(3000);
    cy.get(".block-editor-rich-text__editable > span").scrollIntoView();
  });
});

describe.only("", () => {
  before(() => {
    cy.visit("https://www.google.co.in");
  });
  it("URL and scroll", () => {
    // Opening the URL

    cy.xpath('//*[@name="q"]')
      .should("be.enabled")
      .type("Selenium")
      .type("{enter}");

    cy.url().should("contain", "Selenium");

    // cy.scrollTo("botton");
  });
});
