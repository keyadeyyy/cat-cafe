import React from 'react';
import menu from './menu.jpg'
import './Home.css';

const Menu = () => {
  return (
    <div className='menu-container'>
      <div className='menu-header'>
      <h1>Café Menu</h1>
      </div>
      
      <p>Check out our delicious treats and beverages!</p>
      <img src={menu} alt = "menu" className='menu-image'/>
    </div>
  );
};

export default Menu;
