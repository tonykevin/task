/// <reference types="cypress" />

describe("<CreateAccount />", () => {
  it('Validation and alerts', () => {
    cy.visit('/registrarse')

    cy.get('[data-cy=submitSignUp]').click()

    cy.get('[data-cy=alert]')
      .should('exist')
      .invoke('text')
      .should('equal', 'Todos los campos son requeridos')

    cy.get('[data-cy=alert]')
      .should('have.class', 'alert-error')

    // Fill form
    cy.get('[data-cy=nameInput]').type('Tony')
    cy.get('[data-cy=emailInput]').type('test@tonykevin.com')
    cy.get('[data-cy=passwordInput]').type('123')
    cy.get('[data-cy=confirmInput]').type('123')

    cy.get('[data-cy=submitSignUp]').click()

    cy.get('[data-cy=alert]')
      .should('exist')
      .invoke('text')
      .should('equal', 'El password tiene que tener al menos 6 carácteres')

    cy.get('[data-cy=alert]')
      .should('have.class', 'alert-error')

    cy.get('[data-cy=passwordInput]').clear().type('123456')
    cy.get('[data-cy=confirmInput]').clear().type('123455')

    cy.get('[data-cy=submitSignUp]').click()

    cy.get('[data-cy=alert]')
      .should('exist')
      .invoke('text')
      .should('equal', 'las contraseñas no son iguales')

    cy.get('[data-cy=passwordInput]').clear().type('123456')
    cy.get('[data-cy=confirmInput]').clear().type('123456')

    cy.get('[data-cy=submitSignUp]').click()

    cy.get('[data-cy=taskListTitle]')
      .should('exist')
      .invoke('text')
      .should('equal', 'Selecciona un proyecto')

    cy.get('[data-cy=logout]').click()
  })
})
