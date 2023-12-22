import { ArrowLeftToLine, BookCopy, CircleUserRound } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='w-[250px] h-[100vh] bg-white border-r-[1px] border-gray-400 fixed z-50 flex flex-col'>
        <div className='bg-[#8ef0dc] m-4 h-40 justify-center items-center text-center rounded-md '>
            <h1 className='text-3xl font-bold pt-[55px]'>Task Manager</h1>
            <img src="" alt="" />
        </div>

        <div className='m-4 flex-1'>
        <ul className='flex flex-col gap-3'>
                  <NavLink to="/dashboard">
                         
                         <li className='flex gap-2  h-12 items-center px-2  font-semibold'>
                             <BookCopy />
                             <p>Dashboard</p>
                         </li>
                     </NavLink>   
                  
        </ul>  
        </div>

        <div className='m-2 rounded-md p-4 bg-[#8ef0dc]'>
                    <ul className='flex flex-col gap-4'>
                    <NavLink 
                        to="/dashboard/myprofile"
                        className={({ isActive }) =>
                                    isActive ? "bg-[#8ef0dc] rounded-lg" : ""
                                }
                                >
                        
                            <li className='flex gap-2  h-12 items-center px-2 bg-white rounded-lg  font-semibold'>
                            <CircleUserRound color="#00A9FF"/>
                                <p>Profile</p>
                            </li>
                        </NavLink>
                    <NavLink 
                        to="/"
                        className={({ isActive }) =>
                                    isActive ? "bg-[#8ef0dc] rounded-lg" : ""
                                }
                                >
                        
                            <li className='flex gap-2  h-12 items-center px-2 bg-white rounded-lg  font-semibold'>
                            <ArrowLeftToLine color="#00A9FF"/>
                                <p>Go To Home</p>
                            </li>
                        </NavLink>
                    </ul>
                </div>
        </div>
    )
}

export default Sidebar