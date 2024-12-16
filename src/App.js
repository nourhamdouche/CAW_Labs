import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuDisplay from './components/MenuDisplay';
import Cart from './components/Cart';
import EnterName from './components/EnterName';
import Order from './components/Order';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [userName, setUserName] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevCart) => [...prevCart, item]);
  };

  const updateCartItemQuantity = (name, change) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + change }
          : item
      ).filter((item) => item.quantity > 0) 
    );
  };

  const handleNameSubmit = (name) => {
    setUserName(name);
  };

  const goToOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <Router>
      <div className="main-container">
        {!userName ? (
          <EnterName onNameSubmit={handleNameSubmit} />
        ) : !orderPlaced ? (
          <>
            <header>
              <h2>Welcome to Our Restaurant , {userName}!</h2>
              <h1>Our menu</h1>
            </header>
            <MenuDisplay
              addToCart={addToCart}
              cartItems={cartItems}
              updateCartItemQuantity={updateCartItemQuantity}
            />
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              goToOrder={goToOrder}
            />
          </>
        ) : (
          <Order cart={cartItems} setOrderPlaced={setOrderPlaced} />
        )}
      </div>

      <Routes>
        <Route path="/order" element={<Order cart={cartItems} setOrderPlaced={setOrderPlaced} />} />
        
      </Routes>
    </Router>
  );
}

export default App;
