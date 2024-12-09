import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../stores/cartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function MyAccount() {


 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

   const [errors, setErrors] = useState({});

  const {cart, total} = useContext(CartContext)


  const { state, dispatch: ctxDispatch } = useContext(CartContext);
  const { userInfo } = state

console.log(userInfo)



const navigate = useNavigate()


  // const submitHandler = async (e) => {
  //   e.preventDefault();
    
  //       if (Object.keys(validationErrors).length === 0) {
  //             const data  ={
  //                 name,
  //                 email,
  //                 companyName
  //               }
  //               console.log(data)
  //               navigate('/success')
  //               onSuccess((prev)=>!prev)
  //       } else {
  //           setErrors(validationErrors);
  //       }
  //   }



   const submitHandler = async (e) => {
    e.preventDefault();
     const validationErrors = validate();
  if (Object.keys(validationErrors).length === 0) {
      const data  ={
        firstName,
        lastName,
        email,
        newPassword,
        
      }
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      toast.success('Profile updated successfully')
      navigate('/');
      console.log(data);
  }  else {
            setErrors(validationErrors);
        }
    
    }
  
  //   useEffect(() => {
  //   // if (userInfo) {
  //   //   navigate('/');
  //   // }
  // }, [userInfo, navigate]);

 const validate = () => {

        const newErrors = {};
        if(newPassword !== confirmPassword){
            newErrors.confirmPassword = 'Password does not match'
        }

         if (!firstName) {
            newErrors.firstName = 'First Name is required';
        }
         if (!lastName) {
            newErrors.lastName = 'Last Name is required';
        }
        if(!address){
            newErrors.address = 'Address is required';
        }
        if(!currentPassword){
            newErrors.currentPassword = 'Current password is required';
        }
        if (!newPassword) {
            newErrors.newPassword = 'New Password is required';
        }
        if(!confirmPassword){
            newErrors.confirmPassword = 'Confirm password is required';
        }
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email format is invalid';
        }
        return newErrors;
    };


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
            <h1 className='text-xl text-red-500 font-semibold my-2'>{userInfo ? userInfo?.firstName?.charAt(0).toUpperCase() + userInfo?.firstName?.slice(1) : ''} Edit Your Profile</h1>
            <div className='flex justify-between gap-5 my-5'>
                <div className='w-1/2 my-4'>
                    <div >
                        <p className='font-semibold tracking-wide mb-2'>First Name</p>
                        <input className='mb-2 outline-none bg-gray-200 w-full p-2 rounded-sm'  onChange={(e) => setFirstName(e.target.value)}  type="text" placeholder='First Name' />
                        {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
                    </div>
                     <div>
                        <p className='font-semibold tracking-wide mb-2'>Last Name</p>
                        <input onChange={(e)=>setLastName(e.target.value)} className='mb-2 outline-none bg-gray-200 w-full p-2 rounded-sm' type="text"  placeholder='Last Name' />
                        {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
                    </div>
                </div>
                <div className='w-1/2 my-4'>
                     <div>
                        <p className='mb-2 font-semibold tracking-wide'>Email</p>
                        <input className='mb-2 outline-none bg-gray-200 w-full p-2 rounded-sm' onChange={(e) => setEmail(e.target.value)}  type="text" placeholder='Email' />
                        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                    </div>
                     <div>
                        <p className='mb-2 font-semibold tracking-wide'>Address</p>
                        <input onChange={(e)=>setAddress(e.target.value)} className='mb-2 outline-none bg-gray-200 w-full p-2 rounded-sm' type="text" placeholder='Address' />
                        {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
                    </div>
                </div>
            </div>
            <p className='tacking-wide font-semibold mb-2'>Password Changes</p>
            <input onChange={(e)=>setCurrentPassword(e.target.value)} className='mb-4 outline-none bg-gray-200 w-full p-2 rounded-sm' type="text" name="" id="" placeholder='Current Password'/>
            {errors.currentPassword && <span style={{ color: 'red' }}>{errors.currentPassword}</span>}

            <input className='mb-4 outline-none bg-gray-200 w-full p-2 rounded-sm' type="text" name="" id="" placeholder='New Password' onChange={(e) => setNewPassword(e.target.value)} />
            {errors.newPassword && <span style={{ color: 'red' }}>{errors.newPassword}</span>}

            <input onChange={(e)=>setConfirmPassword(e.target.value)} className='mb-4 outline-none bg-gray-200 w-full p-2 rounded-sm' type="text" name="" id="" placeholder='Confirem New Password'/>
            {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}

            <div className='flex justify-end gap-5'>
                <button className='hover:bg-gray-200 p-2'>Cancel</button>
                <button className='rounded-sm hover:bg-red-800 bg-red-600 text-white px-6 py-2' onClick={(e)=>submitHandler(e)}>Save Change</button>
            </div>
        </div>
    </div>
  )
}

export default MyAccount