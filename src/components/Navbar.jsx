import { useContext } from "react";
import {FaChevronCircleDown} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {FaHeart} from "react-icons/fa";
import {FaCartPlus} from "react-icons/fa";
import {FaUser} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../stores/cartContext";

function Navbar({onSearch}) {

const {itemAmount,state,wishList, dispatch: ctxDispatch } = useContext(CartContext)
//  const { state, dispatch: ctxDispatch } = useContext(CartContext);
 
  const {  userInfo } = state;
const navigate = useNavigate()
const handleSearch = (e)=>{
   e.preventDefault();
   onSearch(e.target.value)
   navigate('/all_products')

}

  const signoutHandler = () => {
    ctxDispatch({
      type: "USER_SIGNOUT",
    });
    localStorage.removeItem("userInfo");
  }


  return (
    <div className="">
        <header className="flex justify-between items-center bg-black text-gray-200 pr-20 py-2">
            <div></div>
            <div className="flex items-center gap-2">
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%</p>
            <button className="font-bold text-lg">shop now</button>
            </div>
            <div className="flex items-center gap-2">
                <p>English</p>
                <FaChevronCircleDown  />
            </div>
        </header>
        <nav className="flex justify-between items-center px-20 py-5  border-b-2 ">
            <Link to={'/'} className="text-2xl font-bold cursor-pointer hover:text-gray-400">Exclusive</Link>
            <div className="flex gap-10 text-lg">
                <Link to={'/'} className="cursor-pointer focus:border-b-2 hover:text-gray-400">Home</Link>
                <Link to={'/contact'} className="cursor-pointer  focus:border-b-2 hover:text-gray-400">Contact</Link>
                <Link to={'/about'} className="cursor-pointer  focus:border-b-2 hover:text-gray-400">About</Link>
                {userInfo ? <Link to={'/account'}>{userInfo?.email}</Link>:
                <Link to={'/signup'} className="cursor-pointer  focus:border-b-2 hover:text-gray-400">Sign Up</Link>
                }
            </div>
            <div className="flex items-center gap-5">
                <div className="flex items-center relative">
                    <input onChange={(e)=>handleSearch(e)} type="text" name="" id="" placeholder="what are you looking for?"  className="outline-none bg-gray-100 px-4 py-2 w-64 rounded-md"/>
                  <Link to={'/all_products'} className="absolute right-2" ><FaSearch className="cursor-pointer"/></Link>  
                </div>
                <Link className="flex  items-center relative" to={'/wishlist'}>
                 <FaHeart size={25} className="cursor-pointer"/>
                 <p className="absolute bg-red-600 py-0 px-1.5 rounded-full text-sm -top-1 -right-2">{wishList.length}</p>
                </Link>
                <Link to={'/cart'}  className="flex  items-center relative">
                <FaCartPlus size={25} className="cursor-pointer"/>
                <p className="absolute bg-red-600 py-0 px-1.5 rounded-full text-sm -top-1 -right-2">{itemAmount}</p>
                </Link>

                <div className="dropdown cursor-pointer ">
                  <div className='dropbtn -mt-2'>
                  <FaUser size={25} className="cursor-pointer"/>    
                  </div>
                  <div className="dropdown-content">
                      <Link to="/account">Manage My Account</Link>
                      <Link to="/cart">My Order</Link>
                      <Link to="#">My Cancellation</Link>
                      <Link to="#">My Reviews</Link>
                      <div>{
                        userInfo ? 
                      <Link to="#"  onClick={signoutHandler}>Logout</Link>:
                      <Link to={'/login'}>Login</Link>
                        }

                      </div>
                  </div>
                  </div>

            </div>
        </nav>
    </div>
  )
}

export default Navbar