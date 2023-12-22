import { Clock, MessageCircleMore, Paperclip } from 'lucide-react'
import React from 'react'

const TaskCard = () => {
    return (
       <div className='flex mx-5 gap-6 '>

        <div className='w-[355px] p-5 rounded-2xl shadow-2xl border-[1px] border-gray-500 '>

            <div className='flex gap-3'>
                <h1 className='w-[300px] text-xl font-bold'>This is my First task Im going to blow it up</h1>
                <select className='h-9 px-2 bg-[#8ef0dc] rounded-3xl font-medium'>
                    <option>Ongoing</option>
                    <option>Process</option>
                    <option>complete</option>
                </select>
            </div>

            <div className='mt-5 mb-10 text-gray-500'>
           <h1>
           Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management 
           </h1>
            </div>

            <div className='flex gap-2'>
                <Clock size={28} ></Clock>
                <h1 className='text-md font-semibold'><span>Deadline : </span>11th  - 15th August 2023</h1>
            </div>

            <div className='mt-5'>
                <div className='flex gap-4'>
               <h1 className='flex gap-2 items-center'> <MessageCircleMore size={28}/>10</h1>
               <h1 className='flex gap-2 items-center'> <Paperclip size={28}/>10</h1>
                </div>
            </div>

            <div>
                 
            </div>
        </div>
     
        <div className='w-[355px] p-5 rounded-2xl shadow-2xl border-[1px] border-gray-500 '>

            <div className='flex gap-3'>
                <h1 className='w-[300px] text-xl font-bold'>This is my First task Im going to blow it up</h1>
                <select className='h-9 px-2 bg-[#8ef0dc] rounded-3xl font-medium'>
                    <option>Ongoing</option>
                    <option>Process</option>
                    <option>complete</option>
                </select>
            </div>

            <div className='mt-5 mb-10 text-gray-500'>
           <h1>
           Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management 
           </h1>
            </div>

            <div className='flex gap-2'>
                <Clock size={28} ></Clock>
                <h1 className='text-md font-semibold'><span>Deadline : </span>11th  - 15th August 2023</h1>
            </div>

            <div className='mt-5'>
                <div className='flex gap-4'>
               <h1 className='flex gap-2 items-center'> <MessageCircleMore size={28}/>10</h1>
               <h1 className='flex gap-2 items-center'> <Paperclip size={28}/>10</h1>
                </div>
            </div>

            <div>
                 
            </div>
        </div>
     
        <div className='w-[355px] p-5 rounded-2xl shadow-2xl border-[1px] border-gray-500 '>

            <div className='flex gap-3'>
                <h1 className='w-[300px] text-xl font-bold'>This is my First task Im going to blow it up</h1>
                <select className='h-9 px-2 bg-[#8ef0dc] rounded-3xl font-medium'>
                    <option>Ongoing</option>
                    <option>Process</option>
                    <option>complete</option>
                </select>
            </div>

            <div className='mt-5 mb-10 text-gray-500'>
           <h1>
           Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management 
           </h1>
            </div>

            <div className='flex gap-2'>
                <Clock size={28} ></Clock>
                <h1 className='text-md font-semibold'><span>Deadline : </span>11th  - 15th August 2023</h1>
            </div>

            <div className='mt-5'>
                <div className='flex gap-4'>
               <h1 className='flex gap-2 items-center'> <MessageCircleMore size={28}/>10</h1>
               <h1 className='flex gap-2 items-center'> <Paperclip size={28}/>10</h1>
                </div>
            </div>

            <div>
                 
            </div>
        </div>
     

        

       </div>
    )
}

export default TaskCard