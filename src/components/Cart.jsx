import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {FaSortDown} from "react-icons/fa";
import {FaSortUp} from "react-icons/fa";
import { CartContext } from '../stores/cartContext';

function Cart({item}) {
    const {id, image, amount, price, title} = item
    const {removeItem, increaseQuantity, decreaseQuantity} = useContext(CartContext)

    console.log(item)
  return (

    <div className='flex justify-between'>
        <Link  className='flex gap-2'>
            
            <div className='relative group'>
            <img className='max-w-[40px]' src={image} alt={title} />
            <svg onClick={()=>removeItem(id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="bg-red-600 text-white rounded-full size-4 absolute -top-1 left-1 opacity-0 group-hover:opacity-100 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </div>
            <Link className='' to={`/products/${id}`}>{title.split(' ').slice(0,2).join(' ')}</Link>
        </Link>
        <p>${price}</p>
        <div className='flex gap-1 items-center  border-2 py-2 px-6 rounded-md'>
        <p>{amount}</p>
        <div>
            <FaSortUp size={10} onClick={()=>increaseQuantity(id)}/>
            <FaSortDown size={10} onClick={()=>decreaseQuantity(id)}/>
        </div>
        </div>
        <p>{price*amount}</p>
    </div>
   
  )
}

export default Cart