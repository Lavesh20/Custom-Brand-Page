import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav className='container'>
        
          <div className='logo'><img src="public\images\brand_logo.png" alt="Nike" /></div>
        
        <ul>
          <li><a href="/Home">Home</a></li>
          <li><a href="/Store">Store</a></li>
          <li><a href="/Contact">Contact</a></li>
          <li><a href="About">About</a></li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
}

export default Navigation;
