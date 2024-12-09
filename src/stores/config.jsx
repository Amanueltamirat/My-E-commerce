import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { products } from "../api/FakeApi.js";


export const Cart = createContext();


const Context = ({ children }) => {

const [allProducts,setProducts] = useState([])

  useEffect(()=>{
    const getProducts  = async()=>{
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    }
    getProducts()
  },[])

  return (
    <Cart.Provider value={{allProducts}}>
      {children}
    </Cart.Provider>
  );
};

export default Context;