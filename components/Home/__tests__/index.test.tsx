import { render } from '@testing-library/react'
import Home from '../.'

describe('Home', () => {
  const createRenderer = () => {
    return render(<Home />)
  }

  it('should render title', () => {
    const { queryByText } = createRenderer()

    expect(queryByText('Fingerstyle Taiwan')).toBeInTheDocument()
  })
})
