import React from 'react'
interface FooterProps{
  price: string,
}

const Price = ({price}:FooterProps) => {
  return (
    <div className="footer">
      <h2 className="price">₹{price}</h2>
      <button className="buy">Buy</button>
    </div>
  )
}

export default Price