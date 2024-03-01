import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "./action";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./Cart.css"; // Import CSS file for styling

function Cart() {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const dispatch = useDispatch();
  const history = useNavigate(); // Initialize useHistory hook

  const handleRemoveFromCart = (id) => {
    dispatch(removeCart(id));
  };

  const handleProceedToCheckout = () => {
    history("/checkout"); // Navigate to checkout page
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div className="item-details">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="item-image"
                    />

                    <div className="item-info">
                      <h3>{item.title}</h3>
                      <p>{item.category}</p>
                      <p>{item.description}</p>
                      <p>${item.price}</p>
                      <span className="qty_button">
                        Qty:<Dropdown item={item}></Dropdown>
                      </span>
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        data-testid={`remove-button-${item.id}`}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="cart-summary">
            <p>Total Items: {cartItems.length}</p>
            <p data-testid="price">
              Total Price: $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
            <button onClick={handleProceedToCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
