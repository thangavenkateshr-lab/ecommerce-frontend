import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/Home';
import ProductDetail from './components/products/ProductDetail'
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async'
import ProductsSearch from './components/products/ProductsSearch';
import ProductsCategory from './components/products/ProductsCategory';
import Login from './components/users/Login';
import Register from './components/users/Register';
import Profile from './components/users/Profile';
import Cart from './components/users/Cart';
import store from './store';
import { loadUser } from './actions/userAction';
import ProfileUpdate from './components/users/ProfileUpdate';
import PasswordUpdate from './components/users/PasswordUpdate';
import ForgotPassword from './components/users/ForgotPassword';
import ResetPassword from './components/users/ResetPassword';
import WishList from './components/users/WishList';
import Shipping from './components/orders/Shipping';
import Payment from './components/orders/Payment';
import ConfirmOrder from './components/orders/ConfirmOrder';
import ProductsFilterAndGtLt from './components/products/ProductsFilterAndGtLt';

const App = () => {
  useEffect(()=>{
    store.dispatch(loadUser());
  })
  return (
    <BrowserRouter>
    <HelmetProvider>
      <Header />
      <ToastContainer  theme='dark'/>
      <Routes>
        <Route path='/' element={<><Home /></>} />
        <Route path='/product/detail/:id' element={<><ProductDetail/></>}/>
        <Route path='/search/:keyword' element={<><ProductsSearch/></>}/>
        <Route path='/category/:category' element={<><ProductsCategory/></>}/>
        <Route path="/filter/:category" element={<><ProductsFilterAndGtLt/></>} />
        <Route path='/login' element={<><Login/></>}/>
        <Route path='/register' element={<><Register/></>}/>
        <Route path='/profile' element={<><Profile/></>}/>
        <Route path='/myprofile/update' element={<><ProfileUpdate/></>}/>
        <Route path='/password/update' element={<><PasswordUpdate/></>}/>
        <Route path='/password/forgot' element={<><ForgotPassword/></>}/>
        <Route path='password/reset/:token' element={<><ResetPassword/></>}/>
        <Route path='/cart' element={<><Cart/></>}/>
        <Route path='/wishlist' element={<><WishList/></>}/>
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirm/order" element={<ConfirmOrder />} />
      </Routes>
      <Footer />
      </HelmetProvider>
    </BrowserRouter>
  )
}

export default App