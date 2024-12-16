import React, { useState } from 'react';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';

function Cart({ cartItems, setCartItems, goToOrder }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen(!isOpen);

  const removeFromCart = (name) => {
    const updatedCart = cartItems.filter((item) => item.name !== name);
    setCartItems(updatedCart);
  };

  

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className="cart-icon" onClick={toggleCart}>
        <FaShoppingCart />
      </div>
      <div className={`cart-details ${isOpen ? 'open' : ''}`}>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.name} className="item">
              <span>{item.quantity} x {item.name}</span>
              <span>{item.price * item.quantity} da</span>
              <div className="item-actions">
                
                <button onClick={() => removeFromCart(item.name)} className="remove-item">
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))
        )}
        <div className="total">
          <span>Total:</span>
          <span>{totalPrice} da</span>
        </div>
        {cartItems.length > 0 && (
          <div className="cart-actions">
            <button onClick={() => setCartItems([])} className="clear-cart">
              Clear Cart
            </button>
            <button onClick={goToOrder} className="place-order">
              Place Order
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
