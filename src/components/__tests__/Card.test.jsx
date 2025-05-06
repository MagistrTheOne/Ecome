import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../Card';

const mockProduct = { id: 1, name: 'Xiaomi 12T Pro', price: 100, image: '/images/xiaomi.png' };

describe('Card Component', () => {
  test('renders product card with name and price', () => {
    render(<Card name={mockProduct.name} price={mockProduct.price} image={mockProduct.image} />);
    expect(screen.getByRole('img', { name: mockProduct.name })).toBeInTheDocument(); // Проверка изображения
    expect(screen.getByRole('heading', { level: 3, name: mockProduct.name })).toBeInTheDocument(); // Проверка заголовка
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument(); // Проверка цены
  });
});