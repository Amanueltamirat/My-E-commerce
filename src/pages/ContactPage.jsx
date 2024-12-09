import React from 'react'
import {FaPhone, FaMailBulk, FaMailchimp} from "react-icons/fa";


function ContactPage() {
  return (
    <div className='flex justify-center gap-10 m-20'>
        <div className='shadow-md p-10'>
          <div className=''>
            <div className='flex gap-2 items-center mb-5'>
                <FaPhone className='text-white p-4 bg-red-500 text-6xl rotate-90 rounded-full'/>
                <p className='text-xl font-semibold'>Call To Us</p>
            </div>
            <p className='py-2'>We are available 24/7, 7 days a week</p>
            <p className='py-2 mb-10 border-b-2 border-black pb-4'><span>Phone:</span><span>+39759387589</span></p>
          </div>

          <div>
            <div>
            <div className='flex gap-2 items-center mb-5'>
                <FaMailBulk className='text-white p-4 bg-red-500 text-6xl  rounded-full'/>
                <p className='text-xl font-semibold'>Write To Us</p>
            </div>
            <p className='py-2'>Fill our form and we will contact <br />you within 24 hours.</p>
            <p className='py-2'><span>Emails:</span><span>customer@exclusive.com</span></p>
            <p className='py-2'><span>Emails:</span><span>support@exclusive.com</span></p>
          </div>
          </div>

        </div>
        <div className='shadow-md p-10 '>
            <div className='flex gap-5 mb-5'>
                <input className='bg-gray-200 outline-none p-2 rounded-sm' type="text" placeholder='Your Name' />
                <input className='bg-gray-200 outline-none p-2 rounded-sm'  type="text" placeholder='Your Email' />
                <input className='bg-gray-200 outline-none p-2 rounded-sm'  type="text" placeholder='Your Phone' />
            </div>
            <div className='mb-5'>
                <input className='bg-gray-200 outline-none w-full h-60 rounded-md p-2 '  type="text" placeholder='Your Message' />
            </div>
            <div className='flex justify-end'>
            <button className=' text-white bg-red-700 rounded-md py-2 px-5'>Send Message</button>
            </div>
        </div>
    </div>
  )
}

export default ContactPage