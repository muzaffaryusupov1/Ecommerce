import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CloseIcon } from '../../../assets/icons'
import { removeCart } from '../../../store/slices/cart'
import { useNavigate } from 'react-router-dom'

function CheckoutList() {
    const { items } = useSelector(state => state.cart)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(removeCart(id))
    }

    const handleBack = () => {
        navigate('/')
    }

    return (
        <div className="checkout-list">
            <div className='checkout-list__wrap'>
                {
                    !!items.length ?
                        items.map(item => (
                            <div className="checkout-list__card" key={item.id}>
                                <div className="checkout-list__image">
                                    <img src={item.mainImage} alt={item.title} />
                                </div>
                                <div className="checkout-list__content">
                                    <div className="checkout-list__row">
                                        <p className="checkout-list__title">{item.title.split(' ').slice(0, 5).join(' ')}</p>
                                        <p className="checkout-list__price">{item.price.toLocaleString()} UZS</p>
                                    </div>
                                    <button className='checkout-list__btn' onClick={() => handleDelete(item.id)}>
                                        <CloseIcon />
                                    </button>
                                </div>
                            </div>
                        )) :
                        <div className='checkout-list__empty'>
                            <h3>Sizda savatcha bo'sh!</h3>
                            <p>Mahsulot Qo'shish uchun bosh sahifaga qayting</p>
                            <button className='checkout-list__empty__btn' onClick={handleBack}>Bosh Sahifa</button>
                        </div>
                }
            </div>
        </div>
    )
}

export default CheckoutList