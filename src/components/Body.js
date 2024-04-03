import React from 'react'
import Header from "./Header"
import CardSection from "./CardSection"
import Graph from './Graph'
import ProductTable from './ProductTable'

const Body = () => {
    
    return (
        <div className='p-5 bg-gray-100'>
            <Header/>
            <CardSection/>
            <Graph/>
            <ProductTable/>
        </div>
    )
}

export default Body
