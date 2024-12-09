import React, { useContext, useEffect, useState } from 'react'
import LoadingBox from './LoadingBox'
import Rating from './Rating'
import { FaEye, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../stores/cartContext'

function ProductByCategory({selectedCategory,count}) {
    // console.log(selectedCategory)

 const [randomProducts, setRandomProducts] = useState([]);
    const {addToCart } = useContext(CartContext)

  useEffect(() => {
        const selectedProducts = getRandomProducts(selectedCategory, count);
        setRandomProducts(selectedProducts);
    //    console.log(randomProducts)
    }, [selectedCategory]);

      const getRandomProducts =(products, count) => {
   
    return   products?.slice(0, count);
};

  return (
     <div className='flex  justify-between mt-10'>
        { randomProducts?.length > 0 ?(
            randomProducts?.map(product => (
                    <div key={product.id} className='flex flex-col w-64'>
                        <div className='relative group transition duration-300'>
                            <div className='bg-gray-100 px-12 py-14 rounded-md w-full'>
                            <img className=' w-full h-28' src={product.image} alt={product.title} />
                            </div>
                            <div className='absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-500'>
                                <FaHeart onClick={()=>addToCart(product,product.id)} className='bg-white p-1 rounded-full cursor-pointer' size={22}/>
                                <Link to={`/products/${product.id}`}><FaEye className='bg-white p-1 rounded-full' size={22}/></Link> 
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
  )
}

export default ProductByCategory