import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser, HiOutlineEnvelope, HiOutlineLockClosed, HiOutlineCamera, } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthError, register } from "../../actions/userAction";
import { toast } from "react-toastify";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("https://cdn-icons-png.flaticon.com/512/149/149071.png");

  const onChange = (e) => {
    if (e.target.name == 'avatar') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState == 2) {
          setAvatarPreview(reader.result);
          setAvatar(e.target.files[0]);
        }
      }
      reader.readAsDataURL(e.target.files[0]);
    }
    else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  }

  const dispatch = useDispatch();
  const { error, loading } = useSelector((state)=>state.authState);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name',userData.name);
    formData.append('email',userData.email);
    formData.append('password',userData.password);
    dispatch(register(formData));
  }

  useEffect(()=>{
    console.log(error);
    if(error){
      toast(error,{
        position : 'bottom-center',
        type : 'error',
        onOpen : () => {dispatch(clearAuthError())}
      })
    }
  },[error, dispatch])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-6xl mt-15 bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
        <div className="hidden lg:flex relative bg-linear-to-br from-indigo-600 via-violet-600 to-purple-700 p-14 items-center justify-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-72 h-72 rounded-full bg-white top-10 left-10 blur-3xl"></div>
            <div className="absolute w-60 h-60 rounded-full bg-pink-400 bottom-10 right-10 blur-3xl"></div>
          </div>
          <div className="relative z-10 text-center text-white">
            <img src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=800&q=80" alt="" className="w-96 rounded-2xl shadow-2xl mb-8" />
            <h2 className="text-4xl font-bold mb-4">Join Our Store</h2>
            <p className="text-lg text-gray-100 leading-relaxed">
              Create your account to discover premium collections,
              exciting deals and seamless shopping experience.</p>
          </div>
        </div>
        <div className="flex items-center justify-center p-8 lg:p-14">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-800">Create Account</h1>
              <p className="text-gray-500 mt-2">Register to start shopping with us.</p>
            </div>
            <form onSubmit={submitHandler} className="space-y-5">
              <div className="flex justify-center">
                <label className="relative cursor-pointer group">
                  <img src={avatarPreview} alt="" className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500 shadow-lg" />
                  <div className="absolute bottom-1 right-1 bg-indigo-600 w-9 h-9 rounded-full flex items-center justify-center text-white group-hover:scale-110 duration-300"><HiOutlineCamera size={18} /></div>
                  <input type="file" name="avatar" onChange={onChange} />
                </label>
              </div>
              <div className="relative">
                <HiOutlineUser className="absolute left-4 top-4 text-gray-400" size={20} />
                <input type="text" name="name" onChange={onChange} placeholder="Full Name" className="w-full h-14 rounded-xl border border-gray-300 pl-12 pr-4 outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 transition" />
              </div>
              <div className="relative">
                <HiOutlineEnvelope className="absolute left-4 top-4 text-gray-400" size={20} />
                <input type="email" name="email" onChange={onChange} placeholder="Email Address" className="w-full h-14 rounded-xl border border-gray-300 pl-12 pr-4 outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 transition" />
              </div>
              <div className="relative">
                <HiOutlineLockClosed className="absolute left-4 top-4 text-gray-400" size={20} />
                <input name="password" onChange={onChange} type="password" placeholder="Password" className="w-full h-14 rounded-xl border border-gray-300 pl-12 pr-4 outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 transition" />
              </div>
              <button className="w-full h-14 rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 text-white font-semibold text-lg hover:scale-[1.02] duration-300 shadow-lg hover:shadow-indigo-300">Create Account</button>
            </form>
            <div className="mt-8 text-center">
              <p className="text-gray-600">Already have an account?<Link to="/login" className="text-indigo-600 font-semibold hover:text-violet-600 ml-2">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;