


// export const productReducer = (state, action) => {
//   switch (action.type) {
//     case "SORT_BY_PRICE":
//       return { ...state, sort: action.payload };
//     case "FILTER_BY_STOCK":
//       return { ...state, byStock: !state.byStock };
//     case "FILTER_BY_DELIVERY":
//       return { ...state, byFastDelivery: !state.byFastDelivery };
//     case "FILTER_BY_RATING":
//       return { ...state, byRating: action.payload };
//     case "FILTER_BY_SEARCH":
//       return { ...state, searchQuery: action.payload };
//     case "CLEAR_FILTERS":
//       return { byStock: false, byFastDelivery: false, byRating: 0 };
//     default:
//       return state;
//   }
// };

import { createContext, useReducer } from "react";


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

export const Store = createContext();
export function StoreProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const valuse = { state, dispatch };
  return <Store.Provider value={valuse}>{children}</Store.Provider>;
}