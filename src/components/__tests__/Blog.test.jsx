import { render, screen } from '@testing-library/react';
import Blog from '../Blog';

describe('Blog Component', () => {
  test('renders Blog page with title', () => {
    render(<Blog />);
    expect(screen.getByText('Блог')).toBeInTheDocument();
  });
});