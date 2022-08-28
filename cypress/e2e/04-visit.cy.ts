describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/textinput");
  });
  it("visit", () => {
    cy.url().then((url) => {
      cy.log(`Imprimir la url: ${url}`);
      expect(url).to.contains("test");
      // expect(url).to.contains("juan");
    });
  });

  it("title", () => {
    cy.title().then((titulo) => {
      cy.log(titulo);
      expect(titulo).to.be.equals("Text Input");
    });
  });

  it.only("Input challenges", () => {
    cy.get("#newButtonName").type("Juan");
    cy.get("#updatingButton").click().should("have.text", "Juan");
  });
});
