import React, { useContext } from 'react'
import Rating from './Rating'
import LoadingBox from './LoadingBox'
import { Link } from 'react-router-dom'
import {FaCartPlus} from "react-icons/fa"; 
import { CartContext } from '../stores/cartContext';

function WishListProducts({item}) {


    const { wishList,addToCart, removeFromWishList } = useContext(CartContext)
  return (
    <div className='flex gap-10 overflow-x-auto'>
           { item?.length > 0 ?(
            item?.map(product => (
                    <div key={product.id} className='flex flex-col min-w-64'>
                        <div className='relative group transition duration-300'>
                            <div>

                             <div className='bg-gray-100 px-12 py-14 rounded-md w-full'>
                             <img className=' w-full h-28' src={product.image} alt={product.title} />
                             
                             </div>
                             <button className='flex items-center justify-center gap-2 bg-black w-full text-gray-100 py-2 rounded-b-md hover:bg-gray-900' onClick={()=>addToCart(product,product.id)} > 
                                <FaCartPlus/>
                                <span>Add to Cart</span>
                             </button>
                            </div>
                            <div className='absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-500'>
                                <Link onClick={()=>removeFromWishList(product.id)}>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="bg-white p-1 rounded-full size-6">
                                   <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                  </svg>

                                {/* <FaEye className='bg-white p-1 rounded-full' size={22}/> */}
                                </Link> 
                            </div>
                        </div>
                        <div>
                           <p>{product.title.split(' ').slice(0,3).join(' ')}</p> 
                           <div className='flex gap-2'>
                            <p className='text-red-500'>${product.price}</p>
                            <p className='text-gray-400 line-through'>$360</p>
                           </div>
                            {/* <Rating  rating={product.rating.rate} numReviews={product.rating.count} /> */}
                        </div>
                    </div>
                ))
        ):<LoadingBox/>
        }
    </div>
  )
}

export default WishListProducts