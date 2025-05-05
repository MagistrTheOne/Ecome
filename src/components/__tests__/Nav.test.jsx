import { render, screen } from '@testing-library/react';
import Nav from '../Nav';

describe('Nav Component', () => {
  test('renders navigation items', () => {
    render(<Nav />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/categories/i)).toBeInTheDocument();
  });
});