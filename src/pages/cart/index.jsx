import React from 'react'
import { CartInfo, CartList } from './components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function CartPage() {
  const { items } = useSelector(state => state.cart)
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }


  return (
    <div className='cart-page'>
      <div className="container">
        {
          items.length <= 0 ?
            <div className='cart-empty'>
              <div className="cart-empty__image">
                <img src="/images/empty-cart.webp" alt="empty cart image" />
              </div>
              <div className="cart-empty__content">
                <h3 className="cart-empty__title">Savatda hozircha mahsulot yo'q.</h3>
                <p className="cart-empty__subtitle">Bosh sahifadagi termalardan boshlang yoki kerakli mahsulotni qidiruv orqali toping.</p>
                <button className="cart-empty__button" onClick={handleBack}>Bosh sahifa</button>
              </div>
            </div>
            :
            <>
              <h1 className='cart-page__title'>Savatcha ({items.length})</h1>
              <div className="cart-page__row">
                <CartList />
                <div className="cart-info">
                  <CartInfo />
                </div>
              </div>
            </>
        }
      </div>
    </div>
  )
}

export default CartPage
