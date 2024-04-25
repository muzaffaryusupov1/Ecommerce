import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from './CartProduct'
import { ArrowBackIcon } from '../../../assets/icons'
import { useNavigate } from 'react-router-dom'
import { removeAll } from '../../../store/slices/cart'

function CartList() {
  const { items } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleRemoveAll = () => {
    dispatch(removeAll(items.id));
  }

  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate('/')
  }

  return (
    <div className='cart-list'>
      {
        items.map(item => (
          <CartProduct product={item} key={item.id} />
        ))
      }
      <div className="cart-buttons">
        <button className='cart-back__button' onClick={navigateToHome}>
          <span className='cart-back__icon'>
            <ArrowBackIcon />
          </span>
          Back to shop
        </button>
        <button className='cart-removeall__button' onClick={handleRemoveAll}>
          Remove all
        </button>
      </div>
    </div>
  )
}

export default CartList