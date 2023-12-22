import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import TopDashbar from '../components/topdashbar'

const DashboardLayout = () => {
    return (
        <div className='flex'>
           <div className='w-[250px]'>
           <Sidebar></Sidebar>
           </div>
            <div className='mt-6'>
           <TopDashbar></TopDashbar>
            <Outlet></Outlet>
            </div>
        </div>
    )
}

export default DashboardLayout