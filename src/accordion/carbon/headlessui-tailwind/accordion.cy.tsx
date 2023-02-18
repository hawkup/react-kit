import { Accordion } from './accordion'

it('event should work', () => {
  cy.mount(<Accordion />)

  cy.get('button').click()

  cy.get('[data-testid=accordion-panel]').should('have.text', 'Yes! You can purchase a license that you can share with your entire team.')
})
