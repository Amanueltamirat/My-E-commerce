import React, { useContext, useState } from 'react'
import { CartContext } from '../stores/cartContext'
import Bill from './Bill'
import { useNavigate } from 'react-router-dom';

function BillingDetailPage({onSuccess}) {

const {clearCart} = useContext(CartContext)
 
 const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
   const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
     const [town, setTown] = useState("");
   const [errors, setErrors] = useState({});

  const {cart, total} = useContext(CartContext)

const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
     const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
              const data  ={
                  name,
                  email,
                  companyName
                }
                clearCart()
                navigate('/success')
                onSuccess((prev)=>!prev)
        } else {
            setErrors(validationErrors);
        }
    }

 const validate = () => {

        const newErrors = {};

         if (!name) {
            newErrors.name = 'Name is required';
        }
        if(!address){
            newErrors.address = 'Address is required';
        }
        if(!town){
            newErrors.town = 'Town is required';
        }
        if (!companyName) {
            newErrors.password = 'Company name is required';
        }
        // if(!phone){
        //     newErrors.phone = 'Phone is required';
        // }
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email format is invalid';
        }
        return newErrors;
    };


  return (
    <div className='m-20'>
        <div className='flex justify-center gap-48'>
            <div>
                <div> 
                    <h1 className='text-xl font-semibold mb-5'>Billing Detail</h1>
                    <div className='flex flex-col'>
                        <span className='text-gray-400'>First Name</span>
                        <input onChange={(e)=>setName(e.target.value)} type="text" className='bg-gray-100 p-2 rounded-sm outline-none' />
                         {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-400'>Company Name</span>
                        <input onChange={(e)=>setCompanyName(e.target.value)} type="text" className='bg-gray-100 p-2 rounded-sm outline-none' />
                         {errors.companyName && <span style={{ color: 'red' }}>{errors.companyName}</span>}
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-400'>Street Address</span>
                        <input onChange={(e)=>setAddress(e.target.value)} type="text" className='bg-gray-100 p-2 rounded-sm outline-none' />
                         {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-400'>Apartment, floor,etc. (optional)</span>
                        <input type="text" className='bg-gray-100 p-2 rounded-sm outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-400'>Town/City</span>
                        <input onChange={(e)=>setTown(e.target.value)} type="text" className='bg-gray-100 p-2 rounded-sm outline-none' />
                        {errors.town && <span style={{ color: 'red' }}>{errors.town}</span>}
                    </div>
                    {/* <div className='flex flex-col'>
                        <span onChange={(e)=>setPhone(e.target.value)} className='text-gray-400'>Phone Number</span>
                        <input type="number" className='bg-gray-100 p-2 rounded-sm outline-none' />
                        {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
                    </div> */}
                    <div className='flex flex-col'>
                        <span className='text-gray-400'>Email Address</span>
                        <input onChange={(e)=>setEmail(e.target.value)}  type="text" className='bg-gray-100 p-2 rounded-sm outline-none' />
                        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
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
         <button onClick={(e)=>{submitHandler(e)}} className='bg-red-600 text-white px-10 py-2 rounded-md hover:bg-red-700 my-4'>Place Order</button>
     </div>
        </div>
    </div>
  )
}

export default BillingDetailPage