import React from 'react'
import Heading from './Heading'
import Menu from './Menu'
import User from "./User"

const Sidebar = () => {
    return (
        <div className=' bg-blue-950 text-white sidebar py-5 px-3 flex flex-col justify-between'>
            <div>
                <Heading/>
                <Menu/>
            </div>
            <User/>
        </div>
    )
}

export default Sidebar
