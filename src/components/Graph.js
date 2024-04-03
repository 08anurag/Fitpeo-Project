import React from 'react'
import Bargraph from './Bargraph'
import Piechart from './Piechart'

const Graph = () => {
  return (
    <div className='grid graph '>
        <div className='bg-white rounded p-5'>
          <div className='flex justify-between pb-5'>
            <div>
              <h2 className='text-xl font-bold'>Overview</h2>
              <p className='text-sm text-gray-400'>Monthly Earning</p>
            </div>
            <div>
            <select className='text-sm rounded bg-gray-50 ml-3 w-24 text-gray-400 py-2 px-1'>
              <option>Quarterly</option>
              <option>Value_1</option>
              <option>Value_2</option>
            </select> 
            </div>
          </div>
          <Bargraph/>
        </div>
        <div className='bg-white rounded p-5'>
          <div className='pb-5'>
            <h2 className='text-xl font-bold'>Customers</h2>
            <p className='text-sm text-gray-400'>Customers that buy products</p>
          </div>
          <Piechart/>
        </div>
    </div>
  )
}

export default Graph
