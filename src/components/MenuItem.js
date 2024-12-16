import React from 'react';

function MenuItem({ item, addToCart, cartItems, updateCartItemQuantity }) {
  const cartItem = cartItems.find((cartItem) => cartItem.name === item.name);

  const handleAddToCart = () => {
    if (!cartItem) {
      addToCart({ ...item, quantity: 1 }); // Add item with initial quantity
    } else {
      updateCartItemQuantity(item.name, 1); // Increment existing item
    }
  };

  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <div className="price">{item.price} da</div>

      {!cartItem ? (
        <button onClick={handleAddToCart}>Add to Cart</button>
      ) : (
        <div className="quantity-controls">
          <button onClick={() => updateCartItemQuantity(item.name, -1)}>-</button>
          <span>{cartItem.quantity}</span>
          <button onClick={() => updateCartItemQuantity(item.name, 1)}>+</button>
        </div>
      )}
    </div>
  );
}

export default MenuItem;
