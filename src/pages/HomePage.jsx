import React, { useContext, useEffect, useState } from 'react'
import Hero from '../components/Hero'
import {FaArrowRight,FaUps,FaMobile,FaArrowLeft} from "react-icons/fa";
import { products } from '../api/FakeApi';
import RandomProducts from '../components/RandomProducts';
import Context,{Cart} from '../stores/config';
import ProductByCategory from '../components/ProductByCategory';
import { CartContext } from '../stores/cartContext';
import RandomProductForUpper from '../components/RandomProductForUpper';
import { Link } from 'react-router-dom';



function HomePage() {

const [productsArray, setProducts] = useState([])

  const { state, dispatch: ctxDispatch } = useContext(CartContext);
  const { userInfo } = state


const [days, setDays] = useState(0)
const [hours, setHours] = useState(0)
const [minutes, setMinutes] = useState(0)
const [seconds, setSeconds] = useState(0)
 const [selectedCategory, setSelectedCategory] = useState('All');

 const {allProducts} = useContext(Cart);

    const productCategories =[
       {id:1, 
        category:"electronics",
        icon:<FaMobile size={50}/>,},
        { id:2,
        category:"jewelery",
        icon:<FaMobile size={50}/>,
        },
        {id:3,
        category:"men's clothing",
        icon:<FaMobile size={50}/>,
        },
        {id:4,
        category:"women's clothing",
        icon:<FaMobile size={50}/>,
        },

    ]

// console.log(productCategories)
    const filteredProducts = selectedCategory === 'All' 
        ? allProducts 
        : allProducts.filter(product => product.category === selectedCategory);


 useEffect(()=>{
  console.log(allProducts)
// console.log(jewelery)

 },[])


function UpdateClock() {
  let date = new Date();
  setDays(date.getDate())
  setHours(date.getHours())
  setMinutes(date.getMinutes());
  setSeconds(date.getSeconds());
//   if (hours > 12) {
    // hours = hours - 12;
    // setEl.innerText = "PM";
//   }
//   hours = hours < 10 ? "0" + hours : hours;
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   seconds = seconds < 10 ? "0" + seconds : seconds;
}
setInterval(() => {
  UpdateClock();
}, 1000);

  
  useEffect(()=>{
    const getProducts  = async()=>{
      const data = await products()
      setProducts(data)
    }
    console.log(selectedCategory)
    getProducts()

  },[])

  return (
    <div>
        <Hero/>
        <div className='mx-20 my-10'>
            <div className='flex gap-6 items-center mb-5'>
                <div className='w-6 h-12 bg-red-600 rounded-lg'></div>
                <p className='text-red-500 font-semibold '>Today's</p>
            </div>
            <div className='flex justify-between'> 
                <div className='flex gap-20 items-center'>
                    <h1 className='text-4xl font-semibold'>Flash Sales</h1>

                    <div className='flex gap-5'>
                        <div className='flex items-center gap-4'>
                        <p className='flex flex-col '><span className='text-xs font-semibold'>Days</span><strong className='text-4xl'>{days < 10 ? "0" + days: days }</strong></p>
                        <p className='text-red-500 text-3xl'>:</p>
                        </div>
                        <div className='flex items-center gap-4'>
                        <p className='flex flex-col'><span className='text-xs font-semibold'>Hours</span><strong className='text-4xl'>{hours > 12 ? "0" + hours-12: hours < 10 ? "0" + hours :hours}</strong></p>
                        <p className='text-red-500 text-3xl'>:</p>
                        </div>
                        <div className='flex items-center gap-4'>
                        <p className='flex flex-col'><span className='text-xs font-semibold'>Minutes</span><strong className='text-4xl'>{minutes < 10 ? "0" + minutes : minutes}</strong></p>
                        <p className='text-red-500 text-3xl'>:</p>
                        </div>
                        <p className='flex flex-col'><span className='text-xs font-semibold'>Seconds</span><strong className='text-4xl'>{seconds < 10 ? "0" + seconds :seconds}</strong></p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='bg-gray-200 p-5 rounded-full hover:bg-gray-400 cursor-pointer'>
                        <FaArrowLeft className=''/>
                    </div>
                    <div className='bg-gray-200 p-5 rounded-full hover:bg-gray-400 cursor-pointer'>
                       <FaArrowRight/> 
                    </div>
                </div>
            </div>
            
            <div>
                <div className='overflow-x-auto -mr-20'>
                <RandomProductForUpper discount={45} products={productsArray} count={8}/>
                </div>
                <div className='flex justify-center mt-10'>
                <Link to={'/all_products'} className='bg-red-500 text-white px-5 py-2 rounded-s-md hover:bg-red-950'>View All Products</Link>

                </div>
            </div>
        </div>
{/*  //////////////////////////////////////////////////////  */}
         <div className='mx-20 my-10'>
            <div className='flex gap-6 items-center mb-5'>
                <div className='w-6 h-12 bg-red-600 rounded-lg'></div>
                <p className='text-red-500 font-semibold '>Categories</p>
            </div>
            <div className='flex justify-between'> 
                <div className='flex gap-20 items-center'>
                    <h1 className='text-4xl font-semibold'>Browse By Category</h1>
                </div>

                <div className='flex gap-4'>
                    <div className='bg-gray-200 p-5 rounded-full hover:bg-gray-400 cursor-pointer'>
                        <FaArrowLeft className=''/>
                    </div>
                    <div className='bg-gray-200 p-5 rounded-full hover:bg-gray-400 cursor-pointer'>
                       <FaArrowRight/> 
                    </div>
                </div>
            </div>
            
            <div className='flex justify-between items-center gap-14 pt-10'>
                 {productCategories?.map(category => (
                    <div key={category.id}
                       className='cursor-pointer flex flex-col items-center border-gray-400 border-2  px-10 rounded-md hover:bg-red-600 hover:text-white w-1/4 py-8 gap-5' 
                        onClick={() => setSelectedCategory(category.category)}
                    >    <p>{category.icon}</p>
                        <p className='text-sm pt-'>{category.category.charAt(0).toUpperCase() + category.category.slice(1)}</p>
                    </div>
                    
                ))}
            </div>
        </div>
        {/* /////////////////////////////////////////////// */}

        <div className='mx-20 my-10'>
            <div className='flex gap-6 items-center mb-5'>
                <div className='w-6 h-12 bg-green-500 rounded-lg'></div>
                <p className='text-green-500 font-semibold '>Available</p>
            </div>
            <div className='flex justify-between'> 
                <div className='flex gap-20 items-center'>
                    <h1 className='text-4xl font-semibold'>{selectedCategory === "All" ? 'All Products':selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h1>
                </div>
                <button className='hover:bg-red-700 mr-20 bg-red-500 text-white px-10 py-4 rounded-md'>View All</button>
            </div>
               
              {
                selectedCategory === "All" ? <RandomProducts products={productsArray}  count={4}/>:<ProductByCategory selectedCategory={filteredProducts} count={4}/>
              }
               
            
        </div>
    {/* //////////////////////////////////////////////////////// */}
        <div className='mx-20 my-10 flex justify-between  bg-black'>
            <div className='p-10 pl-20'>
                <p className='text-md text-green-400'>categories</p>
                <p className='text-white text-2xl font-semibold py-6'>Enhance Your <br />Music Experience</p>
                <div>
                      <div className='flex gap-5 text-white mb-10'>

                        <div className='flex justify-center items-center bg-white rounded-full text-black w-16 h-16'>
                          <p className='flex flex-col-reverse items-center'><span className='text-xs font-semibold'>Days</span><strong className='text-xl'>{days < 10 ? "0" + days: days }</strong></p>
                        </div>

                        <div className='flex justify-center items-center bg-white rounded-full text-black w-16 h-16'>
                        <p className='flex flex-col-reverse items-center'><span className='text-xs font-semibold'>Hours</span><strong className='text-xl'>{hours > 12 ? "0" + hours-12: hours < 10 ? "0" + hours :hours}</strong></p>
                        </div>

                        <div className='flex justify-center items-center bg-white rounded-full text-black w-16 h-16'>
                        <p className='flex flex-col-reverse items-center '><span className='text-xs font-semibold'>Minutes</span><strong className='text-xl'>{minutes < 10 ? "0" + minutes : minutes}</strong></p>
                        </div>
                        <div className='flex justify-center items-center bg-white rounded-full text-black w-16 h-16'>
                        <p className='flex flex-col-reverse items-center'><span className='text-xs font-semibold'>Seconds</span><strong className='text-xl'>{seconds < 10 ? "0" + seconds :seconds}</strong></p>
                        </div>
                    </div>
                    <button className='text-white bg-green-400 py-4 px-6 rounded-lg hover:bg-green-600'>Buy Now!</button>
                </div>
            </div>
            <img className=' w-2/3 h-96' src="/images/music-device.png" alt="" />
        </div>
{/* ////////////////////////////////////////////////////////////// */}
            <div className='mx-20 my-10 flex flex-col'>
            <div className='flex gap-6 items-center mb-5'>
                <div className='w-6 h-12 bg-red-500 rounded-lg'></div>
                <p className='text-red-500 font-semibold '>Our Products</p>
            </div>
            <div className='flex justify-between'> 
                <div className='flex gap-20 items-center'>
                    <h1 className='text-4xl font-semibold'>Explore Our Products</h1>
                </div>
                  <div className='flex gap-4'>
                    <div className='bg-gray-200 p-5 rounded-full hover:bg-gray-400 cursor-pointer'>
                        <FaArrowLeft className=''/>
                    </div>
                    <div className='bg-gray-200 p-5 rounded-full hover:bg-gray-400 cursor-pointer'>
                       <FaArrowRight/> 
                    </div>
                </div>
            </div>
               <RandomProducts products={productsArray} count={8}/>

               <div className='flex justify-center mt-10'>
                 <button className=' hover:bg-red-700 mr-20 bg-red-500 text-white px-8 py-4 rounded-md'>View All Products</button>
               </div>
        </div>
{/* ////////////////////////////////////////////////////////////// */}
          <div className='mx-20 my-10 flex flex-col'>
              <div className='flex gap-6 items-center mb-5'>
                 <div className='w-6 h-12 bg-red-500 rounded-lg'></div>
                 <p className='text-red-500 font-semibold '>Featured</p>
              </div>
              <div className='flex gap-20 items-center'>
                    <h1 className='text-4xl font-semibold'>New Arrival</h1>
              </div>
            <div className='flex gap-10 my-10'>

               <div className=' w-1/2 bg-black text-white relative rounded-md'>
                <img className='' src="/images/playstation.png" alt="playstation"/>
                  <div className="absolute bottom-10 left-10">
                     <h2 className='text-xl'>PlayStation 5</h2>
                     <p className='text-sm text-gray-400'>Black and White version of the PS5 <br />coming out on sale</p>
                     <button className='text-gray-300 border-b-2 border-gray-400 mt-2'>Shop Now</button>
                  </div>
               </div>

               <div className='h-96 flex flex-col justify-between w-1/2'>
                 <div className='flex items-center bg-black text-white rounded-md'>
                   <div className='pl-10'>
                    <h2 className='text-xl'>Women's Collections</h2>
                    <p className='text-sm text-gray-400'>Featured woman collections that <br />give you another vibe</p>
                    <button className='text-gray-300 border-b-2 border-gray-400 mt-2'>Shop Now</button>
                   </div>
                   <img className='rotate w-2/4' src="/images/women.jpg" alt="women" />
                 </div>
                 <div className=' flex justify-between items-center gap-5 my-5'>
                    <div className=' w-1/2 small-content  text-white relative rounded-md'>
                       <img className='w-full h-56' src="/images/speaker.png" alt="" />
                    <div className='absolute bottom-5 left-5'>
                        <h2 className='text-xl'>Speakers</h2>
                        <p className='text-sm text-gray-400'>Amazon wireless speakers</p>
                        <button className='text-gray-300 border-b-2 border-gray-400 mt-2'>Shop Now</button>
                    </div>
                    </div>

                    <div className='w-1/2 small-content text-white relative rounded-md'>
                      <img className='h-56' src="/images/perfume.png" alt="perfume" />
                      <div className='absolute bottom-5 left-5'>
                        <h2  className='text-xl'>Perfume</h2>
                        <p className='text-sm text-gray-400'>GUCCI INTENSE OUD EDP</p>
                        <button className='text-gray-300 border-b-2 border-gray-400 mt-2'>Shop Now</button>
                      </div>
                    </div>
                 </div>
                </div> 
            </div>
            </div>
         <div className='flex justify-center mb-10 gap-10'>
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

         <div className='flex justify-end m-20'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="bg-gray-100 p-2 size-12 rounded-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                </svg>

         </div>
    </div>

  )
}

export default HomePage