import React, { useContext } from 'react'
import { CartContext } from '../stores/cartContext'
import Cart from './Cart'
import { Link } from 'react-router-dom'

function CartItem() {

const {cart, total} = useContext(CartContext)
console.log(cart)
  return (
<div className='m-20'>
        <div className='flex justify-center gap-72 mb-10'>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
        </div>
        <div className='flex justify-between flex-col gap-10'>

        {
        cart.map((item)=>{
        return   <Cart key={item.id} item={item} />
        })
        }
    </div>
    <div className='flex justify-between my-5'>
      <Link to={'/'} className='border-2 py-2 px-4 rounded-md'> Return to Shop</Link>
      <button className='border-2 py-2 px-4 rounded-md'>Update Cart</button>
    </div>

    <div className='flex justify-between items-start mt-10'>
      <div className='flex gap-5 items-center'>
        <input className='outline-none border-2 h-10 w-60 rounded-md border-black' type="text" name="" placeholder='Coupon Code' id="" />
        <button className='bg-red-600 text-white px-10 py-2 rounded-md hover:bg-red-700'>Apply Coupon</button>
      </div>

      <div className='w-1/2 border-2 p-5 rounded-md border-black'>
        <h1 className='font-semibold mb-2'>Cart Total</h1>
        <div className='flex justify-between border-b-2 border-black py-2' >
          <p>Subtotal</p>
          <p>${parseFloat(total).toFixed(2)}</p>
        </div>
         <div className='flex justify-between border-b-2 border-black py-2 mb-2'>
          <p>Shipping:</p>
          <p>Free</p>
        </div>
         <div className='flex justify-between '>
          <p>Total</p>
          <p>{parseFloat(total).toFixed(2)}</p>
        </div>
        <div className='flex justify-center my-5 '>
        <Link className='bg-red-600 text-white px-10 py-2 rounded-md hover:bg-red-700 ' to={'/checkout'}>Process to checkout</Link>
        </div>
      </div>
    </div>
   </div>
  )
}

export default CartItem