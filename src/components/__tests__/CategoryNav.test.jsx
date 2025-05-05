import { render, screen } from '@testing-library/react';
import CategoryNav from '../CategoryNav';

describe('CategoryNav Component', () => {
  test('renders category cards', () => {
    render(<CategoryNav />);
    expect(screen.getByText(/dress/i)).toBeInTheDocument();
  });
});