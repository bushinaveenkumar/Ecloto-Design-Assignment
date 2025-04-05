import React from 'react'
import Products from '../Products/Products'
import Cart_Summary from '../Cart_Summary/Cart_Summary'
import Cart_items from '../Cart_Items/Cart_items'
import Shopping_cart_context from '../Shopping_cart_context/Shopping_cart_context'

const Shopping_cart_app = () => {
  return (
    <Shopping_cart_context>
        <Products />
        <Cart_Summary />
        <Cart_items />
    </Shopping_cart_context>
  )
}

export default Shopping_cart_app