import React from 'react'
import {FaHome, FaTwitter,FaInstagram,FaLinkedin, FaDollarSign, FaFileInvoiceDollar,FaShoppingBag,FaShoppingBasket} from "react-icons/fa";

function AboutPage() {
  return (
    <div className='m-20'>
        <div className='flex gap-10 items-center'>
            <div>
                <h1 className='text-3xl font-semibold mb-5'>Our Story</h1>
                <p className='mb-5 tracking-wide'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>
                <p className='tracking-wide'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
            <div className='-mr-20'>
                <img className='rounded-md' src="/images/two-females.jpg" alt="femalse" />
            </div>
        </div>
        <div className='mt-20 flex justify-between gap-10 mb-20'>
            <div className='w-1/4 flex flex-col items-center gap-2 p-4 rounded-md border-2 hover:bg-red-500 group'>
                <div className='bg-gray-400 p-2 rounded-full '>
                <FaHome className='group-hover:bg-white group-hover:text-black bg-black text-white size-14 p-2 rounded-full'/>
                </div>
                <p className='text-2xl font-semibold group-hover:text-white'>10.5k</p>
                <p className='group-hover:text-gray-200 tacking-wide'>Sallers activate our site</p>
            </div>
             <div className='w-1/4 flex flex-col items-center gap-2 p-4 rounded-md border-2 hover:bg-red-500  group'>
                <div className='bg-gray-400 p-2 rounded-full '>
                <FaDollarSign className='group-hover:bg-white group-hover:text-black bg-black text-white size-14 p-2 rounded-full'/>
                </div>
                <p className='text-2xl font-semibold group-hover:text-white'>33k</p>
                <p className='group-hover:text-gray-200 tacking-wide'>Monthly Product Sale</p>
            </div>

             <div className='w-1/4 flex flex-col items-center gap-2 p-4 rounded-md border-2 hover:bg-red-500  group'>
                <div className='bg-gray-400 p-2 rounded-full '>
                <FaShoppingBag className='group-hover:bg-white group-hover:text-black bg-black text-white size-14 p-2 rounded-full'/>
                </div>
                <p className='text-2xl font-semibold group-hover:text-white'>45.5k</p>
                <p className='group-hover:text-gray-200 tacking-wide'>Customer active in our site</p>
            </div>

             <div className='w-1/4 flex flex-col items-center gap-2 p-4 rounded-md border-2 hover:bg-red-500  group'>
                <div className='bg-gray-400 p-2 rounded-full '>
                <FaFileInvoiceDollar className='group-hover:bg-white group-hover:text-black bg-black text-white size-14 p-2 rounded-full'/>
                </div>
                <p className='text-2xl font-semibold group-hover:text-white'>25k</p>
                <p className='group-hover:text-gray-200 tacking-wide'>Annual gross sale in our site</p>
            </div>
            
        </div>
        <div className='flex gap-10'>
            <div className='w-1/3'>
                <div className='bg-gray-100 px-5 pt-5 mb-2 rounded-sm flex justify-center'>
                    <img className='h-80 w-fit' src="/images/founder.png" alt="founder" />
                </div>
                <h1 className='text-xl font-semibold'>Tom Cruise</h1>
                <p className='sm mb-2'>Founder & Chairman</p>
                <div className='flex gap-4'>
                    <FaTwitter/>
                    <FaInstagram/>
                    <FaLinkedin/>   
                </div>
            </div>
             <div className='w-1/3'>
                <div className='bg-gray-100 px-5 pt-5 mb-2 rounded-md flex justify-center'>
                    <img className='h-80 ' src="/images/manager.png" alt="founder" />
                </div>
                <h1 className='text-xl font-semibold'>Emma Watson</h1>
                <p className='sm mb-2'>Managing Director</p>
                <div className='flex gap-4'>
                    <FaTwitter/>
                    <FaInstagram/>
                    <FaLinkedin/>   
                </div>
            </div>
             <div className='w-1/3'>
                <div className='bg-gray-100 px-5 pt-5 mb-2 rounded-md flex justify-center'>
                    <img className='h-80' src="/images/designer.png" alt="founder" />
                </div>
                <h1 className='text-xl font-semibold'>Will Smith</h1>
                <p className='sm mb-2'>Product Designer</p>
                <div className='flex gap-4'>
                    <FaTwitter/>
                    <FaInstagram/>
                    <FaLinkedin/>   
                </div>
            </div>
        </div>

        <div className='flex justify-center gap-2 mt-10 mb-10'>
            <div className='w-2 h-2 rounded-full bg-gray-300 p-1 hover:bg-red-500 cursor-pointer'></div>
            <div className='w-2 h-2 rounded-full bg-gray-300 p-1 hover:bg-red-500 cursor-pointer'></div>
            <div className='w-2 h-2 rounded-full bg-gray-300 p-1 hover:bg-red-500 cursor-pointer'></div>
            <div className='w-2 h-2 rounded-full bg-gray-300 p-1 hover:bg-red-500 cursor-pointer'></div>
            <div className='w-2 h-2 rounded-full bg-gray-300 p-1 hover:bg-red-500 cursor-pointer'></div>
        </div>

        <div className='flex justify-center mt-20 gap-10'>
            <div className='flex flex-col items-center'>
                <div className='bg-gray-300 p-2 rounded-full'>
                     <i className="bg-black text-2xl text-white fas fa-thin fa-truck p-4 rounded-full"></i>
                </div>
                <p className='text-xl font-bold'>FREE AND FAST DELIVERY</p>
                <p className='text-sm'>Free delivery for all orders over $140</p>
            </div>
             <div className='flex flex-col items-center'>
                <div className='bg-gray-300 p-2 rounded-full'>
                     <i className="bg-black text-2xl text-white fas fa-light fa-headphones py-4 px-5 rounded-full"></i>
                </div>
                <p className='text-xl font-bold'>24/7 CUSTOMER SERVICE</p>
                <p className='text-sm'>Friendly 24/7 customer support</p>
            </div>
             <div className='flex flex-col items-center'>
                <div className='bg-gray-300 p-2 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  stroke="currentColor" className= " text-white bg-black size-14 rounded-full p-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>


                </div>
                <p className='text-xl font-bold'>MONEY BACK GUARANTEE</p>
                <p className='text-sm'>We reurn money within 30 days</p>
            </div>
         </div>
    </div>
  )
}

export default AboutPage