import React from 'react'
import Card from "./Card"
import cardData from '../utils/cardData'

const CardSection = () => {
  const info = cardData
  return (
    <div className='cardSection my-7'>
      {
        info.map((item, index)=> {
          return <Card key={index} data={item}/>
        })
      }
      
    </div>
  )
}

export default CardSection
