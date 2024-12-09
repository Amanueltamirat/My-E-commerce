import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-black text-white mb-0'>
        <div className='flex justify-between p-20 '>
            <div>
                <h1 className='text-lg font-semibold py-2'>Exclusive</h1>
                <p className='text-gray-100 pb-2'>Subscribe</p>
                <p className='text-sm text-gray-300 pb-2'>Get 10% off your first order</p>
                <div>
                <input className='bg-transparent border-2 p-2 rounded-md border-gray-300' type="text" name="" id="" placeholder='Enter your email' />

                </div>
            </div>


            <div>
                <h1 className='text-lg font-semibold py-2'>Support</h1>
                <p className='text-sm text-gray-300 pb-2'>111 Bijoy sarani, Dhaka, <br />DH 1515, Bangladish</p>
                <p className='text-sm text-gray-300 pb-2'>exclusive@gmail.com</p>
                <p className='text-sm text-gray-300 pb-2'>+8888-88888-88888</p>
            </div>

            <div>
                <h1 className='text-lg font-semibold py-2'>Account</h1>
                <p className='text-sm text-gray-300 pb-2'>My Account</p>
                <p className='text-sm text-gray-300 pb-2'>Login / Register</p>
                <p className='text-sm text-gray-300 pb-2'>Cart</p>
                <p className='text-sm text-gray-300 pb-2'>Wishlist</p>
                <p className='text-sm text-gray-300 pb-2'>Shop</p>
            </div>

             <div>
                <h1 className='text-lg font-semibold py-2'>Quick Link</h1>
                <p className='text-sm text-gray-300 pb-2'>Privecy Policy</p>
                <p className='text-sm text-gray-300 pb-2'>Terms of Use</p>
                <p className='text-sm text-gray-300 pb-2'>FAQ</p>
                <p className='text-sm text-gray-300 pb-2'>Contact</p>
            </div>

             <div>
                <h1 className='text-lg font-semibold py-2'>Download App</h1>
                <p className='text-sm text-gray-300 pb-2'>Save $3 with App New User Only</p>
                 <div className='flex items-start gap-5'>
                    <div>
                    <img className='w-fit h-20' src="/images/QRcode.jpeg" alt="QR code" />
                    </div>
                    <div className='flex flex-col items-start mt-2' >
                        <img className='w-20 h-24 -mt-9 -ml-2' src="/images/google.png" alt="google" />
                        <img className='w-20 h-20 -mt-10' src="/images/app-store.png" alt="app-store" />
                    </div>
                 </div>
                 <div className='flex gap-10 justify-center'>
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaInstagram/>
                    <FaLinkedin/>
                 </div>
            </div>

        </div>
        <div className='flex justify-center pb-10 text-gray-600'>
            <p>&copy; Copyright Rimel 2024 All right reserved</p>
        </div>
    </div>
  )
}

export default Footer