import { isMobile } from "../support/utils";

describe("Viewport iteration", () => {
  const viewportsToTest: Cypress.ViewportPreset[] = [
    "iphone-3",
    "samsung-note9",
    "macbook-15",
    "samsung-s10",
    "ipad-2",
  ];
  viewportsToTest.forEach((viewport) => {
    it(viewport, () => {
      cy.viewport(viewport);
    });
  });
});

describe("Hybrid suite", () => {
  it("Main Menu Test", () => {
    cy.log("desktop validation");
    if (isMobile()) {
      cy.log("a mobile validation");
    }
  });
});
