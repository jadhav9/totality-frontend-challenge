import React, { useContext, useState } from 'react';
import Cart from '../components/Cart';
import { CartContext } from '../CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  const [showPayment, setShowPayment] = useState(false);

  const handleCheckout = () => {
    setShowPayment(true);
  };

  if (cartItems.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <Cart />
      <button className="btn mt-4" onClick={handleCheckout}>Proceed to Payment</button>

      {showPayment && (
        <div className="payment-section mt-4">
          <h3>Payment Information</h3>
          <form>
            <div className="form-group">
              <label htmlFor="cardNumber">Credit Card Number</label>
              <input type="text" className="form-control" id="cardNumber" placeholder="Enter your card number" />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="cvv">CVV</label>
              <input type="text" className="form-control" id="cvv" placeholder="CVV" />
            </div>
            <button type="submit" className="btn mt-4">Pay Now</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CartPage;
