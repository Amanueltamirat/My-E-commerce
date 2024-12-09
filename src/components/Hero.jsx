import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight, FaAngleRight} from "react-icons/fa";



function Hero() {
  return (
    <div className='flex justify-between px-20  gap-10'>
        <div className='flex flex-col min-w-60 border-r-2 pt-10 mb-10 pr-5 gap-1 font-normal '>
            <div className='flex justify-between cursor-pointer hover:bg-gray-200 p-1' ><span>Woman's Fashion</span> <FaAngleRight/></div>
            <div className='flex justify-between cursor-pointer hover:bg-gray-200 p-1'><span>Man's Fashion</span> <FaAngleRight/></div>
            <Link className='cursor-pointer hover:bg-gray-200 p-1'>Electronics</Link>
            <Link className='cursor-pointer hover:bg-gray-200 p-1'>Home & Lifestyle</Link>
            <Link className='cursor-pointer hover:bg-gray-200 p-1'>Medicine</Link>
            <Link className='cursor-pointer hover:bg-gray-200 p-1'>Sports & Outdoor</Link>
            <Link className='cursor-pointer hover:bg-gray-200 p-1'>Baby's & Toys</Link>
            <Link className='cursor-pointer hover:bg-gray-200 p-1'>Groceries & Pets</Link>
            <Link className='cursor-pointer hover:bg-gray-200 p-1'>Health & Beauty</Link>
        </div>
        <div className='bg-black text-white my-10 w-full'>
        <div className='flex justify-between'>
            <div className='flex flex-col gap-2 p-10 pl-20'>
                <div className='flex items-center gap-5'>
                    <img src='/images/apple.png' alt="apple" className='w-10' />
                    <p className='text-gray-300'>iphone 14 series</p>
                </div>
                <p className='text-4xl'>Up to 10%</p>
                <p  className='text-4xl'>off Voucher</p>
                <div className='flex gap-2 items-center py-5'>
                    <button className='text-gray-400 border-b-2 border-gray-400'>shop now </button>
                    <FaArrowRight color='gray' size={14}/>
                </div>
            </div>
            <img src="/images/phone.jpg" alt="phone" className='py-5 w-1/2' />
          </div>
           <div className='flex justify-center gap-2 -mt-14'>
            <div className='w-2 h-2 rounded-full bg-gray-300 p-1 hover:bg-red-500 cursor-pointer'></div>
            <div className='w-2 h-2 rounded-full bg-gray-300 p-1 hover:bg-red-500 cursor-pointer'></div>
            <div className='w-2 h-2 rounded-full bg-gray-300 p-1 hover:bg-red-500 cursor-pointer'></div>
            <div className='w-2 h-2 rounded-full bg-gray-300 p-1 hover:bg-red-500 cursor-pointer'></div>
            <div className='w-2 h-2 rounded-full bg-gray-300 p-1 hover:bg-red-500 cursor-pointer'></div>
        </div>
        </div>
    </div>
  )
}

export default Hero