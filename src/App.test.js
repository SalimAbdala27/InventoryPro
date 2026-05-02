import { render, screen } from '@testing-library/react';
import App from './App';

test('renders InventoryPro landing page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /create inventories/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /watch tutorial/i })).toBeInTheDocument();
  expect(screen.getByTitle(/inventorypro tutorial video/i)).toBeInTheDocument();
});
