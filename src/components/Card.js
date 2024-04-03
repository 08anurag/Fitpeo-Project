import React from 'react'

const Card = ({data}) => {
    const {icon, title, value, growth, time, up} = data;
    
    return (
        <div className='flex bg-white p-3 items-center min-h-36 rounded-lg justify-evenly card'>   
            <div className='p-6 rounded-full bg-red-300 bg mr-2'>
                <img src={icon} className='w-14 h-auto'/>
            </div>
            <div>
                <p className='text-xs text-gray-400'>{title}</p>
                <h2 className='font-bold text- xl'>${value}k</h2>
                <p className='flex text-sm items-center'><img src={up} className='inline w-3 h-4'/>{growth}% this {time}</p>
            </div>
        </div>
    )
}

export default Card
