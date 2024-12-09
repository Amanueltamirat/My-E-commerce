import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../stores/cartContext';
import { useNavigate } from 'react-router-dom';

function MyAccount() {


      const { state, dispatch: ctxDispatch } = useContext(CartContext);
  const { userInfo } = state

  useEffect(()=>{
    console.log(userInfo)
  },[])


 const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

   const submitHandler = async (e) => {
    e.preventDefault();
     try {
      const data  ={
        name,
        email,
        password
      }
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      console.log(data);
    //   navigate( "/");
    } catch (err) {
      console.log(err)
    }
    }
  
    useEffect(() => {
    // if (userInfo) {
    //   navigate('/');
    // }
  }, [userInfo, navigate]);



  return (

    <div className='m-20 flex justify-center gap-10'>
        <div>
            <div>
                <h1 className='font-semibold my-2'>Manage My Account</h1>
                <div className='mx-5'>
                  <p className='text-gray-600 hover:text-red-500 cursor-pointer'>My Profile</p>
                  <p className='text-gray-600 hover:text-red-500 cursor-pointer'>Address Book</p>
                  <p className='text-gray-600 hover:text-red-500 cursor-pointer'>My Payment Options </p>
                </div>
            </div>
            <div>
                <h1 className='font-semibold my-2'>My Orders</h1>
                <div className='mx-5'>
                  <p className='text-gray-600 hover:text-red-500 cursor-pointer'>My Returns</p>
                  <p className='text-gray-600 hover:text-red-500 cursor-pointer'>My Cancellations</p>
                </div>
            </div>
            <div>
                <h1 className='font-semibold my-2'>Mywishlist</h1>
            </div>
        </div>
        <div>
            <h1 className='text-xl text-red-500 font-semibold my-2'>Edit Your Profile</h1>
            <div className='flex justify-between gap-5 my-5'>
                <div className='w-1/2 my-4'>
                    <div >
                        <p className='font-semibold tracking-wide mb-2'>First Name</p>
                        <input className='mb-2 outline-none bg-gray-200 w-full p-2 rounded-sm'  onChange={(e) => setName(e.target.value)}  type="text" placeholder='First Name' />
                    </div>
                     <div>
                        <p className='font-semibold tracking-wide mb-2'>Last Name</p>
                        <input className='mb-2 outline-none bg-gray-200 w-full p-2 rounded-sm' type="text"  placeholder='Last Name' />
                    </div>
                </div>
                <div className='w-1/2 my-4'>
                     <div>
                        <p className='mb-2 font-semibold tracking-wide'>Email</p>
                        <input className='mb-2 outline-none bg-gray-200 w-full p-2 rounded-sm' onChange={(e) => setEmail(e.target.value)}  type="text" placeholder='Email' />
                    </div>
                     <div>
                        <p className='mb-2 font-semibold tracking-wide'>Address</p>
                        <input className='mb-2 outline-none bg-gray-200 w-full p-2 rounded-sm' type="text" placeholder='Address' />
                    </div>
                </div>
            </div>
            <p className='tacking-wide font-semibold mb-2'>Password Changes</p>
            <input className='mb-4 outline-none bg-gray-200 w-full p-2 rounded-sm' type="text" name="" id="" placeholder='Current Password'/>
            <input className='mb-4 outline-none bg-gray-200 w-full p-2 rounded-sm' type="text" name="" id="" placeholder='New Password' onChange={(e) => setPassword(e.target.value)} />
            <input className='mb-4 outline-none bg-gray-200 w-full p-2 rounded-sm' type="text" name="" id="" placeholder='Confirem New Password'/>
            <div className='flex justify-end gap-5'>
                <button className='hover:bg-gray-200 p-2'>Cancel</button>
                <button className='rounded-sm hover:bg-red-800 bg-red-600 text-white px-6 py-2' onClick={(e)=>submitHandler(e)}>Save Change</button>
            </div>
        </div>
    </div>
  )
}

export default MyAccount