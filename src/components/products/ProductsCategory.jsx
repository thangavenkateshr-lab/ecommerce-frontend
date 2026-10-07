import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/productsAction'
import Loader from '../layouts/Loader';
import Products from './Products';
import SimilarProducts from './FilterProducts';
import MetaData from '../layouts/MetaData';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ProductsCategory = () => {
  const dispatch = useDispatch();
  const {category} = useParams();
  const { loading, products, error } = useSelector((state)=>state.productsState)
  useEffect(()=>{
    toast.error(error,{
      position : 'bottom-center'
    })
    dispatch(getProducts(null, category));
  },[error ,category, dispatch])
  return (
    <>
    <MetaData title={`category-${category}`}/>
    <div className='mt-20'>
      <div className='px-2 md:px-10 lg:px-20'>
      <p className='mt-5 text-2xl font-bold'>{category}</p>
      </div>
      {loading ? <Loader/> : <SimilarProducts products={products}  category={category}/>}
    </div>
    </>
  )
}

export default ProductsCategory