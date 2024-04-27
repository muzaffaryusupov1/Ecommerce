import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { orderPost } from '../../../utils/urls'
import Axios from '../../../api'
import { removeAll } from '../../../store/slices/cart'
import { toast } from 'react-toastify'

function CheckoutInfo() {
    const { items } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.user)
    const [pay, setPay] = useState(false)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/')
    }

    const handleChange = (e) => {
        if (e.target.form[4].checked) {
            setPay(true)
        } else {
            setPay(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { target } = e
        let data = {}

        if (items.length <= 0) {
            alert('Savatcha bo\'sh')
            return null
        }
        if (items.length > 1) {
            alert('Faqat bitta tovar harid qilishingiz mumkin!')
            return null
        }

        data.product_id = items[0].id
        data.user_id = user.id

        for (let el of Object.keys(target).slice(0.3)) {
            let item = target[el]
            if (item.name === 'tel') {
                data[item.name] = '+998' + item.value
            } else {
                data[item.name] = item.value
            }
        }

        if (!!data.product_id && !!data.user_id) {
            setLoading(true)
            try {
                Axios.post(orderPost, data).then(res => {
                    dispatch(removeAll())
                    setLoading(false)
                    toast.success("Haridingiz uchun rahmat!")
                    navigate('/')
                }).catch(err => {
                    setLoading(false)
                    toast.error("Nimadir xato ketti 🔥")
                });
            } catch (error) {
                setLoading(false)
                toast.error("Nimadir xato ketti 🔥")
            }


            // dispatch(register(data))
        }
        console.log(data)
    }

    return (
        <div className='checkout-info'>
            <div className="checkout-info__top">
                <h3 className="checkout-info__top__title">Buyurtmani rasmiylashtirish</h3>
            </div>
            <div className='checkout-info__wrapper'>
                <form className="checkout-info__form" onChange={(e) => handleChange(e)} onSubmit={(e) => handleSubmit(e)} >
                    <div className="checkout-info__row">
                        <label htmlFor="checkout-name" className='checkout-info__name' >Ism va Familiya</label>
                        <input type="text" name='fullname' id='checkout-name' defaultValue={user.name || ''} className='checkout-info__input' placeholder='Ism va Familiya' required />
                    </div>
                    <div className="checkout-info__row">
                        <label htmlFor="checkout-num" className='checkout-info__name'>Telefon raqami </label>
                        <div className="form-group">
                            <span className='input-addon'>+998</span>
                            <input type="tel" name='tel' id='checkout-num' className='checkout-info__input' placeholder='99 123 45 67' maxLength={9} pattern="[0-9]{9}" required />
                        </div>
                    </div>
                    <div className="checkout-info__row">
                        <label htmlFor="checkout-addres" className='checkout-info__name'>Address</label>
                        <textarea id="checkout-addres" name='address' className='checkout-info__input' cols="10" rows="2" required></textarea>
                    </div>
                    <p className="checkout-info__paytext">Toʻlov turi</p>
                    <div className="checkout-info__payment">
                        <div className='checkout-info__col'>
                            <input type="radio" id='checkout-price' name='payment' defaultChecked className='checkout-info__cash' />
                            <label htmlFor="checkout-cash" className='checkout-info__title'>Naqd pul</label>
                            <input type="radio" id='checkout-cash' name='payment' disabled className='checkout-info__cash' />
                            <label htmlFor="checkout-price" className='checkout-info__title'>Karta Orqali To'lash</label>
                        </div>
                        {
                            pay ? <div className='checkout-info__card'>
                                <label htmlFor="number">Card Number
                                    <input className='checkout-info__card__num' id="number" />
                                </label>
                                <label htmlFor="number">Expiration
                                    <input className='checkout-info__card__year' type='tel' id="year" />
                                </label>
                            </div> : <div style={{ padding: 40 }}></div>

                        }
                        <div className='checkout-info__buttons'>
                            <button className='checkout-info__back' onClick={handleBack}>Back to home</button>
                            <button className='checkout-info__pay' type='submit' disabled={!items.length || loading}>Pay</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CheckoutInfo