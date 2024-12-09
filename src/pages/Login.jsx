import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../stores/cartContext';

function Login() {

 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [errors, setErrors] = useState({});


 const { state, dispatch: ctxDispatch } = useContext(CartContext);
  const { userInfo } = state;
  const navigate = useNavigate();

   const validate = () => {
        const newErrors = {};
        if (!password) {
            newErrors.password = 'Password is required';
        }
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email format is invalid';
        }
        return newErrors;
    };



   const submitHandler = async (e) => {
    e.preventDefault();
     const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
              const data  ={
                  email,
                  password
                }
         ctxDispatch({ type: "USER_SIGNIN", payload: data });
         localStorage.setItem("userInfo", JSON.stringify(data));
         console.log(data);
            setPassword('');
            setEmail('');
            setErrors({});
            navigate( "/");
        } else {
            setErrors(validationErrors);
        }
    }
  
    useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate]);


  return (
     <div className='m-20 flex gap-20 items-center'>
        <div className='-ml-20 '>
            <img className='h-[400px]' src="/images/signup-img.jpg" alt="signup" />
        </div>
        <div>
            <h1 className='text-2xl font-semibold tracking-wide mb-2'>Log in to Exclusive</h1>
            <p className='textm-sm mb-5'>Enter your details below</p>
            <div className='flex flex-col'>
                <input type="text" className='outline-none border-b-2 py-2 my-2'  required onChange={(e) => setEmail(e.target.value)}   placeholder='Email or phone number' />
                 {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                <input   type="text" className='outline-none border-b-2 py-2 my-2' placeholder='Password' required
            onChange={(e) => setPassword(e.target.value)} />
             {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
            </div>
            <div className='flex justify-between items-center gap-5'>
            <Link onClick={(e)=>submitHandler(e)} className='bg-red-500 text-white flex justify-center  py-2 px-10 rounded-md my-2 hover:bg-red-700'>Log in</Link>
            <p className='text-sm text-red-500'>Forget Password?</p>
            </div>
        </div>
    </div>
  )
}

export default Login