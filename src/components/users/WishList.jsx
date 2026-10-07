import { motion } from "framer-motion";
import { useEffect } from "react";
import { FiHeart, FiShoppingCart, FiTrash2, FiArrowLeft} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteWish, getWishes } from "../../actions/wishAction";
import { toast } from "react-toastify";
import { clearWishError } from "../../slices/wishSlice";
import Loader from '../layouts/Loader'

const WishList = () => {
  const nav = useNavigate();
  const { loading, wishLists, error } = useSelector((state) => state.wishState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWishes());
  }, [dispatch]);

  useEffect(() => {
    if(error){
      toast(error, {
        position : 'bottom-center',
        type : 'error',
        onOpen : () => {dispatch(clearWishError())}
      })
    }
  },[dispatch, error])

  const deleteItems = (id) => {
    dispatch(deleteWish(id));
    if(error){
      toast(error, {
        position : 'bottom-center',
        type : error,
        onOpen : () => {dispatch(clearWishError())}
      })
    }
  }

  if(loading){
    return (
      <Loader/>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-10 px-4 lg:px-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-8"
      >
        <div>
          <h1 className="text-4xl font-bold text-gray-800">My Wishlist</h1>
          <p className="text-gray-500 mt-2">{wishLists.length} Items in your wishlist</p>
        </div>
        <Link to="/" className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow hover:shadow-lg transition"><FiArrowLeft />Continue Shopping</Link>
      </motion.div>
      {wishLists.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-lg py-20 flex flex-col items-center">
          <FiHeart className="text-7xl text-red-400" />
          <h2 className="text-3xl font-bold mt-5">Your Wishlist is Empty</h2>
          <p className="text-gray-500 mt-2">Save your favourite products here.</p>
          <Link to="/" className="mt-6 bg-black text-white px-6 py-3 rounded-xl">Explore Products</Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {wishLists.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src={item.product.images[0].file_name} alt={item.product.name} className="w-full h-60 object-cover"/>
              <div className="p-5">
                <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">{item.product.category}</span>
                <h2 className="text-xl font-bold mt-3">{item.product.name}</h2>
                <p className="text-2xl font-semibold mt-2">₹ {item.product.price.toLocaleString()}</p>
                <div className="flex gap-3 mt-5">
                  <button onClick={() => {nav(`/product/detail/${item.product._id}`)}} className="flex-1 flex justify-center items-center gap-2 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"><FiShoppingCart />View Product</button>
                  <button onClick={() => {deleteItems(item.id)}} className="p-3 rounded-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"><FiTrash2 size={20} /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;