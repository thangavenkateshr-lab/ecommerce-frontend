import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, resetPassword } from "../../actions/userAction";
import { toast } from 'react-toastify';

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();
  const { isAuthenticate, error } = useSelector((state)=>state.authState);
  const { token } = useParams();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const formData = new FormData();
    formData.append('password', password);
    formData.append('confirmPassword',confirmPassword);
    dispatch(resetPassword(formData, token));
  };

  useEffect(() => {
    if(isAuthenticate){
      toast('Password Reset Successfully',{
        type : 'success',
        position : 'bottom-center'
      })
      nav('/')
    }
    if(error){
      toast(error,{
        type : 'error',
        position : 'bottom-center',
        onOpen : () => {dispatch(clearAuthError())}
      })
    }
  } , [isAuthenticate,dispatch,error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Reset Password</h2>
        <p className="text-center text-gray-500 mb-6">Create a new password for your account.</p>
        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">New Password</label>
            <input type={showPassword ? "text" : "password"} placeholder="Enter new password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"/>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <input type={showPassword ? "text" : "password"} placeholder="Confirm new password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"/>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="showPassword" checked={showPassword} onChange={() => setShowPassword(!showPassword)}/>
            <label htmlFor="showPassword" className="text-gray-600 text-sm cursor-pointer">Show Password</label>
          </div>
          <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition duration-300">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;