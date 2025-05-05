import { render, screen } from '@testing-library/react';
import TopBar from '../TopBar';

describe('TopBar Component', () => {
  test('renders top bar with message', () => {
    render(<TopBar />);
    expect(screen.getByText(/top-bar-message/i)).toBeInTheDocument();
  });
});