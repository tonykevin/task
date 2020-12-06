/// <reference types="cypress" />

describe("<Form />", () => {
  it("<Login /> - Verify homepage", () => {
    cy.visit("/");

    // Check title
    cy.get("[data-cy=loginTitle]")
      .invoke("text")
      .should("equal", "Iniciar sesión");

    // Form
    cy.get("[data-cy=loginForm]").should("exist");
    cy.get("[data-cy=emailInput]").should("exist");
    cy.get("[data-cy=passwordInput]").should("exist");
    cy.get("[data-cy=submitLogin]")
      .should("exist")
      .should("have.class", "btn-primary")
      .and("have.class", "btn")
      .invoke("text")
      .should("equal", "Iniciar sesión");

    cy.get("[data-cy=signUpLink]")
      .should("exist")
      .should("have.prop", "tagName")
      .should("eq", "A");

    cy.get("[data-cy=signUpLink]")
      .should("have.attr", "href")
      .should("eq", "/registrarse");
  });

  it('<SignUp /> - Verify sign up page', () => {
    cy.visit('/registrarse')

    cy.get('[data-cy=signUpTitle]')
      .should('exist')
      .invoke('text')
      .should('equal', 'Crear una cuenta')

    cy.get('[data-cy=signUpForm]').should('exist')

    cy.get('[data-cy=nameInput]').should('exist')
    cy.get('[data-cy=emailInput]').should('exist')
    cy.get('[data-cy=passwordInput]')
      .should('exist')
      .should('have.prop', 'type')
      .should('equal', 'password')
    cy.get('[data-cy=confirmInput]').should('exist')

    cy.get('[data-cy=submitSignUp]')
      .should('exist')
      .should('have.class', 'btn-primary')
      .invoke('text')
      .should('equal', 'Registrarme')
      .should('not.equal', 'Crear cuenta')

    cy.get('[data-cy=signInLink]')
      .should('exist')
      .should('have.attr', 'href')
      .should('eq', '/')

    cy.visit('/')
  })
});
