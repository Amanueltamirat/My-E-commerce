// import { useEffect} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
// import { products } from './api/FakeApi.js'
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import Footer from './components/Footer.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import CartPage from './pages/CartPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import MyAccount from './pages/MyAccount.jsx';
import WishlistPage from './pages/WishlistPage.jsx';
import BillingDetailPage from './components/BillingDetailPage.jsx';
import AllProducts from './pages/AllProducts.jsx';
// import { Store } from './stores/ecommerce.js';


function App() {


  // useEffect(()=>{
  //   const getProducts  = async()=>{
  //     const data = await products()
     
  //   }
  //   getProducts()
  // },[])
 

 


  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path = '/' element= {<HomePage/>}/>
    <Route path = '/products/:id' element= {<ProductDetail/>}/>
    <Route path = '/cart' element= {<CartPage/>}/>
    <Route path = '/contact' element= {<ContactPage/>}/>
    <Route path = '/about' element= {<AboutPage/>}/>
     <Route path = '/login' element= {<Login/>}/>
     <Route path = '/signup' element= {<Signup/>}/>
     <Route path = '/account' element= {<MyAccount/>}/>
     <Route path = '/wishlist' element= {<WishlistPage/>}/>
     <Route path = '/checkout' element= {<BillingDetailPage/>}/>
     <Route path = '/all_products' element= {<AllProducts/>}/>
    <Route path = '/*' element= {<ErrorPage/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  );

  
}

export default App
