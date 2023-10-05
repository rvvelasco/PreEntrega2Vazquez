import React from 'react'
import cart from "./Assets/cart.svg"
import "./style.css"

export default function CartWidget() {
  return (
    <div>
        <img src={cart} alt='cart-widget'/>
        0
    </div>
  )
}
