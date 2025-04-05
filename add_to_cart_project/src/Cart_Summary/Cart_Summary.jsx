import React from 'react'
import './Cart_Summary.css'
import { useContext } from 'react';
import { store } from '../Shopping_cart_context/Shopping_cart_context';

const Cart_Summary = () => {
  const {totalAmount}=useContext(store)
  const requiredAmount = 1000;
  const remainingAmount = requiredAmount - totalAmount;
  const progress = Math.min((totalAmount / requiredAmount) * 100, 100);
 
  
  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <div className="summary-box">
        <div className="subtotal">
          <span>Subtotal:</span>
          <span className="amount">₹{totalAmount}</span>
        </div>
        <hr />
        {totalAmount < requiredAmount ? (
          <div className="gift-message">
            Add <strong>₹{remainingAmount}</strong> more to get a <strong>FREE Wireless Mouse!</strong>
          </div>
        ) : (
          <div className="gift-earned">🎉 You’ve earned a FREE Wireless Mouse!</div>
        )}
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Cart_Summary;

