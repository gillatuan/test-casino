import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { MyButtonMemoize } from '.'

describe('MyButton', () => {
  const handleClick = jest.fn()

  beforeEach(() => {
    render(<MyButtonMemoize label='My Button' handleClick={handleClick} />)
  })

  it('renders MyButton', () => {
    // check if all components are rendered
    expect(screen.getByText(/My Button/i)).toBeInTheDocument()
  })
  it('MyButton action click', () => {
    fireEvent.click(screen.getByText(/My Button/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
