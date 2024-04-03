import React from 'react'
import menuData from "../utils/menuData";
import right from "../images/next.png";

const Menu = () => {
    return (
        <div>
            <ul className='pt-5'>
            {
                menuData.map((item, index)=>{
                    return (
                        <li key={index} className='flex justify-between py-3 px-3'>
                                <div className='flex '>
                                    <img src={item.icon} className='w-5 h-auto'/>
                                    <span className='text-base ml-3'>{item.list}</span>
                                </div>
                                <img src={right} className='w-8'/>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Menu
