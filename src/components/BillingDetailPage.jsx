import React, { useContext } from 'react'
import { CartContext } from '../stores/cartContext'
import Bill from './Bill'

function BillingDetailPage() {

  const {cart, total} = useContext(CartContext)

  return (
    <div className='m-20'>
        <div className='flex justify-center gap-48'>
            <div>
                <div> 
                    <h1 className='text-xl font-semibold mb-5'>Billing Detail</h1>
                    <div className='flex flex-col'>
                        <span className='text-gray-400'>First Name</span>
                        <input type="text" className='bg-gray-100 p-2 rounded-sm outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-400'>Company Name</span>
                        <input type="text" className='bg-gray-100 p-2 rounded-sm outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-400'>Street Address</span>
                        <input type="text" className='bg-gray-100 p-2 rounded-sm outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-400'>Apartment, floor,etc. (optional)</span>
                        <input type="text" className='bg-gray-100 p-2 rounded-sm outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-400'>Town/City</span>
                        <input type="text" className='bg-gray-100 p-2 rounded-sm outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-400'>Phone Number</span>
                        <input type="text" className='bg-gray-100 p-2 rounded-sm outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-400'>Email Address</span>
                        <input type="text" className='bg-gray-100 p-2 rounded-sm outline-none' />
                    </div>
                </div>
                
                <div className='flex gap-4'>
                    <input className='bg-red-500 text-red-500'  type="checkbox" />
                    <p>Save this information for faster-check-out next time.</p>
                </div>
            </div>
            {/* ///////////////////////////////////////// */}
        <div>
                <div>
                    {cart.map((item)=>{
                        return <Bill key={item.id} item={item} />
                    })}
                </div>
                <div className='flex justify-between border-b-2 border-black py-2' >
            <p>Subtotal</p>
            <p>${parseFloat(total).toFixed(2)}</p>
           </div>
           <div className='flex justify-between border-b-2 border-black py-2 mb-2'>
            <p>Shipping:</p>
           <p>Free</p>
          </div>
          <div className='flex justify-between mb-2'>
            <p>Total</p>
            <p>{parseFloat(total).toFixed(2)}</p>
          </div>
         <div className='flex gap-5 items-center mb-2'>
            <input className='' type="radio" name="" id="" />
            <p>Bank</p>
          </div>
         <div className='flex gap-5 items-center'>
            <input className='' type="radio" name="" id="" />
            <p>Cash on delivery</p>
          </div>
          <div className='flex justify-between gap-5'>
           <input className='outline-none border-2 h-10 w-40 rounded-md border-black' type="text" name="" placeholder='Coupon Code' id="" />
           <button className='bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700'>Apply Coupon</button>
          </div>
         <button className='bg-red-600 text-white px-10 py-2 rounded-md hover:bg-red-700 my-4'>Place Order</button>
     </div>
        </div>
    </div>
  )
}

export default BillingDetailPage