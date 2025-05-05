import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  test('renders header with title and search', () => {
    render(<Header />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter your product name/i)).toBeInTheDocument();
  });
});