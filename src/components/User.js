import React from 'react'
import user from "../images/user.png"
import drop from "../images/down-arrow.png"

const User = () => {
    return (
        <div className='flex items-center justify-between bg-blue-900 bg-opacity-80 p-2 rounded'>
            <div className='flex items-center'>
                <div className='rounded-full p-2 border '>
                    <img className='w-5 h-auto' src={user}/>
                </div>
                <div className='ml-2'>
                    <h2 className='font-bold text-sm'>Evano</h2>
                    <p className='text-xs text-gray-50'>Project Manager</p>
                </div>
            </div>
            <img src={drop} className='w-8'/>
        </div>
    )
}

export default User
