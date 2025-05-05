import { render, screen } from '@testing-library/react';
import Jewelry from '../Jewelry';

describe('Jewelry Component', () => {
  test('renders Jewelry page with title', () => {
    render(<Jewelry />);
    expect(screen.getByText(/jewelry/i)).toBeInTheDocument();
  });
});