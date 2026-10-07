import React, { useEffect } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRegStar } from "react-icons/fa6";

const Products = ({ products }) => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    return (
        <div className="px-2 md:px-10 lg:px-20 mt-5 flex flex-row gap-5">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-10">
                {products &&
                    products.map((product, index) => (
                        <motion.div
                            key={product._id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.08,
                            }}
                            onClick={() => nav(`/product/detail/${product._id}`)}
                            className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={product.images[0].file_name}
                                    alt={product.name}
                                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Discount */}
                                <span className="absolute left-3 top-3 rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
                                    50% OFF
                                </span>

                                {/* Rating */}
                                <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-md bg-gray-600 px-2 py-1 text-xs font-semibold text-white">
                                    ⭐ {product.ratings}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="gap-2 p-2 md:p-4">
                                <h3 className="line-clamp-1 text-lg font-semibold text-gray-800">{product.name}</h3>
                                <p className="line-clamp-2 text-sm text-gray-500 hidden md:flex">{product.description}</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-black"> ₹{product.price}</span>
                                    <span className="text-sm text-gray-400 line-through">₹{product.price * 2}</span>
                                </div>
                                {/* Reviews */}
                                <div className="flex items-center justify-between pt-2">
                                    <p className="text-sm text-gray-500">{product.noOfReviews} Reviews</p>
                                    <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800" onClick={(e) => {
                                            e.stopPropagation();
                                            nav(`/product/detail/${product._id}`);
                                        }}>View</button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
            </div>
        </div>
    )
}

export default Products