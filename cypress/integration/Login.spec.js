/// <reference types="cypress" />

describe("<Login />", () => {
  it("Verify homepage", () => {
    cy.visit("/");

    // Check title

    cy.contains("h1", "Iniciar sesión");

    cy.get("[data-cy=loginTitle]")
      .invoke("text")
      .should("equal", "Iniciar sesión");
  });
  it("Verify form", () => {});
});
