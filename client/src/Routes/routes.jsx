import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../Layout/dashboardlayout'
import MainLayout from '../layout/mainlayout'
import Dashboard from '../page/dashboard'
import ErrorPage from '../page/erreo'
import Home from '../page/home'
import Login from '../page/login'

const Routers = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    },
    {
        path:"/dashboard",
        element:<DashboardLayout></DashboardLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            }
        ]
    }
   
])

export default Routers