import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function CartInfo() {
  const { items } = useSelector(state => state.cart)

  const subtotal = items.reduce((a, b) => a + (b.oldPrice * b.qty), 0)
  const discount = items.reduce((a, b) => a + ((b.oldPrice - b.price) * b.qty), 0)
  const total = items.reduce((a, b) => a + (b.price * b.qty), 0)

  return (
    <div className='fbehus'>
      <div className='cart-coupon'>
        <h3 className="cart-coupon__title">Have a coupon?</h3>
        <input type="text" placeholder='Add coupon' className='cart-coupon__input' />
        <button className='cart-coupon__btn'>Apply</button>
      </div>
      <div className='cart-checkout'>
        <div className="cart-checkout__top">
          <div className="cart-checkout__row">
            <p className="cart-checkout__subtotal">Subtotal:</p>
            <span className='cart-checkout__price'>{subtotal.toLocaleString()} UZS</span>
          </div>
          <div className="cart-checkout__row">
            <p className="cart-checkout__subtotal">Discount:</p>
            <span className='cart-checkout__price red'>- {discount.toLocaleString()} UZS</span>
          </div>
        </div>
        <div className="cart-checkout__row two">
          <p className="cart-checkout__total">Total:</p>
          <span className="cart-checkout__text">{total.toLocaleString()} UZS</span>
        </div>
        <Link to={'/checkout'}>
          <button className='cart-checkout__btn'>Checkout</button>
        </Link>

        <div className='cart-checkout__icons'>
          <span>
            <img src="./images/cart-checkout/americanexpress.svg" alt="americanexpress icon" />
          </span>
          <span>
            <img src="./images/cart-checkout/mastercard.svg" alt="mastercard icon" />
          </span>
          <span>
            <img src="./images/cart-checkout/paypal.svg" alt="paypal icon" />
          </span>
          <span>
            <img src="./images/cart-checkout/visa.svg" alt="visa icon" />
          </span>
          <span>
            <img src="./images/cart-checkout/apple-pay.svg" alt="apple-pay icon" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default CartInfo