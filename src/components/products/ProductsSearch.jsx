import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/productsAction'
import Loader from '../layouts/Loader';
import Products from './Products';
import MetaData from '../layouts/MetaData';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ProductsSearch = () => {
  const dispatch = useDispatch();
  const {keyword} = useParams();
  const { loading, products, error } = useSelector((state)=>state.productsState)
  console.log(products);
  useEffect(()=>{
    toast.error(error,{
      position : 'bottom-center'
    })
    dispatch(getProducts(keyword));
  },[error,keyword])
  return (
    <>
    <MetaData title={'Buy best products'}/>
    <div className='mt-20'>
      <div className='px-2 md:px-10 lg:px-20'>
      <p className='mt-5 text-2xl font-bold'>Search Products</p>
      </div>
      {loading ? <Loader/> : <Products products={products}/>}
    </div>
    <div className='flex justify-center flex-row'>
    </div>
    </>
  )
}

export default ProductsSearch;