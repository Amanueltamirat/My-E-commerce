import React, { useContext, useEffect, useState } from 'react'
import Rating from './Rating'
import LoadingBox from './LoadingBox'
import { Link } from 'react-router-dom'
import {FaCartPlus, FaEye} from "react-icons/fa"; 
import { CartContext } from '../stores/cartContext';
import { Cart } from '../stores/config';

function JustForYou({products,count}) {

 const [randomProducts, setRandomProducts] = useState([]);

    const {addToCart } = useContext(CartContext)
      useEffect(() => {
        const selectedProducts = getRandomProducts(products, count);
        setRandomProducts(selectedProducts);
    }, [products]);


    const getRandomProducts =(products, count) => {
    return   products.slice(0, count);
};

  return (
    <div >
        <div className='flex items-center gap-5 my-10'>
            <div className='bg-red-600 w-6 h-14 rounded-md'></div>
            <h1 className='text-xl font-semibold'>Just For You</h1>
        </div>
        <div className='flex gap-10 overflow-x-auto'>
           { randomProducts?.length > 0 ?(
            randomProducts?.map(product => (
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
                            <div className='absolute top-2 right-2 flex flex-col gap-2 '>
                                <Link to={`/products/${product.id}`} >
                                  
                                <FaEye className='bg-white p-1 rounded-full' size={22}/>
                                </Link> 
                            </div>
                        </div>
                        <div>
                           <p>{product.title.split(' ').slice(0,3).join(' ')}</p> 
                           <div className='flex gap-2'>
                            <p className='text-red-500'>${product.price}</p>
                            <p className='text-gray-400 line-through'>$360</p>
                           </div>
                            <Rating  rating={product.rating.rate} numReviews={product.rating.count} />
                        </div>
                    </div>
                ))
        ):<LoadingBox/>
        }
        </div>
    </div>
  )
}

export default JustForYou