import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Cart } from '../stores/config'
import Rating from '../components/Rating.jsx'
import {FaPlus, FaMinus, FaHeart} from 'react-icons/fa'
import { CartContext } from '../stores/cartContext'
import RelatedItems from '../components/RelatedItems.jsx'

function ProductDetail() {
    const {id} = useParams()
    const {allProducts } = useContext(Cart)
const {cart} = useContext(CartContext)
    const {increaseQuantity, addToCart ,decreaseQuantity} = useContext(CartContext)

  const product = allProducts.find((item)=>{
    return item.id === parseInt(id)
  })
  
  console.log(product)

 const productAmount = cart?.find((item)=>{
  return item?.id === parseInt(id)
 })

 console.log(productAmount)

  return (
    <div className='m-20'>
      <div className='flex gap-10 items-center'>
      <div className='flex flex-col justify-between gap-5'>
        <img className='rounded-md w-60 h-24 bg-gray-100 p-4' src={product?.image} alt={product?.title} />
        <img className='rounded-md w-24 h-24 bg-gray-100 p-4 rotate-90' src={product?.image} alt={product?.title} />
        <img className='rounded-md w-24 h-24 bg-gray-100 p-4 rotate-180' src={product?.image} alt={product?.title} />
        <img className='rounded-md w-24 h-24 bg-gray-100 p-4 -rotate-90' src={product?.image} alt={product?.title} />
        
      </div>
      <div className='flex justify-between gap-10'>

          <div className='w-1/2'>
              <img className='rounded-md bg-gray-100 p-4 w-full' src={product?.image} alt={product?.title} />
          </div>
          <div className='w-1/2'>
             <h1 className='text-xl font-semibold mb-2'>{product?.title.split(' ').slice(0,4).join(' ')}</h1>
             <p className='text-sm mb-2 flex gap-2'> <Rating rating={product?.rating.rate} numReviews={product?.rating.count} /> 
               <span> | </span>
               <span className='text-green-500'>In Stock</span>
             </p>
             <p className='text-2xl mb-2'>${product?.price}</p>
             <p className='mb-2 text-sm border-b-2 pb-5'>{product?.description}</p>
             <div className='flex items-center gap-2 mb-5'>
                <p className='text-xl'>Colors:</p>
                <div className='flex gap-2'>
                  <div className='w-4 h-4 rounded-full bg-blue-400 border-2 border-gray-700'></div>
                 <div className='w-4 h-4 rounded-full bg-red-400'></div>
                </div>
             </div>
             <div className='flex items-center gap-2 mb-5'>
               <p className='text-xl'>Size:</p>
               <div className='flex gap-2'>
                <span className='border-2  flex items-center w-10 justify-center rounded-md hover:text-white hover:bg-red-500'>XS</span>
                <span className='border-2  flex items-center w-10 justify-center rounded-md hover:text-white hover:bg-red-500'>S</span>
                <span className='border-2  flex items-center w-10 justify-center rounded-md hover:text-white hover:bg-red-500'>M</span>
                <span className='border-2  flex items-center w-10 justify-center rounded-md hover:text-white hover:bg-red-500'>L</span>
                <span className='border-2  flex items-center w-10 justify-center rounded-md hover:text-white hover:bg-red-500'>XL</span>
               </div>
             </div>
             <div className='flex items-center justify-between mb-5'>
                <div className='flex'>
                  <FaMinus className='w-10 p-2 flex justify-center cursor-pointer border-l-2 border-t-2 border-b-2 h-10 hover:text-white hover:bg-red-500' onClick={()=>decreaseQuantity(productAmount?.id ? productAmount.id: id)}/>
                  <p className='border-2 cursor-pointer w-20 flex justify-center items-center hover:text-white hover:bg-red-500'>{ productAmount ? productAmount?.amount : 0 }</p>
                  <FaPlus className='p-2 w-10 h-10 flex  justify-center border-r-2 border-t-2 border-b-2 cursor-pointer  hover:text-white hover:bg-red-500' onClick={()=>{
                    if(productAmount){
                      increaseQuantity(productAmount?.id)
                    } else{
                      addToCart(product,id)
                    }
                  }}/>
                </div>
                <Link className='w-60 bg-red-500 flex justify-center items-center h-10 text-white rounded-md' to={'/cart'}>Buy Now</Link>
                <FaHeart className='border-2 p-2 text-5xl rounded-md'/>
             </div>

             <div>
               <div className='border-2 flex gap-5 p-4 items-center rounded-t-md'>
                 <i className=" text-xl text-black fas fa-thin fa-truck"></i>
                 <div>
                  <h1>Free Delivery</h1>
                  <p>Enter your postal code for Delivery Available</p>
                 </div>
               </div>

                 <div className='border-2 flex gap-5 p-4 items-center rounded-b-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                 <div>
                  <h1>Return Delivery</h1>
                  <p>Free 30 days Delivery Returns <span>Details</span></p>
                 </div>
               </div>
             </div>
          </div>
        

      </div>
      </div>
    <div>
          <RelatedItems category={product?.category}/>
        </div>
    </div>
  )
}

export default ProductDetail