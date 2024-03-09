import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div>
      <nav className='container'>
        
          <div className='logo'><img src="public\images\Adidas-logo.webp" alt="Nike" style={{width:150}}/></div>
        
        <ul>
        <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Store">Store</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/About">About</Link></li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
}

export default Navigation;
