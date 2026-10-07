import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineShoppingBag, MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiChevronDown, FiUser, FiLogOut } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";
import { SlHome } from "react-icons/sl";
import Categories from "./Categories";

const Header = () => {
  const nav = useNavigate();

  const { isAuthenticate } = useSelector((state) => state.authState);

  const [openProfile, setOpenProfile] = useState(false);
  const [show, setShow] = useState(false);
  const profileRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const closeMenu = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);

    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
    setOpenProfile(false);
     nav("/login");
  };

  return (
    <>
    <div className="flex flex-col gap-5 bg-white shadow-lg px-5 lg:px-20 fixed top-0 w-full py-2 md:py-5 z-50">
      <div className="flex flex-col gap-1 md:gap-3">
      <div className="flex flex-row justify-between items-center">
        {/* Logo */}
          <p className="text-gray-500 md:text-xl text-[16px] font-semibold">
            Mani<span className="text-black">Mart</span>
          </p>

        <div className="hidden md:flex"><Search /></div>

        {/* Right Side */}
        <div className="hidden md:flex flex-row gap-4 md:gap-5 lg:gap-8 items-center">

          <div className="flex flex-col gap-0.5 items-center cursor-pointer" onClick={()=>{nav('/wishlist')}}>
            <IoMdHeartEmpty />
            <p className="text-sm font-semibold hidden md:block">WishList</p>
          </div>

          <div className="flex flex-col gap-0.5 items-center cursor-pointer" onClick={()=>nav('/cart')}>
            <HiOutlineShoppingBag />
            <p className="text-sm font-semibold hidden md:block">Cart</p>
          </div>

          <div className="flex flex-col gap-0.5 items-center cursor-pointer">
            <MdOutlineShoppingCart />
            <p className="text-sm font-semibold hidden md:block">Orders</p>
          </div>

          {isAuthenticate ? (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setOpenProfile(!openProfile)}
                className="flex items-center gap-1"
              >
                <div className="flex flex-col items-center">
                  <CgProfile className="text-xl" />
                  <p className="text-sm font-semibold hidden md:block">
                    Profile
                  </p>
                </div>

                <FiChevronDown
                  className={`hidden md:block transition duration-300 ${
                    openProfile ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openProfile && (
                <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">

                  <button
                    onClick={() => {
                      nav("/profile");
                      setOpenProfile(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
                  >
                    <FiUser />
                    My Profile
                  </button>

                  <button onClick={logoutHandler} className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition"><FiLogOut />Logout</button>

                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-0.5 items-center cursor-pointer" onClick={()=>nav('/login')}>
            <CgProfile />
            <p className="text-sm font-semibold hidden md:block">Login</p>
          </div>
          )}
        </div>
        <FaBars className="flex md:hidden cursor-pointer" onClick={()=>{setShow(!show)}}/>
      </div>
      <ul className="hidden md:flex flex-row justify-between">
          <li><NavLink className={({isActive})=>`relative pb-1 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gray-500 after:transition-all after:duration-300 ${isActive?"text-gray-500 after:w-full":"hover:text-gray-500 after:w-0 hover:after:w-full"}`} to="/">All</NavLink></li>
          <li><NavLink className={({isActive})=>`relative pb-1 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gray-500 after:transition-all after:duration-300 ${isActive?"text-gray-500 after:w-full":"hover:text-gray-500 after:w-0 hover:after:w-full"}`} to="/category/Dress">Dress</NavLink></li>
          <li><NavLink className={({isActive})=>`relative pb-1 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gray-500 after:transition-all after:duration-300 ${isActive?"text-gray-500 after:w-full":"hover:text-gray-500 after:w-0 hover:after:w-full"}`} to="/category/Shoes">Shoes</NavLink></li>
          <li><NavLink className={({isActive})=>`relative pb-1 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gray-500 after:transition-all after:duration-300 ${isActive?"text-gray-500 after:w-full":"hover:text-gray-500 after:w-0 hover:after:w-full"}`} to="/category/Watches">Watches</NavLink></li>
          <li><NavLink className={({isActive})=>`relative pb-1 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gray-500 after:transition-all after:duration-300 ${isActive?"text-gray-500 after:w-full":"hover:text-gray-500 after:w-0 hover:after:w-full"}`} to="/category/Mobiles">Mobiles</NavLink></li>
          <li><NavLink className={({isActive})=>`relative pb-1 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gray-500 after:transition-all after:duration-300 ${isActive?"text-gray-500 after:w-full":"hover:text-gray-500 after:w-0 hover:after:w-full"}`} to="/category/Laptops">Laptops</NavLink></li>
          <li><NavLink className={({isActive})=>`relative pb-1 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gray-500 after:transition-all after:duration-300 ${isActive?"text-gray-500 after:w-full":"hover:text-gray-500 after:w-0 hover:after:w-full"}`} to="/category/Speakers">Speakers</NavLink></li>
          <li><NavLink className={({isActive})=>`relative pb-1 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gray-500 after:transition-all after:duration-300 ${isActive?"text-gray-500 after:w-full":"hover:text-gray-500 after:w-0 hover:after:w-full"}`} to="/category/Headphones">Headphones</NavLink></li>
        </ul>
      <div className="flex md:hidden w-full"><Search/></div>
      </div>
    </div>
    <div className="flex flex-row text-xl z-50 w-full justify-between px-5 md:hidden fixed bottom-0 left-0  py-2 bg-white shadow-lg">
      <SlHome onClick={() => {nav('/')}}/>
      <IoMdHeartEmpty onClick={()=>{nav('/wishlist')}}/>
      <MdOutlineShoppingCart onClick={()=>nav('/cart')}/>
      <MdOutlineShoppingBag/>
      <CgProfile  onClick={() => nav('/profile')}/>
    </div>
    <div><Categories show={show} setShow={setShow}/></div>
    </>
  );
};

export default Header;