import React from 'react'
import './Cart_Items.css'
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { store } from '../Shopping_cart_context/Shopping_cart_context';

  const initialCart = [
    { id: 1, name: "Laptop", price: 500, quantity: 2 },
    { id: 2, name: "Smartphone", price: 300, quantity: 1 },
  ];
  
  const freeGift = { id: 0, name: "Wireless Mouse", price: 0, quantity: 1, isGift: true };
  
  
  
  const Cart_items = () => {    
    const {getTotalAmount, CartItems}=useContext(store)
    console.log(CartItems)
    const [cart, setCart] = useState(CartItems && CartItems.length ? CartItems : initialCart);
    
    // Calculate total cart amount
    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        
    // Manage free gift logic
    useEffect(() => {
      setCart((prevCart) => {
        const hasGift = prevCart.some((item) => item.isGift);
        if (totalAmount > 1000 && !hasGift) {
          return [...prevCart, freeGift]; // Add gift if total > 1000
        } else if (totalAmount <= 1000 && hasGift) {
          return prevCart.filter((item) => !item.isGift); // Remove gift if total <= 1000
        }
        return prevCart;
      });
      getTotalAmount(totalAmount);
    }, [totalAmount]);
  
    const increaseQuantity = (id) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    };
  
    const decreaseQuantity = (id) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ).filter((item) => item.quantity > 0) // Prevents items with zero quantity
      );
    };
  
    return (
      <div className="cart-container">
        <h2 className="cart-title">Cart Items</h2>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>                  
                  ₹{item.price} × {item.quantity} =₹{item.price * item.quantity}
                </p>
              </div>
              <div className="cart-actions">
                {!item.isGift ? (
                  <>
                    <button
                      className="btn decrease"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      –
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="btn increase"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </>
                ) : (
                  <span className="gift-badge">FREE GIFT</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <h3 className="total-amount">Total: ₹{totalAmount}</h3>        
      </div>

    
    );}

export default Cart_items