import React, { useContext, useEffect, useState } from 'react'
import { Cart } from '../stores/config';
// import RandomProducts from './RandomProducts';
import ProductByCategory from './ProductByCategory';


function RelatedItems({category}) {
const [selectedCategory,setSelectedCategory] = useState('')
 
const {allProducts} = useContext(Cart);

useEffect(()=>{

 if(category ===  "men's clothing"){
   const menClothing = allProducts.filter((item)=>{
    return (
        item.category === "men's clothing"
    )
})
    setSelectedCategory(menClothing)
 }

 if(category ===  "women's clothing"){
   const womenClothing = allProducts.filter((item)=>{
    return (
        item.category === "women's clothing"
    )
})
    setSelectedCategory(womenClothing)
 }else if (category ===  "electronics"){
  const electronics = allProducts.filter((item)=>{
    return (
        item.category === "electronics"
    )
})
    setSelectedCategory(electronics)
 }else if (category === "jewelery"){
 const jewelery = allProducts.filter((item)=>{
    return (
        item.category === "jewelery"
    )
})
    setSelectedCategory(jewelery)
 }

},[category])

console.log(selectedCategory)
  return (
    <div className='mt-20'>
        <div className='flex gap-5 items-center'>
        <div className='rounded-md w-6 h-14 bg-red-500'></div>
        <p className='text-red-500 text-xl font-semibold'>Related Items</p>
        </div>
        <ProductByCategory selectedCategory={selectedCategory} count={4}/>
    </div>
  )
}

export default RelatedItems