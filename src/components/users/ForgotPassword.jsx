import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword, clearAuthError } from '../../actions/userAction';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { loading, error, user, message } = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email',email);
    dispatch(forgotPassword(formData));
  };

  useEffect(() => {
    if(message){
        toast(message,{
            type : 'success',
            position : 'bottom-center'
        })
        setEmail("");
        return;
    }
    if(error){
        toast(error,{
            type : 'error',
            position : 'bottom-center',
            onOpen : () => {dispatch(clearAuthError())}
        })
        return;
    }
  },[message, error, dispatch]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Forgot Password</h2>
        <p className="text-center text-gray-500 mb-6">Enter your email address to receive a password reset link.</p>
        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input type="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"/>
          </div>
          <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition duration-300">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;