describe("Basic API test examples", () => {
  it("GET request", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        cy.log("response", response);
      }
    );
  });

  it("POST a new resource", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
      title: "title #101",
      body: "post #101",
      userId: 101,
    }).then((response) => {
      cy.log("response", response);
    });
  });

  it("Update a resource", () => {
    cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
      id: 1,
      title: "title example",
      body: "body example",
      userId: 1,
    }).then((response) => {
      cy.log("response", response);
    });
  });

  it("Delete a resource", () => {
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        cy.log("response", response);
      }
    );
  });
});
