describe("Excel playground", () => {
  it("read data from excel", () => {
    cy.parseXlsx("cypress/fixtures/excelData.xlsx").then((jsonData) => {
      //Check what it is returning
      cy.log(jsonData);
      cy.log(jsonData[0].data);
    });
  });

  it("read data from excel complete", () => {
    cy.parseXlsx("cypress/fixtures/excelData.xlsx").then((jsonData) => {
      //Check what it is returning
      cy.log(jsonData);
      cy.log(jsonData[0].data);
      let data: [] = jsonData[0].data;
      let dataLength = data.length;

      cy.log("DATA: ", data);
      data.forEach((col) => {
        cy.log(col[0]);
        cy.log(col[1]);
      });

      data.forEach((col) => {
        cy.writeFile("cypress/fixtures/excelData.json", {
          username: col[0],
          parssword: col[1],
        });
      });
    });
  });
});
