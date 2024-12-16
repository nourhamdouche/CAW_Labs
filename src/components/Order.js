import React from 'react';
import { useNavigate } from 'react-router-dom';

function Order({ cart, setOrderPlaced }) {
  const navigate = useNavigate(); 

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleGoBack = () => {
    setOrderPlaced(false);  
    navigate('/'); 
  };

  return (
    <div className="order-container">
      <h2>Your Order Summary</h2>
      <div className="order-items">
        {cart.map((item, index) => (
          <div key={index} className="order-item">
            <p>
              {item.quantity} x {item.name} - ${item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>
      <div className="order-total">
        <h3>Total: ${total}</h3>
      </div>

      {/* Animated GIF */}
      <div className="order-gif">
        <img src="https://media1.giphy.com/media/vcemOMb1fNj3mxX30M/200w.gif?cid=82a1493bcdoj87bqqy4hdu8ersf4shk41p8molf52wc68qlc&ep=v1_gifs_related&rid=200w.gif&ct=s" alt="Bon Appetit" />
      </div>

      {/* Back Button */}
      <button className="back-button" onClick={handleGoBack}>Back to Menu</button>
    </div>
  );
}

export default Order;
