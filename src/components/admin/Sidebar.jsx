import { useNavigate } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { IoFastFoodSharp } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
const Sidebar = () => {
    const nav = useNavigate();
  return (
    <div className="flex flex-col  h-screen bg-gray-800">
        <div className='flex flex-col items-center py-3 px-10'>
        <p onClick={() => nav('/')} className="text-white font-semibold text-3xl">burger<span className="text-orange-500">Hut</span></p>
        <p className='text-white'>Admin Panel</p>
        </div>
        <div className='h-0.5 bg-gray-600 w-full'></div>
        <div className='px-1 flex flex-col gap-8 mt-5 text-gray-300'>
            <p className='flex flex-row gap-2 items-center'><span><MdDashboard size={22}/></span><span>DashBoard</span></p>
            <p className='flex flex-row gap-2 items-center' onClick={() => {nav('/admin/users')}}><span><LuUsers size={22}/></span><span>Users</span></p>
            <p className='flex flex-row gap-2 items-center' onClick={() => {nav('/admin/food')}}><span><IoFastFoodSharp size={22}/></span><span>Foods</span></p>
            <p className='flex flex-row gap-2 items-center' onClick={() => {nav('/admin/create/food')}}><span><IoMdAddCircleOutline size={22}/></span><span>Add Foods</span></p>
            <p className='flex flex-row gap-2 items-center' onClick={() => {nav('/admin/orders')}}><span><FiShoppingBag size={22}/></span><span>Orders</span></p>
        </div>
        <div className='fixed bottom-0 left-0 p-5'>
            <p>Logout</p>
        </div>
    </div>
  )
}

export default Sidebar