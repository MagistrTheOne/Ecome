import { render, screen } from '@testing-library/react';
import Perfume from '../Perfume';

describe('Perfume Component', () => {
  test('renders Perfume page with title', () => {
    render(<Perfume />);
    expect(screen.getByText(/perfume/i)).toBeInTheDocument();
  });
});