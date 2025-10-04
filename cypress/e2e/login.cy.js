describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')

  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    cy.fazerLoginComCredenciaisVálidas()

    //Assert

    cy.contains('h4', 'Realizar Transferência').should('be.visible')

  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
      cy.fazerLoginComCredenciaisInvalidas()

    //Assert
    
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
})
  })
