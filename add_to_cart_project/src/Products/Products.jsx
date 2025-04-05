import React from 'react'
import './Products.css'
import { store } from '../Shopping_cart_context/Shopping_cart_context'
import { useContext } from 'react'

const Products = () => {    
    const {CartItems, handleOnClick}=useContext(store)    

    const products = [
        { id: 1, name: "Laptop", price: 500, quantity: 0 },
        { id: 2, name: "Smartphone", price: 300, quantity: 0 },
        { id: 3, name: "Headphones", price: 100, quantity: 0 },
        { id: 4, name: "Smartwatch", price: 150, quantity: 0 },
      ];

    return (
        <div className="container">
          <h2 className="title">Products</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button className="add-to-cart" onClick={()=>handleOnClick(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Products