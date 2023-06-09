describe("Test logowania", () => {
  it("Logowanie do strony i wylogowanie", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.get("#user_email")
      .type("user888@gmail.com")
      .should("have.value", "user888@gmail.com");
    cy.get("#user_password").type("1234567890");
    cy.get(".eckniwg2").click();
    cy.get("#open-navigation-menu-mobile").click();
    cy.get(":nth-child(9) > .css-bve2vl").click();
  });
});
