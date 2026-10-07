import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useEffect, useState } from "react";
import MetaData from '../layouts/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, login } from '../../actions/userAction';
import { toast } from 'react-toastify';
import Loader from '../layouts/Loader';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loading, error, isAuthenticate } = useSelector((state)=>state.authState);
    const nav = useNavigate();
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    useEffect(()=>{
        if(isAuthenticate){
            nav('/')
        }
        if(error){
            toast(error,{
                position : 'bottom-center',
                type : 'error',
                onOpen : () => {dispatch(clearAuthError())}
            })
            return;
        }
    },[error, isAuthenticate,dispatch]);
    console.log("isAuthenticate =", isAuthenticate);
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-10">
            <MetaData title={`Login`}/>
            <div className="relative w-full max-w-md">
                <div className="absolute -top-14 right-0">
                    <Link to="/register" className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-lg shadow-sm hover:bg-gray-900 hover:text-white transition duration-300 font-medium">Register</Link>
                </div>
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                    <div className="flex justify-center">
                        <div className="bg-gray-900 p-4 rounded-full">
                            <HiOutlineShoppingBag className="text-white text-3xl" />
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
                        <p className="text-gray-500 mt-2">Login to continue shopping with us.</p>
                    </div>
                    <form onSubmit={submitHandler} className="mt-8 space-y-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                            <div className="relative">
                                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 transition" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Password</label>
                            <div className="relative">
                                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your password" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 transition" />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Link to="/password/forgot" className="text-sm text-gray-600 hover:text-gray-900 font-medium">Forgot Password?</Link>
                        </div>
                        <button  type="submit" className="w-full bg-gray-900 hover:bg-black text-white py-3 rounded-xl font-semibold text-lg transition duration-300 shadow-lg hover:shadow-xl">Login</button>
                    </form>
                    <div className="mt-8 text-center text-gray-500">Don't have an account?{" "}
                        <Link to="/register" className="font-semibold text-gray-900 hover:underline">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;