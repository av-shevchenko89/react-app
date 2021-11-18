/// <reference types="cypress" />
describe('Movies App', () => {
  it('loads successfully', () => {
    cy.visit('http://localhost:3000/')
  })

  it('displays movies', () => {
    cy.get('.movie-list .movie').should('have.length', 12)

    cy.get('.movie-list .movie').first().contains('Guardians of the Galaxy Vol. 3');
  })

  it('can search by title', () => {
    cy.get('.search input').type('matrix')
    cy.contains('Search').click()

    cy.get('.movie-list .movie')
      .should('have.length', 3)
      .first()
      .contains('The Matrix Revolutions');

    cy.contains('Guardians of the Galaxy Vol. 3').should('not.exist');
  })

  it('can select movie', () => {
    cy.get('.movie-details').should('not.exist');

    cy.get('.movie-list .movie').last().click();

    cy.get('.movie-details').contains('The Matrix');;
  })
})
