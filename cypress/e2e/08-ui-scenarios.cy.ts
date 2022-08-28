describe("Retry abilty", () => {
  beforeEach(() => {
    cy.visit("/click");
  });
  it("Class assertions", () => {
    cy.get("#badButton").click().should("have.class", "btn-success");
  });
  it("background", () => {
    cy.get("#badButton")
      .click()
      .should("have.css", "background-color", "rgb(40, 167, 69)");
  });
});

describe("Hover challenges", () => {
  beforeEach(() => {
    cy.visit("/mouseover");
  });
  it("hover with cypress workaround", () => {
    cy.get(".text-primary").trigger("mouseover");
  });

  it("hover with real hover elements", () => {
    cy.get(".text-primary").realHover();
  });
});

describe.only("Dynamic table challenges", () => {
  beforeEach(() => {
    cy.visit("/dynamictable");
  });

  it("find all cells", () => {
    cy.get('div[role="row"] span').each((cell) => {
      if (cell.text().includes("Chrome")) {
        cy.log(`I found the cell with ${cell.text()}`);
        let chromeRowValues: string[] = [];
        let chromeRowValues2: string[] = [];
        chromeRowValues.push(cell.next().text());
        chromeRowValues.push(cell.next().next().text());
        chromeRowValues.push(cell.next().next().next().text());
        chromeRowValues.push(cell.next().next().next().next().text());
        chromeRowValues2.push(cell.nextAll().text());
        cy.log(`array ${chromeRowValues}`);
        cy.log(`array2 ${chromeRowValues2}`);

        chromeRowValues.forEach((e) => {
          if (e.includes("%")) {
            cy.log(e);
            cy.get(".bg-warning").should("have.text", `Chrome CPU: ${e}`);
          }
        });
      }
    });
  });

  it("find all cells 2", () => {
    cy.get('div[role="row"] span').each((cell) => {
      if (cell.text().includes("Chrome")) {
        cell.nextAll().each((index, $element) => {
          cy.log("" + $element + " " + index);
          let valor = $element.textContent;
          if (valor.includes("%")) {
            cy.get(".bg-warning").should("have.text", `Chrome CPU: ${valor}`);
          }
        });
      }
    });
  });
});
