import React from 'react'
import './Card.scss'
const Card = () => {
  return (
    <div className='Card__cont'>
        <div className='Card__title-cont'>
            <h5>₹20,737 night</h5>
            <p>4.95 . 193Reviews</p>
        </div>
        <div className="Card__check-cont">
            <div>
            <p>Check-In</p>
            <h2>1/18/2024</h2>
            </div>
            <div>
            <p>Check-Out</p>
            <h2>1/18/2024</h2>
            </div>
        </div>
        <div className='Card__GUest'>
            <h2>GUESTS</h2>
            <p>1 guest</p>

        </div>
        <button className='Card__btn-res'>Reserve</button>
        <p>You won't be charged yet</p>
        <div>

        <table>
    <tr>
      <td>(0,0)</td>
      <td>Pice 100 *</td>
    </tr>
    <tr>
      <td>(0,1)</td>
      <td>Rs500</td>
    </tr>
  </table>
        </div>
    </div>
  )
}

export default Card
