import React from 'react'
import "./style.css"
import CartWidget from '../CarWidget/CartWidget'

export default function Navbar() {
  return (
    <nav>
        <h3>CompuShop</h3>
        <div>
            <button>Monitores</button>
            <button>Teclados</button>
            <button>Mouse</button>
        </div>
        <CartWidget/>
    </nav>
  )
}
