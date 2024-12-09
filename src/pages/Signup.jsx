import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../stores/cartContext';

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [errors, setErrors] = useState({});


  const { state, dispatch: ctxDispatch } = useContext(CartContext);
  const { userInfo } = state;
  const navigate = useNavigate();

  const validate = () => {
        const newErrors = {};
         if (!name) {
            newErrors.name = 'Name is required';
        }
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
                  name,
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
            <h1 className='text-2xl font-semibold tracking-wide mb-2'>Create Account</h1>
            <p className='textm-sm mb-5'>Enter your details below</p>
            <form className='flex flex-col'>
                <input type="text" className='outline-none border-b-2 py-2 my-2' placeholder='Name'  required
                     onChange={(e) => setName(e.target.value)}/>
                      {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                <input type="text" className='outline-none border-b-2 py-2 my-2' placeholder='Email or phone number'  required
                onChange={(e) => setEmail(e.target.value)} />
                 {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                <input type="text" className='outline-none border-b-2 py-2 my-2' placeholder='Password'  required
               onChange={(e) => setPassword(e.target.value)} />
                {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
            </form>
            <div className='flex flex-col'>
            <button type="submit" onClick={(e)=>submitHandler(e)} className='bg-red-500 text-white flex justify-center p-2 rounded-md my-2  hover:bg-red-700'>Create Account</button>
            <Link className='border-2 flex justify-center p-2 rounded-md my-2'>Sign up with Google</Link>
            <p><span className='text-sm'>Already have account?</span> <Link className='font-normal border-b-2  pb-1' to={'/login'}>Logn in</Link> </p>
            </div>
        </div>
    </div>
  )
}

export default Signup