import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams, useSearchParams } from "react-router-dom";
import { getProducts } from "../../actions/productsAction";
import Loader from "../layouts/Loader";
import { toast } from "react-toastify";
import Products from "./Products";
const ProductsFilterAndGtLt = () => {
    const { category } = useParams();
    const [searchParams] = useSearchParams();
    const lt = searchParams.get('lt');
    const gt = searchParams.get('gt');
    const dispatch = useDispatch();
    const { products, error, loading } = useSelector((state) => state.productsState);
    useEffect(() => {
        if(error){
            toast.error(error, {
                position : 'bottom-center'
            })
        }
        dispatch(getProducts(null, category, gt, lt))
    }, [error, category, gt, lt, dispatch])
    if(loading){
        return (
            <Loader/>
        )
    }
  return (
    <div>
    <div className='mt-20'>
      <div className='px-2 md:px-10 lg:px-20'>
      <p className='mt-5 text-2xl font-bold'>{category}</p>
      </div>
      <Products products={products}  category={category}/>
    </div></div>
  )
}

export default ProductsFilterAndGtLt