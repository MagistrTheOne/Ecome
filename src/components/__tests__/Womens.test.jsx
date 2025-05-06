import { render, screen } from '@testing-library/react';
import Womens from '../Womens';

describe('Womens Component', () => {
  test('renders Womens page with title', () => {
    render(<Womens />);
    expect(screen.getByText('Женская одежда')).toBeInTheDocument();
  });
});