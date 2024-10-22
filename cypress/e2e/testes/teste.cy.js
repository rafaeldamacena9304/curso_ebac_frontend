

describe('Testes para agenda', () => {
    it('Precisa ter 3 contatos no estado inicial', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.contato').should('have.length', 3)
    })
    it('Precisa conseguir adicionar novos contatos', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('input').eq(0).type('Novo contato')
        cy.get('input').eq(1).type('contato@gmail.com')
        cy.get('input').eq(2).type('4002-8922')
        cy.get('.adicionar').click()
    })
    it('Precisa conseguir apagar um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.delete').eq(3).click()
        cy.get('.contato').should('have.length', 3)
    })
    it('Precisa conseguir editar um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.edit').eq(0).click()
        cy.get('input').eq(0).clear()
        cy.get('input').eq(0).type('Gian Ferreira')
        cy.get('.alterar').click()
        cy.get('.sc-eDDNvR > li').eq(0).should('contain', 'Gian Ferreira')
    })
})