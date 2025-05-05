import { render, screen } from '@testing-library/react';
import Card from '../Card';

const mockProduct = { id: 1, name: 'Xiaomi 12T Pro', price: 100, image: '/images/xiaomi.png' };

describe('Card Component', () => {
  test('renders product card with name and price', () => {
    render(<Card product={mockProduct} />);
    expect(screen.getByText(/xiaomi 12t pro/i)).toBeInTheDocument();
    expect(screen.getByText(/\$100/i)).toBeInTheDocument();
  });
});