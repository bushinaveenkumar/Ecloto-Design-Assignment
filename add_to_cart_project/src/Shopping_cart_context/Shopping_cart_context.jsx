import React from 'react'
import { createContext, useState } from 'react'

export const store=createContext();

const Shopping_cart_context = ({ children }) => {
    const [CartItems, setCartItems]=useState([])
    const [totalAmount, setTotalAmount]=useState()

const handleOnClick=(product)=>{      
    setCartItems((prev) => {
        const itemExists = prev.find((item) => item.id === product.id);
        if (itemExists) {
          return prev.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...prev, { ...product, quantity: 1 }]; 
})
}

const getTotalAmount=(amount)=>{
    setTotalAmount(amount)    
}


    const contextValue={CartItems, setCartItems, handleOnClick, getTotalAmount, totalAmount};
  return (
    <store.Provider value={contextValue}>
        {children}
    </store.Provider>
  )
}

export default Shopping_cart_context