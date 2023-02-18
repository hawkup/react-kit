import { test, expect } from 'vitest'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Accordion } from './accordion'

test('click expand accordion', async () => {
  render(<Accordion />)

  await userEvent.click(screen.getByText('Is team pricing available?'))
  await screen.findByTestId('accordion-panel')

  expect(screen.getByTestId('accordion-panel')).toHaveTextContent(/Yes! You can purchase a license/)
})
