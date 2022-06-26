describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
  });

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const pizzaBtn = () => cy.get("#order-pizza");

  it("#order-pizza exists", () => {
    pizzaBtn().should("exist");
  });

  it("pizzaBtn navigates to /pizza", () => {
    cy.url().should("include", "/");
    pizzaBtn().click();
    cy.url().should("include", "/pizza");
  });
});
