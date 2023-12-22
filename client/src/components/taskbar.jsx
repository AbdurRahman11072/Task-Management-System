import { Plus } from 'lucide-react'
import React from 'react'

const Taskbar = () => {
    return (
        <div className='my-12 flex gap-10 mx-8 '>
            
            <div className=' btn bg-[#2fe7b9] text-xl font-bold text-white rounded-2xl py-1 mt-2 '>
                <Plus size={25} fontWeight={700}></Plus>
                <h1>New</h1>
            </div>
            
            <div className='w-full h-16 bg-white rounded-2xl shadow-xl'>
                <ul className='flex gap-10 px-5 py-3'>
                    <li className='text-xl font-semibold'>All</li>
                    <li className='text-xl font-semibold'>To Do</li>
                    <li className='text-xl font-semibold'>Ongoing</li>
                    <li className='text-xl font-semibold'>Done</li>
                </ul>
            </div>
        </div>
    )
}

export default Taskbar