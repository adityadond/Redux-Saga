import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon from react-icons/fa

function Header() {
  const cartItemsCount = useSelector(
    (state) => state.cartReducer.cartItems.length
  );

  return (
    <div className="header">
      <div>
        <Link to="/">
          <h1>Home</h1>
        </Link>
      </div>
      <div>
        <Link to="/counter">
          <h1>Counter</h1>
        </Link>
      </div>
      <div>
        <Link to="/cart" className="cart-link">
          <h1>Cart</h1>
          <FaShoppingCart className="cart-icon" />
          <span className="cart-count">{cartItemsCount}</span>
        </Link>
      </div>
      <div>
        <Link to="/signup">
          <h1>SignUp</h1>
        </Link>
      </div>
      <div>
        <Link to="/checkout">
          <h1>Checkout</h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;
