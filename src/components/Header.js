import React from 'react'
import hand from "../images/wave.png"
import search from "../images/search.png"

const Header = () => {
    return (
        <div className='flex justify-between header_part'>
            <p className='font-bold text-2xl'>Hello Shahrukh <img src={hand} className='inline w-6'/></p>
            <div className='bg-white flex items-center px-2 topSearch'>
            <button className='border-0 bg-none'><img className='w-5 mr-1' src={search}/></button><input placeholder="Search" type="search" className=' rounded'/></div>
        </div>
    )
}

export default Header
