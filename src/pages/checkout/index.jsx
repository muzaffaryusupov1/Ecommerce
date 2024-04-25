import React from 'react'
import CheckoutInfo from './components/CheckoutInfo'
import CheckoutList from './components/CheckoutList'

function CheckoutPage() {
  return (
    <div className='checkout'>
      <div className="container">
        <div className="checkout-wrapper">
          <CheckoutInfo />
          <CheckoutList />
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage