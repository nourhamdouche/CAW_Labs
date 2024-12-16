import React, { useState } from 'react';
import { FaPizzaSlice, FaHamburger, FaCoffee, FaIceCream } from 'react-icons/fa';
import MenuItem from './MenuItem';

function MenuDisplay({ addToCart, cartItems, updateCartItemQuantity }) {
  const [activeCategory, setActiveCategory] = useState('Pizza');

  const menuData = {
    Pizza: [
      { name: 'Margherita', description: 'Classic cheese and tomato', price: 250, image: 'https://img.freepik.com/free-photo/homemade-pizza-with-mozzarella-wooden-background_1220-4552.jpg?t=st=1734370966~exp=1734374566~hmac=d0ffce58ac82fc05ed552e390374e7a4ad8755ac17a4a577b5d4b6c356eb8ff9&w=996' },
      { name: 'Pepperoni', description: 'Pepperoni and cheese', price: 300, image: 'https://img.freepik.com/free-photo/pepperoni-pizza-with-salami-olives_140725-8753.jpg?t=st=1734371077~exp=1734374677~hmac=cd1b338cc34a5bb8b21256193b8ca8c1047f2d661156f30c237ebbcf11c1d4a0&w=740' },
    ],
    Sandwich: [
      { name: 'Chicken Burger', description: 'Grilled chicken with veggies', price: 200, image: 'https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?t=st=1734370589~exp=1734374189~hmac=5718a5f0db60d6adb38aa12d1c0fc68572c549a23d30a1e8d4cf0a612914c80d&w=740' },
      { name: 'Veggie Sandwich', description: 'Assorted veggies on toasted bread', price: 150, image: 'https://img.freepik.com/free-photo/vegetarian-sandwich-with-salad-tomatoes-wooden-table-surface_613910-7441.jpg?t=st=1734370802~exp=1734374402~hmac=204314656e2207533186560002d942d6f51d1c33a196e7a0a1b5e508d936fdd8&w=996' },
    ],
    Drinks: [
      { name: 'Coffee', description: 'Freshly brewed coffee', price: 150, image: 'https://img.freepik.com/free-photo/person-pouring-milk-into-cup-coffee_1286-61.jpg?t=st=1734369482~exp=1734373082~hmac=4950fa55d869dcec918d60d35a462c31a15bb30b9003f90acdebbe8eaa700b9e&w=826' },
      { 
        name: 'Orange Juice', description: 'Freshly squeezed orange juice',price: 100,image: 'https://img.freepik.com/free-photo/glass-freshly-squeezed-juice-orange-fruit-wooden-cutting-board_169016-51973.jpg?t=st=1734370478~exp=1734374078~hmac=a9dcbc5a3cca18ea1a1bb02efb9a09589227c2d97fb302c8d7f27ebbfc387ba7&w=996' 
      }
   ],
    Desserts: [
      { name: 'Ice Cream', description: 'Vanilla, chocolate, and more', price: 200, image: 'https://img.freepik.com/free-photo/chocolate-vanilla-ice-cream-bowl-dessert-close-up_53876-106080.jpg?t=st=1734369373~exp=1734372973~hmac=4b175c2280a81f68354c84e892f6e3cbe1d1c93e13bfb439f20e6a638c9eed6c&w=996' },
      { name: 'Cake', description: 'Rich chocolate cake', price: 350, image: 'https://img.freepik.com/free-photo/pear-cake-wooden-board-with-walnuts-chocolate-fresh-fruits-side-view_141793-3780.jpg?t=st=1734369261~exp=1734372861~hmac=ecd506ea184f612cab1d2d3ef2aa3032ff8affd8cda191bc5a48a6133bfe21b9&w=740' },
    ],
  };

  return (
    <div>
      <div className="menu-categories">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            className={`menu-category-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category === 'Pizza' && <FaPizzaSlice className="category-icon" />}
            {category === 'Sandwich' && <FaHamburger className="category-icon" />}
            {category === 'Drinks' && <FaCoffee className="category-icon" />}
            {category === 'Desserts' && <FaIceCream className="category-icon" />}
            <span>{category}</span>
          </button>
        ))}
      </div>

      <div className="menu-items">
        {menuData[activeCategory].map((item) => (
          <MenuItem
            key={item.name}
            item={item}
            cartItems={cartItems}
            addToCart={addToCart}
            updateCartItemQuantity={updateCartItemQuantity}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuDisplay;
