describe('App initialization', () => {
  it.only('Should load courses on page load', () => {
    cy.visit('http://localhost:3000/')
    cy.server()
    cy.route('GET', '/courses', 'fixture:courses')

    cy.get('.swiper-wrapper .swiper-slide')
      .should('have.length', 9)
  })

  it.only('Should bring the correct course', () => {
    cy.visit('http://localhost:3000/cursos/6b71ea9f-53c1-48ab-9139-84b6fea688bf')
    cy.server()
    cy.route('GET', '/courses/6b71ea9f-53c1-48ab-9139-84b6fea688bf', 'fixture:course')
  })
})
