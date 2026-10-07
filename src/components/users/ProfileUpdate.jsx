import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthError, clearUpdateProfile, updateProfile } from "../../actions/userAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProfileUpdate = () => {
    const { loading, user, isUpdated, error } = useSelector((state) => state.authState);
    const nav = useNavigate()
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        dispatch(updateProfile(formData));
    }
    useEffect(() => {
        if(user){
            setName(user.name);
            setEmail(user.email);
        }
        if(isUpdated){
            toast.success('Profile Updated Successfully',{
                position : 'bottom-center'
            });
            dispatch(clearUpdateProfile());
            nav('/profile')
            return;
        }
        if(error){
            console.log(error);
            toast(error,{
                position : 'bottom-center',
                type : 'error',
                onOpen : () => {dispatch(clearAuthError())}
            })
            return;
        }
    },[isUpdated, error, user, dispatch])
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md">
                <form onSubmit={submitHandler} className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 space-y-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800">Update Profile</h2>
                        <p className="text-gray-500 text-sm mt-2">Keep your account information up to date.</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter your full name" className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email" className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
                    </div>
                    <button type="submit" className="w-full rounded-xl bg-black py-3 text-white font-semibold transition duration-300 hover:bg-gray-800 active:scale-[0.98]">Update Profile</button>
                </form>
            </div>
        </div>
    );
};

export default ProfileUpdate;