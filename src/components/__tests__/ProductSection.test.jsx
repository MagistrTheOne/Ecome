import { render, screen } from '@testing-library/react';
import ProductSection from '../ProductSection';

const mockProducts = [
  { id: 1, name: 'Xiaomi 12T Pro', price: 100, image: '/images/xiaomi.png' },
];

describe('ProductSection Component', () => {
  test('renders products section with title and cards', () => {
    render(<ProductSection title="Новинки" products={mockProducts} />);
    expect(screen.getByText(/новинки/i)).toBeInTheDocument();
    expect(screen.getByText(/xiaomi 12t pro/i)).toBeInTheDocument();
  });
});