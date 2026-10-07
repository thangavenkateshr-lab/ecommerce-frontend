import React, { useState, useEffect } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const FilterProducts = ({ products, category }) => {
    const dispatch = useDispatch();
    const nav = useNavigate();
const [selectedPrice, setSelectedPrice] = useState("");
    return (
        <div className="px-2 md:px-10 lg:px-20 mt-5 flex flex-col md:flex-row gap-5">
            <div className='w-full md:w-80  bg-white rounded-xl shadow-lg p-2'>
                <p className='text-xl font-semibold font-mono'>Price</p>
                <div className=' flex flex-row md:flex-col justify-between'>
                    <div onClick={() => {setSelectedPrice("999-1999"); nav(`/filter/${category}/?gt=359&lt=1999`)}} className='flex flex-row gap-0.5 items-center'><div className={`w-3 h-3 border rounded ${selectedPrice === "999-1999" ? "bg-black border-black" : ""}`}></div><p className='font-semibold'>$999-$1999</p></div>
                    <div onClick={() => {setSelectedPrice("1999-3999"); nav(`/filter/${category}/?gt=1999&lt=3999`)}} className='flex flex-row gap-0.5 items-center'><div className={`w-3 h-3 border rounded ${selectedPrice === "1999-3999" ? "bg-black border-black" : ""}`}></div><p className='font-semibold'>$1999-$3999</p></div>
                    <div onClick={() => {setSelectedPrice("3999-5999"); nav(`/filter/${category}/?gt=3999&lt=5999`)}} className='flex flex-row gap-0.5 items-center'><div className={`w-3 h-3 border rounded ${selectedPrice === "3999-5999" ? "bg-black border-black" : ""}`}></div><p className='font-semibold'>$3999-$5999</p></div>
                    <div onClick={() => {setSelectedPrice("5999-999999"); nav(`/filter/${category}/?gt=5999&lt=999999`)}} className='flex flex-row gap-0.5 items-center'><div className={`w-3 h-3 border rounded ${selectedPrice === "5999-999999" ? "bg-black border-black" : ""}`}></div><p className='font-semibold'>$5999-more</p></div>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-7 w-full">
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
                            <div className="relative overflow-hidden">
                                <img src={product.images[0].file_name} alt={product.name} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                                <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">50% OFF</span>
                                <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-md bg-green-600 px-2 py-1 text-xs font-semibold text-white">⭐ {product.ratings}</div>
                            </div>
                            <div className="space-y-2 p-4">
                                <h3 className="line-clamp-1 text-lg font-semibold text-gray-800">{product.name}</h3>
                                <p className="line-clamp-2 text-sm text-gray-500">{product.description}</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-black">₹{product.price}</span>
                                    <span className="text-sm text-gray-400 line-through">₹{product.price * 2}</span>
                                </div>
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

export default FilterProducts;