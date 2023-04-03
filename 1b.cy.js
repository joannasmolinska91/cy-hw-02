describe("Test wylogowania", () => {
  it("Logowanie do strony i wylogowanie", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.contains("Log in");
    cy.get("#user_email")
      .type("testowyqa@qa.team")
      .should("have.value", "testowyqa@qa.team");
    cy.get("#user_password").type("QA!automation-1");
    cy.get(".eckniwg2").click();
    cy.get("#open-navigation-menu-mobile").click();
    cy.get(":nth-child(7) > .css-bve2vl").click();
  });
});
