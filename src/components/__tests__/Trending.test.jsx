import { render, screen } from '@testing-library/react';
import Trending from '../Trending';

describe('Trending Component', () => {
  test('renders Trending page with title', () => {
    render(<Trending />);
    expect(screen.getByText(/trending/i)).toBeInTheDocument();
  });
});