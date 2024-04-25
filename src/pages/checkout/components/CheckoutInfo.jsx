import React from 'react'
import { useSelector } from 'react-redux'

function CheckoutInfo() {
  const {user} = useSelector(state => state.user)

    return (
        <div className='checkout-info'>
            <div className="checkout-info__top">
                <h3 className="checkout-info__top__title">Buyurtmani rasmiylashtirish</h3>
            </div>
            <div className='checkout-info__wrapper'>
                <form className="checkout-info__form">
                    <div className="checkout-info__row">
                        <p className="checkout-info__title">Yetkazib berish shahri</p>
                        <select className='checkout-info__select'>
                            <option>Toshkent</option>
                            <option>Samarqand</option>
                            <option>Navoi</option>
                            <option>Buxoro</option>
                            <option>Andijon</option>
                            <option>Jizzax</option>
                            <option>Xorazm</option>
                            <option>Qashqadaryo</option>
                            <option>Surxandaryo</option>
                            <option>Sirdaryo</option>
                            <option>Farg'ona</option>
                            <option>Namangan</option>
                            <option>Qoraqalpokiston</option>
                        </select>
                    </div>
                    <div className="checkout-info__wrap">
                        <div className="checkout-info__row">
                            <label htmlFor="checkout-name" className='checkout-info__name'>Ism</label>
                            <input type="text" id='checkout-name' defaultValue={user.name || ''} className='checkout-info__input' placeholder='Ismingizni kiriting' />
                        </div>
                        <div className="checkout-info__row">
                            <label htmlFor="checkout-surname" className='checkout-info__name'>Familiya</label>
                            <input type="text" id='checkout-surname' className='checkout-info__input' placeholder='Familiya kiriting' />
                        </div>
                    </div>
                    <div className='checkout-info__wrap'>
                        <div className="checkout-info__row">
                            <label htmlFor="checkout-num" className='checkout-info__name'>Telefon raqami </label>
                            <input type="number" id='checkout-num' className='checkout-info__input' placeholder='Telefon raqamingizni kiriting' />
                        </div>
                        <div className="checkout-info__row">
                            <label htmlFor="checkout-addres" className='checkout-info__name'>Addres</label>
                            <input type="email" id='checkout-addres' defaultValue={user.email || ''} className='checkout-info__input' placeholder='Email Addresni kiriting' />
                        </div>
                    </div>
                    <p className="checkout-info__pay">Toʻlov turi</p>
                    <div className="checkout-info__payment">
                        <div className='checkout-info__col'>
                            <label htmlFor="checkout-price" className='checkout-info__title'>Karta Orqali To'lash</label>
                            <input type="checkbox" id='checkout-price' className='checkout-info__cash' />
                        </div>
                        <div className='checkout-info__col'>
                            <label htmlFor="checkout-cash" className='checkout-info__title'>Naqd pul</label>
                            <input type="checkbox" id='checkout-cash' className='checkout-info__cash' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CheckoutInfo