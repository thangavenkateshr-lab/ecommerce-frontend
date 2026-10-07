import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../actions/productAction";
import Loader from "../layouts/Loader";
import { motion } from "framer-motion";
import MetaData from "../layouts/MetaData";
import Products from "./Products";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { toast } from "react-toastify";
import { addCart, clearErrorCart } from "../../actions/cartAction";
import { addWish } from '../../actions/wishAction'
import ProductReview from "./ProductReview";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { loading, product, similarProducts, error } = useSelector((state) => state.productState);
  const { wishError } = useSelector((state) => state.wishState);
  const increaseQty = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    };
  }
  const [selectedImage, setSelectedImage] = useState("");
  useEffect(() => {
    if (id) dispatch(getProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (product?.images?.length > 0) {
      setSelectedImage(product.images[0].file_name);
    }
  }, [product]);

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="text-red-500 text-center mt-10">
        {error}
      </div>
    );
  }

  const addToCart = (id) => {
    const formData = new FormData();
    formData.append('productId',id);
    formData.append('quantity', quantity)
    dispatch(addCart(formData));
  }

  const saveToWishList = (id) => {
    dispatch(addWish(id));
    if(wishError){
      toast(wishError, {
        type : error,
        position : 'bottom-center'
      })
    }
    toast.success("Added to wishlist",{
      position : 'bottom-center'
    });
  }


  if (!product) {
    toast.error("Product not found", {
      position: "bottom-center",
      onOpen : () => {dispatch(clearErrorCart())}
    });

    return null;
  }

  return (
    <>
      <MetaData title={product.name} />

      <div className="py-20 bg-white px-6 md:px-20 lg:px-32  mt-5 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Side */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col-reverse md:flex-row gap-4"
          >
            {/* Thumbnail Images */}
            <div className="flex flex-row md:flex-col gap-4">
              {product?.images?.map((image, index) => (
                <img
                  key={index}
                  src={image?.file_name}
                  alt={product?.name}
                  onClick={() => setSelectedImage(image?.file_name)}
                  className={`w-20 h-20 object-cover rounded-lg border cursor-pointer transition hover:scale-90 duration-300 ease-in-out
                    ${selectedImage === image.file_name
                      ? "border-sky-500"
                      : "border-gray-300"
                    }`}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 flex items-center justify-center border border-gray-300 rounded-xl p-2">
              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt={product.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="h-96 object-contain" />
            </div>
          </motion.div>
          {/* Right Side */}
          <motion.div initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-6">
            <h1 className="text-4xl font-light tracking-tight">{product.name}</h1>
            <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
            <div className="text-3xl font-bold">₹{product.price}(<span className="line-through text-red-500 font-normal">${product.price * 2}</span>)</div>
            <div className="flex items-center gap-4">
              <button onClick={decreaseQty} className="w-10 h-10 rounded-xl border border-slate-300 text-xl hover:bg-gray-100">-</button>
              <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
              <button onClick={increaseQty} className="w-10 h-10 rounded-xl border border-slate-300 text-xl hover:bg-gray-100">+</button>
            </div>
            <button  onClick={() => {addToCart(product._id)}} disabled={product.stock === 0} className={`px-8 py-3 rounded-xl flex items-center gap-3 transition ${product.stock === 0? "bg-gray-400 text-white cursor-not-allowed opacity-60": "bg-black text-white hover:bg-gray-900"}`}>
              <HiOutlineShoppingBag size={22} />
              <span>Add to Cart</span>
            </button>
            <button onClick={() => {saveToWishList(product._id)}} className= "px-8 py-3 rounded-xl flex items-center gap-3 transition bg-gray-400 text-white">
              <IoMdHeartEmpty size={22} />
              <span>Save to WishList</span>
            </button>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">Availability :</span>
                {product.stock > 0 ? (<span className="text-green-600 font-semibold">In Stock</span>) : (<span className="text-red-600 font-semibold">Out of Stock</span>)}
              </div>
              {product.stock > 0 && (
                <p className="text-sm text-gray-500">Only <span className="font-semibold">{product.stock}</span> items left</p>
              )}
            </div>
            <ProductReview id={product._id}/>
          </motion.div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="px-2 md:px-10 lg:px-20">
        <h2 className="text-2xl font-bold mb-5">Similar Products</h2>
      </div>
      <Products products={similarProducts} />
    </>
  );
};

export default ProductDetail;