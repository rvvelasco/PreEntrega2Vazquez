import React from 'react'
import cart from "./Assets/cart.svg"
import "./CartWidget.css"

export default function CartWidget() {
  return (
    <div id='carrito'>
        <img src={cart} alt='cart-widget'/><p className='indicador'>0</p>
    </div>
  )
}
