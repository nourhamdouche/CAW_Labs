import { render, screen } from '@testing-library/react';
import MenuItem from './MenuItem';
import '@testing-library/jest-dom';

test('renders MenuItem correctly', () => {
  const item = {
    name: 'Margherita',
    description: 'Classic cheese and tomato',
    price: 250,
    image: 'url-to-image',
  };

  render(<MenuItem item={item} addToCart={() => {}} cartItems={[]} updateCartItemQuantity={() => {}} />);
  
  // Check if the name, description, and price are rendered
  expect(screen.getByText('Margherita')).toBeInTheDocument();
  expect(screen.getByText('Classic cheese and tomato')).toBeInTheDocument();
  expect(screen.getByText('250 da')).toBeInTheDocument();
});
test('clicking "Add to Cart" calls addToCart function', () => {
    const addToCart = jest.fn();
    const item = { name: 'Margherita', description: 'Classic cheese and tomato', price: 250, image: 'url' };
    
    render(<MenuItem item={item} addToCart={addToCart} cartItems={[]} updateCartItemQuantity={() => {}} />);
    
    const button = screen.getByText('Add to Cart');
    button.click();
    
    expect(addToCart).toHaveBeenCalledWith({ ...item, quantity: 1 });
  });
  