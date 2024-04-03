import React from 'react'
import {tableData} from "../utils/tableData";
import search from "../images/search.png"

const ProductTable = () => {
    const tableInfo = tableData;
    return (
        <div className='productTable'>
            <div className='bg-white py-5 mt-8'>
                <div className='headerPart flex justify-between px-5 pb-7'>
                    <h2 className='text-xl font-bold'>Product Sell</h2>
                    <div className='flex'>
                        <div className='bg-gray-50 flex items-center py-2 px-1'>
                            <button className='border-0 bg-none'><img className='w-5 mr-1' src={search}/></button><input placeholder="Search" type="search" className='text-sm rounded bg-gray-50'/>
                        </div>
                        <select className='text-sm rounded bg-gray-50 ml-3 w-36 text-gray-400 py-2 px-1'>
                            <option>Last 30 days</option>
                            <option>Value_1</option>
                            <option>Value_2</option>
                        </select>
                    </div>
                </div>
                <table className='w-full'>
                    <thead className='text-sm text-gray-400 border-b pb-5'>
                        <td className='text-left pl-5 pb-5'>Product Name</td>
                        <td className='text-center pb-5'>Stock</td>
                        <td className='text-center pb-5'>Price</td>
                        <td className='text-center pb-5'>Total Sales</td>
                    </thead>
                    <tbody>
                        {
                            tableInfo.map((item, index)=> {
                                return (
                                    <tr className='pt-4' key={index}>
                                        <td className='flex pt-5 pl-5'>
                                            <img className='w-20 rounded-md mr-5 ' src={item.image}/>
                                            <div>
                                                <p className='font-bold'>{item.title}</p>
                                                <p className='text-xs text-gray-400'>{item.subTitle}</p>
                                            </div>
                                        </td>
                                        <td className='text-sm text-center'>{item.stock} in stock</td>
                                        <td className='text-sm text-center font-bold'>${item.price}</td>
                                        <td className='text-sm text-center'>{item.sales}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductTable
