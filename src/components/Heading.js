import React from 'react'
import dashImg from "../images/hexagon.svg"

const Heading = () => {
    return (
        <div className='flex items-center'>
            <img src={dashImg} alt="dashboard" className='w-12'/>
            <h1 className='font-bold text-2xl'>Dashboard</h1>
        </div>
    )
}

export default Heading
