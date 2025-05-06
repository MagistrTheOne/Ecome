import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Categories from '../Categories';

describe('Categories Component', () => {
  test('renders category cards', () => {
    render(<Categories />);
    expect(screen.getByText('Категории')).toBeInTheDocument();
  });
});