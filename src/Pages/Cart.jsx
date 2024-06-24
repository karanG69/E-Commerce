import React from 'react'
import './CSS/Cart.css'
import { CartItems } from '../Components/CartItems/CartItems'

export const Cart = () => {
  return (
    <div className='cart'>
      <CartItems/>
    </div>
  )
}

