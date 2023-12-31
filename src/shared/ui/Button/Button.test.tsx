import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

describe('Button', () => {
  test('Test render', () => {
    render(
        // eslint-disable-next-line i18next/no-literal-string
        <Button>TEST</Button>
    )
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
  test('Test clear theme', () => {
    render(
        // eslint-disable-next-line i18next/no-literal-string
        <Button theme={ButtonTheme.CLEAR}>TEST</Button>
    )
    expect(screen.getByText('TEST')).toHaveClass('clear')
    screen.debug()
  })
})
