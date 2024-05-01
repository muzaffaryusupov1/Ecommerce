import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { modalOpen } from '../../../store/slices/modals'
import { useNavigate } from 'react-router-dom'

function CartInfo() {
  const { items } = useSelector(state => state.cart)
  const { isAuth } = useSelector(state => state.user)

  const subtotal = items.reduce((a, b) => a + (b.oldPrice * b.qty), 0)
  const discount = items.reduce((a, b) => a + ((b.oldPrice - b.price) * b.qty), 0)
  const total = items.reduce((a, b) => a + (b.price * b.qty), 0)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/checkout')
  }

  const handleCheckout = () => {
    toast.error('Registratsiya Bo\'lishingiz kerak')
    dispatch(modalOpen('registerModal'))
  }

  return (
    <div className='cart-checkout'>
      <div className="cart-checkout__top">
        <div className="cart-checkout__row">
          <p className="cart-checkout__subtotal">Summasi:</p>
          <span className='cart-checkout__price'>{subtotal.toLocaleString()} UZS</span>
        </div>
        <div className="cart-checkout__row">
          <p className="cart-checkout__subtotal">Chegirma:</p>
          <span className='cart-checkout__price red'>- {discount.toLocaleString()} UZS</span>
        </div>
      </div>
      <div className="cart-checkout__row two">
        <p className="cart-checkout__total">Jami:</p>
        <span className="cart-checkout__text">{total.toLocaleString()} UZS</span>
      </div>

      <button className='cart-checkout__btn' onClick={isAuth ? handleNavigate : handleCheckout}>Checkout</button>

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
  )
}

export default CartInfo