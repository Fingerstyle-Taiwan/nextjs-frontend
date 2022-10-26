import { render } from '@testing-library/react'
import Home from '../.'

describe('Home', () => {
  const createRenderer = () => {
    return render(<Home />)
  }

  it('should render title', () => {
    const { queryByText } = createRenderer()

    expect(queryByText('一站式服務的指彈平台即將來臨')).toBeInTheDocument()
  })
})
