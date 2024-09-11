import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, BrowserRouter } from 'react-router-dom';

const Home = () => <h2>Home Page</h2>;
const Store = () => <h2>Store Page</h2>;
const Contact = () => <h2>Contact Page</h2>;
const About = () => <h2>About Page</h2>;

const Navigation = () => {
  return (
   
      <nav className='container'>
        <div className='logo'>
          <img src="public/images/Adidas-logo.webp" alt="Nike" style={{ width: 150 }} />
        </div>
        <ul>

          <li><Link to="/home">Home</Link></li>
          <li><Link to="/store">Store</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <button>Login</button>
      </nav>
      
     
  );
}

export default Navigation;
