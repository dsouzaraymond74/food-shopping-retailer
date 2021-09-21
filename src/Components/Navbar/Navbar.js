import React from 'react';
import "./Navbar.css";


const Navbar = (props) => {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>GROCERY SHOPPING CART</h1>
          <div className="links">
          <a href="/home">HOME</a>
          <a href="/products">PRODUCTS</a>
          <a href="/contact">CONTACT</a>
          <a href="/enquiry">ENQUIRY</a>
        </div>
        </a>  
      </div>
      <div>
        <a href="#/cart">
          Cart{' '} 
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}
export default Navbar;