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
import { useState } from 'react';
import PurchaseSuccessPage from './pages/PurchaseSuccess.jsx';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Store } from './stores/ecommerce.js';


function App() {

const [success, setSuccess] = useState(false)
const [search,setSearch] = useState('')

  return (
    <div>
   <BrowserRouter>
   { !success ?
   <>
   <Navbar search={search} onSearch ={setSearch}/>
    <ToastContainer position="bottom-center" limit={1} />
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
     <Route path = '/checkout' element= {<BillingDetailPage onSuccess ={setSuccess}/>}/>
     <Route path = '/all_products' element= {<AllProducts search={search}/>}/>
    <Route path = '/*' element= {<ErrorPage/>}/>
   </Routes>
   <Footer/>
   </>
   : <Routes>
      <Route path='/success' element={<PurchaseSuccessPage onSuccess={setSuccess} />}/>
    </Routes>}
   </BrowserRouter>

   </div>
  );

  
}

export default App
