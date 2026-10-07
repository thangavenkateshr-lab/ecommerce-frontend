import { motion } from "framer-motion";
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowLeft, } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import { FiCreditCard } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from 'react-toastify';
import Loader from "../layouts/Loader";
import { cartUpdate, clearErrorCart, deleteCart, showCart } from "../../actions/cartAction";

const Cart = () => {
  const nav = useNavigate();
  const { loading, carts, error } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const { isAuthenticate } = useSelector((state) => state.authState);
  useEffect(() => {
    dispatch(showCart());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "bottom-center",
        onClose: () => {
          dispatch(clearErrorCart());
        }
      });
    }
  }, [error, dispatch]);

  if (loading) {
    return (
      <Loader />
    )
  }
  const removeItems = (id) => {
    dispatch(deleteCart(id));
    if (error) {
      toast(error, {
        position: 'bottom-center',
        type: error
      })
    }
  }
  const increaseQuantity = (item) => {
    if (item.quantity >= item.product.stock) {
        toast.error("Only " + item.product.stock + " items available in stock",{
          position : 'bottom-center'
        });
        return;
    }
    dispatch(cartUpdate(item._id, item.quantity + 1));
}
  const decreaseQuantity = (item) => {
    if (item.quantity <= 1) return;
    dispatch(cartUpdate(item._id, item.quantity-1))
  }
  const subtotal = carts.reduce((acc, item) => acc + item.product.price * item.quantity,0);
  const deliveryFee = subtotal > 1000 ? 0 : 80;
  const tax = Math.round(subtotal * 0.05); // 5% GST
  const discount = subtotal > 5000 ? 500 : 0;
  const total = subtotal + deliveryFee + tax - discount;
  return (
    <>
      {isAuthenticate ? <div className="min-h-screen bg-gray-100 pt-28 pb-10 px-4 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-xl md:text-4xl font-bold text-gray-800">Shopping Cart</h1>
            <p className="text-gray-500 mt-2">{carts.length} Items in your cart</p>
          </div>
          <Link to="/" className="flex items-center gap-2 bg-white px-3 py-1 md:px-5 md:py-3 rounded-xl shadow hover:shadow-lg transition"><FiArrowLeft />Continue Shopping</Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT */}

          <div className="lg:col-span-2 space-y-5">
            {carts.map((item, _id) => (
              <motion.div key={item._id} initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: item._id * 0.15 }} whileHover={{ y: -4 }}
                className="bg-white rounded-2xl shadow-lg p-5">
                <div className="flex flex-col md:flex-row gap-6">
                  <img src={item.product.images[0].file_name} alt={item.product.name} className="w-full md:w-40 h-40 rounded-xl object-cover" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">{item.product.category}</span>
                      <h2 className="text-2xl font-bold mt-3">{item.product.name}</h2>
                      <p className="text-2xl text-gray-700 font-semibold mt-2">₹ {item.product.price.toLocaleString()}</p>
                    </div>
                    <div className="flex flex-wrap justify-between items-center mt-6 gap-4">
                      <div className="flex items-center border rounded-xl overflow-hidden">
                        <button className="p-3 hover:bg-gray-100" onClick={() => decreaseQuantity(item)}><FiMinus /></button>
                        <div className="px-6 font-semibold">{item.quantity}</div>
                        <button className="p-3 hover:bg-gray-100" onClick={() => increaseQuantity(item)}><FiPlus /></button>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Total</p>
                        <h3 className="text-2xl font-bold">₹ {(item.product.price * item.quantity).toLocaleString()}</h3>
                      </div>
                      <div className="flex flex-row gap-5">
                      <button onClick={() => nav('/shipping')} className="flex items-center gap-2 text-gray-500 hover:text-gray-700 cursor-pointer"><FiCreditCard/>Order Now</button>
                      <button onClick={() => { removeItems(item._id) }} className="flex items-center gap-2 cursor-pointer text-red-500 hover:text-red-700"><FiTrash2 />Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* RIGHT SIDE */}
          <motion.div initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl shadow-xl p-6 h-fit sticky top-28">
            <div className="flex items-center gap-3 mb-6">
              <FiShoppingBag className="text-2xl text-gray-700" />
              <h2 className="text-2xl font-bold">Order Summary</h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-xl p-6 h-fit sticky top-28"
            >
              <div className="flex items-center gap-3 mb-6"><FiShoppingBag className="text-2xl text-gray-700" /></div>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600"><span>Items ({carts.length})</span><span>₹ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="text-green-600 font-semibold">
                        FREE
                      </span>
                    ) : (
                      `₹ ${deliveryFee}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-gray-600"><span>GST (5%)</span><span>₹ {tax.toLocaleString()}</span></div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600"><span>Discount</span><span>- ₹ {discount.toLocaleString()}</span></div>
                )}
                <hr />
                <div className="flex justify-between text-xl font-bold"><span>Total</span><span>₹ {total.toLocaleString()}</span></div>
                {deliveryFee !== 0 && (
                  <p className="text-xs text-gray-500">Add products worth ₹ {(1000 - subtotal).toLocaleString()} morefor FREE delivery.</p>
                )}
                <button className="w-full mt-4 bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition">Proceed to Checkout</button>
                <Link to="/" className="block text-center text-sm text-gray-500 mt-3 hover:text-black">Continue Shopping</Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div> : <Login />}
    </>
  );
};

export default Cart;