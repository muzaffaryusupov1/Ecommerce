import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CloseIcon } from '../../../assets/icons'
import { Counter } from '../../../components'
import { decrement, increment } from '../../../store/slices/cart'

function CheckoutList() {
    const { items } = useSelector(state => state.cart)

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment(id))
    }

    const handleDecrement = () => {
        dispatch(decrement(id))
    }

    return (
        <div className="checkout-list">
            {
                items.map(item => (
                    <div className='checkout-list__wrap' key={item.id}>
                        <div className="checkout-list__image">
                            <img src={item.mainImage} alt={item.title} />
                        </div>
                        <div className="checkout-list__content">
                            <div className="checkout-list__row">
                                <p className="checkout-list__title">{item.model}</p>
                                <p className="checkout-list__price">{item.price.toLocaleString()} UZS</p>
                                <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} count={item.qty} />
                            </div>
                            <button className='checkout-list__btn'>
                                <CloseIcon />
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CheckoutList