describe("Auto complete", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/date-picker`);
  });
  it("date picker validation", () => {
    cy.get("#datePickerMonthYearInput").click();
    cy.get(".react-datepicker__month-select").select("2");
    cy.get(".react-datepicker__year-select").select("1991");
    cy.findByText("16").click();
    cy.get("input#datePickerMonthYearInput").should("have.value", "03/16/1991");
  });

  it("date picker validation", () => {
    cy.get("#datePickerMonthYearInput")
      .clear()
      .type("03/27/1991 {enter}")
      .should("have.value", "03/27/1991");
  });
});
