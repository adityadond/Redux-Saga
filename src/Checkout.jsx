import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal"; // Import your modal component
import "./CheckOut.css";
import { clearCart } from "./action";

function Checkout() {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  const handleCloseModal = () => {
    setOrderPlaced(false);
    dispatch(clearCart());
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            <h3>Cart Items</h3>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div className="item-details">
                    <div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="item-image"
                      />
                    </div>
                    <div className="item-info">
                      <h4>{item.title}</h4>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${item.price}</p>
                      <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="subtotal">
            <h3>Subtotal</h3>
            <p>
              Total Price: $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
          </div>
          <button className="place-order-button" onClick={handlePlaceOrder}>
            Place Order
          </button>
          <Modal
            data-testid="modal"
            show={orderPlaced}
            onClose={handleCloseModal}
          >
            <p>Order placed successfully!</p>
          </Modal>
        </>
      )}
    </div>
  );
}

export default Checkout;
