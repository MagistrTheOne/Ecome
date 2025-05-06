import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Trending from '../Trending';

describe('Trending Component', () => {
  test('renders Trending page with title', () => {
    render(<Trending />);
    expect(screen.getByRole('heading', { level: 2, name: /trending/i })).toBeInTheDocument();
  });
});