import React from 'react'
import Sidebar from './Sidebar'
import MetaData from '../layouts/MetaData'
import FoodTable from './FoodTable'
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className='flex flex-row'>
    <MetaData title={"Admin Panel"}/>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout