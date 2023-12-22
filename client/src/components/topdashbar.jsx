import { CircleUserRound, Mail, Search } from 'lucide-react'
import React from 'react'

const TopDashbar = () => {
    return (
        <div className=' flex gap-4  border-b-[1px] border-gray-400 mx-auto pb-4'>
            <div className='ml-4'>
            <h1 className='text-3xl text-gray-500 font-extrabold '>Dashboard</h1>
            </div>
            <div className='ml-[180px]'>
                <Search className='absolute mt-2 ml-2'></Search>
                <input  className='w-96 h-10 rounded-xl border-[1px] border-gray-300' type='text'></input>
            </div>
            <div className='flex gap-4 mt-1 ml-28 p-1 '>
                <h1><Mail color='#9096a7' size={32} /></h1>
            <h1 className='text-3xl'><CircleUserRound color='#9096a7' size={32}/></h1>
            <h1 className='text-gray-500 font-bold p-1'>MD Abdur Rahman</h1>
                
            </div>
        </div>
    )
}

export default TopDashbar