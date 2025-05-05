import { render, screen } from '@testing-library/react';
import Mens from '../Mens';

describe('Mens Component', () => {
  test('renders Mens page with title', () => {
    render(<Mens />);
    expect(screen.getByText(/mens/i)).toBeInTheDocument();
  });
});