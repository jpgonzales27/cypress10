describe("ENviroment variable demo", () => {
  it("Demo", () => {
    cy.log(
      `Accediendo a la variable de Enviroment: ${Cypress.env("demoVar")}}`
    );
  });
});
