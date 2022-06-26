describe("Pizza Form", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/pizza");
  });

  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  // Helpers
  const nameInput = () => cy.get("input[name=name]");
  const sizeInput = () => cy.get("select");
  const toppingInput1 = () => cy.get("input[name=topping1]");
  const toppingInput2 = () => cy.get("input[name=topping2]");
  const toppingInput3 = () => cy.get("input[name=topping3]");
  const toppingInput4 = () => cy.get("input[name=topping4]");
  const specialInput = () => cy.get("input[name=special]");
  const submitBtn = () => cy.get(`input[id="order-button"]`);

  it("proper elements are showing", () => {
    nameInput().should("exist");
    sizeInput().should("exist");
    toppingInput1().should("exist");
    toppingInput2().should("exist");
    toppingInput3().should("exist");
    toppingInput4().should("exist");
    specialInput().should("exist");
    submitBtn().should("exist");
  });

  describe("Filling out inputs and checking boxes", () => {
    it("can type in inputs and check boxes", () => {
      nameInput().should("have.value", "");
      nameInput().type("a");
      nameInput().should("have.value", "a");

      toppingInput1().should("not.be.checked");
      toppingInput1().check();
      toppingInput1().should("be.checked");

      toppingInput2().should("not.be.checked");
      toppingInput2().check();
      toppingInput2().should("be.checked");

      toppingInput3().should("not.be.checked");
      toppingInput3().check();
      toppingInput3().should("be.checked");

      toppingInput4().should("not.be.checked");
      toppingInput4().check();
      toppingInput4().should("be.checked");
    });
  });

  describe("Submit form and get proper return", () => {
    it("submit form and check response", () => {
      nameInput().type("aa");
      sizeInput().select("Large");
      toppingInput1().check();
      submitBtn().click();

      cy.contains(
        `{"name":"aa","size":"Large","topping1":true,"topping2":false,"topping3":false,"topping4":false,"special":""`
      );
    });
  });
});
