import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productsAction'
import Loader from './layouts/Loader';
import Products from '../components/products/Products';
import MetaData from './layouts/MetaData';
import { toast } from 'react-toastify';

const Home = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state)=>state.productsState)
  useEffect(()=>{
    toast.error(error,{
      position : 'bottom-center'
    })
    dispatch(getProducts());
  },[dispatch, error])
  return (
    <>
    <MetaData title={'Buy best products'}/>
    <div className='mt-20'>
      <div className='px-2 md:px-10 lg:px-20'>
      <p className='mt-5 text-2xl font-bold'>Trending Products</p>
      </div>
      {loading ? <Loader/> : <Products products={products}/>}
    </div>
    </>
  )
}

export default Home