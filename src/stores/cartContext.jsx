import React, { createContext, useEffect, useReducer, useState } from 'react'


export const CartContext = createContext()


const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};



const reducer = (state, action) => {
  switch (action.type) {
    case "USER_SIGNIN":
      return {
        ...state,
        userInfo: action.payload,
      };
    case "USER_SIGNOUT":
      return {
        ...state,
        userInfo: null,
        cart: {
          cartItems: [],
          shippingAddress: {},
          paymentMethod: "",
        },
      };
    default:
      return state;
  }
};


function CartProvider({children}) {
    const [cart, setCart] = useState([]);
    const [itemAmount, setItemAmount] = useState(0);
    const [wishList, setWishList] = useState([])
    const [total, setTotal] = useState(0);

    const [state, dispatch] = useReducer(reducer,initialState);


    useEffect(()=>{
        const total = cart.reduce((total,item)=>{
            return total + item.price * item.amount
        },0)
        setTotal(total)
    },[cart])


    useEffect(()=>{
        const amount = cart.reduce((total, item)=>{
            return total + item.amount 
        },0)
        setItemAmount(amount)
    },[cart])

const signIn = (userInfo)=>{
    dispatch({
        type:"USER_SIGNIN",
        payload:userInfo
    })
}

const signOut = ()=>{
    dispatch({
        type:"USER_SIGNOUT",
        payload:{}
    })
}


const addToCart = (product,id)=>{
    const newItem = {...product, amount:1}
    const cartItem = cart.find((item)=>{
        return item.id === id
    })
    if(cartItem){
        const newCart = [...cart].map((item)=>{
            if(item.id === id){
                return {...item, amount:cartItem.amount + 1 }
            } else{
                return item
            }
        })
        setCart(newCart)
    } else{
        setCart([...cart, newItem])
    }
}
const addToWishList = (product,id)=>{
    const newItem = {...product,amount:1};
    const wishListItem = wishList.find((item)=>{
        return item.id === id
    })
   
    setWishList([...wishList, newItem])
}

const removeFromWishList = (id)=>{
    const newWishList = wishList.filter((item)=>{
        return item.id !== id
    })
    setWishList(newWishList)
}

const removeItem = (id)=>{
    const newItem = cart.filter((item)=>{
        return item.id !== id
    })
    setCart(newItem)
}

const increaseQuantity = (id)=>{
    const cartItem = cart.find((item)=>{
        return item.id === id
    })

    if(cartItem){
        const newCart = [...cart].map((item)=>{
            if(item.id === id){
                return {...item,amount:cartItem.amount + 1}
            }
            return item
        })
        setCart(newCart)
    } 
    setCart([...cart,cartItem])

}

const decreaseQuantity = (id)=>{
    const cartItem = cart.find((item)=>{
        return item.id === id
    })
    if(cartItem){
        const newCart = [...cart].map((item)=>{
            if(item.id === id){
                return {...item, amount:cartItem.amount - 1}
            }
            return item
        })
        setCart(newCart)
    }
     if( cartItem.amount < 2 ){
            removeItem(id)
        }
    
}

  return (
   <CartContext.Provider value={{wishList,addToWishList,removeFromWishList,state,dispatch,itemAmount, total,increaseQuantity,decreaseQuantity, removeItem, cart, addToCart, signIn,signOut}}>{children}</CartContext.Provider>
  )
}

export default CartProvider