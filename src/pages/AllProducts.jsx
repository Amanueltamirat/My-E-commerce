import React, { useContext } from 'react'
import { Cart } from '../stores/config';
import Products from '../components/Products';




function AllProducts() {

const {allProducts} = useContext(Cart);
console.log(allProducts)

  return (
    <div className='m-20'>
        <div className='flex justify-center mb-5'>
        <h1 className='text-xl font-semibold mb-5 '>All Products</h1>
        </div>
        <div className='grid grid-cols-4 gap-10'>
        {
            allProducts.map((item)=>{
                return <Products key={item.id} item={item}/>
            })
        }
        </div>
    </div>
  )
}

export default AllProducts