describe("hooks", () => {
  before(() => {
    cy.log("Hello form before hook");
  });

  beforeEach(() => {
    cy.log("Hello form beforeEach hook");
  });

  after(() => {
    cy.log("Hello form after hook");
  });

  afterEach(() => {
    cy.log("Hello form afterEach hook");
  });
  it("test1", () => {
    cy.log("hello world");
  });

  it.skip("test2", () => {
    cy.log("hello world");
  });

  it.only("test3", () => {
    cy.log("hello world");
  });
});
