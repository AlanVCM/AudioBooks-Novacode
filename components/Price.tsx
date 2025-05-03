import React from 'react'
interface PriceProps{
    price: string,
}

const Price = ({price}:PriceProps) => {
  return (
    <div className="price-container">
        <h3 className="price">₹ {price}</h3>
        <button>Buy</button>
    </div>
  )
}

export default Price