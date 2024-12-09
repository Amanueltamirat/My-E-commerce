import React, { useContext } from 'react'
import { CartContext } from '../stores/cartContext'
import { FaCartPlus, FaEye } from 'react-icons/fa'
import LoadingBox from './LoadingBox'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Products({item}) {

    const { addToCart } = useContext(CartContext)
  return (
     <div className='flex gap-10'>
    
                    <div key={item.id} className='flex flex-col w-64'>
                        <div className='relative group transition duration-300'>
                            <div>

                             <div className='bg-gray-100 px-12 py-14 rounded-md w-full'>
                             <img className=' w-full h-28 hover:scale-110 transition duration-300' src={item.image} alt={item.title} />
                             
                             </div>
                             <button className='flex items-center justify-center gap-2 bg-black w-full text-gray-100 py-2 rounded-b-md hover:bg-gray-900' onClick={()=>addToCart(item,item.id)} > 
                                <FaCartPlus/>
                                <span>Add to Cart</span>
                             </button>
                            </div>
                            <div className='absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-500'>
                                <Link className='bg-white p-2 rounded-full' to={`/products/${item.id}`}>
                                   <FaEye size={20}/>
                                </Link> 
                            </div>
                        </div>
                        <div>
                           <p>{item.title.split(' ').slice(0,3).join(' ')}</p> 
                           <div className='flex gap-2'>
                            <p className='text-red-500'>${item.price}</p>
                            <p className='text-gray-400 line-through'>$360</p>
                           </div>
                            <Rating  rating={item.rating.rate} numReviews={item.rating.count} />
                        </div>
                    </div>
      
    </div>
  )
}

export default Products