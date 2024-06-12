describe("Marvel Characters App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should display the home page with a list of characters", () => {
    cy.get(".character-card").should("have.length", 20);
  });

  it("should allow searching for a character", () => {
    cy.get('input[type="text"]').type("Spider");
    cy.get(".character-card").should("contain", "Spider");
  });

  it("should allow favoriting a character", () => {
    cy.get(".character-card").first().find("button").click();
    cy.get(".character-card")
      .first()
      .find("button")
      .should("contain", "Unfavorite");
  });
});
