import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon from react-icons/fa
import { useAuth0 } from "@auth0/auth0-react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Drawer from "./Drawer";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const cartItemsCount = useSelector(
    (state) => state.cartReducer.cartItems.length
  );
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  console.log(isAuthenticated);

  const opendrawerHandler = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="header">
      <div>
        <DehazeIcon onClick={opendrawerHandler} />
      </div>
      {isDrawerOpen && (
        <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      )}
      <div>
        <Link to="/">
          <h3>Home</h3>
        </Link>
      </div>
      <div>
        <Link to="/class-components">
          <h3>Class Component</h3>
        </Link>
      </div>

      <div>
        <Link to="/counter">
          <h3>Counter</h3>
        </Link>
      </div>
      <div>
        <Link to="/cart" className="cart-link">
          <h3>Cart</h3>
          <FaShoppingCart className="cart-icon" />
          <span className="cart-count">{cartItemsCount}</span>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <h3>Login</h3>
        </Link>
      </div>
      <div className="accountList">
        <Link to="/accountList">
          {isAuthenticated ? <span>Hi {user.name}</span> : ""}
          <h3>Accounts & List</h3>
        </Link>
      </div>
      <div>
        <Link to="/checkout">
          <h3>Checkout</h3>
        </Link>
      </div>
      {isAuthenticated ? (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </div>
  );
}

export default Header;
