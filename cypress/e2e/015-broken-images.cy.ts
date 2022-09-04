import cypress = require("cypress");

let img: HTMLImageElement;

describe("Broken imagens", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/broken`);
  });
  it("Not broken images assertion", () => {
    cy.get('div > img[src="/images/Toolsqa.jpg"]')
      .should("be.visible")
      .and(($img) => {
        img = $img[0] as unknown as HTMLImageElement;
        expect(img.naturalWidth).to.be.greaterThan(0);
      });
  });

  it("broken images assertion", () => {
    cy.get('div > img[src="/images/Toolsqa_1.jpg"]')
      .should("be.visible")
      .and(($img) => {
        img = $img[0] as unknown as HTMLImageElement;
        expect(img.naturalWidth).to.be.greaterThan(0);
      });
  });
});

describe.only("Broken image - Backup demo", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("theInternet")}/broken_images`);
  });

  it("Broken Image Detected(first)", () => {
    cy.get(".example > img")
      .first()
      .should("be.visible")
      .and(($img) => {
        img = $img[0] as unknown as HTMLImageElement;
        expect(img.naturalWidth).to.be.eq(0);
      });
  });

  it("Broken Image Detected(last)", () => {
    cy.get(".example > img")
      .last()
      .should("be.visible")
      .and(($img) => {
        img = $img[0] as unknown as HTMLImageElement;
        expect(img.naturalWidth).to.be.greaterThan(0);
      });
  });
});
