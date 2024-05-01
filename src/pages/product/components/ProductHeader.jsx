import React, { useEffect, useState } from 'react'
import { MessageSmallIcon, BasketIcon, StarIcon } from '../../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../../store/slices/cart'
import SliderImages from './SwiperImages'
import { toast } from 'react-toastify'
import Skeleton from 'react-loading-skeleton'
import { useNavigate } from 'react-router-dom'
import { modalOpen } from '../../../store/slices/modals'

function ProductHeader({ product }) {
    const { isAuth } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAdd = () => {
        dispatch(addCart(product))
        toast.success('Savatga qo\'shildi')
    }

    // const handleAddOrder = () => {
    //     dispatch(addFavorite(product))
    //     toast.success('Sevimlilarga qo\'shildi')
    // }

    const handleCheckout = () => {
        toast.error('Registratsiya Bo\'lishingiz kerak')
        dispatch(modalOpen('registerModal'))
    }

    const handleNavigate = () => {
        navigate('/checkout')
    }

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])


    return (
        <div className='product-header'>
            <div className="container">
                <div className="product-header__wrapper">
                    <div className="product-header__image image-wrapper">
                        <SliderImages product={product} loading={loading} />
                    </div>

                    <div className="product-header__content content__product-header">
                        {
                            loading ? <Skeleton height={29} /> :
                                <h3 className="content-title">
                                    {product.title}
                                </h3>
                        }
                        <>
                            {
                                loading ? <Skeleton height={34} />
                                    :
                                    <div className="content-row">
                                        <div className="content-row__col">
                                            <div className="content-stars">
                                                <div className="content-stars__list">
                                                    <span className="content-star">
                                                        <StarIcon />
                                                    </span>
                                                    <span className="content-star">
                                                        <StarIcon />
                                                    </span>
                                                    <span className="content-star">
                                                        <StarIcon />
                                                    </span>
                                                    <span className="content-star">
                                                        <StarIcon />
                                                    </span>
                                                    <span className="content-star">
                                                        <StarIcon />
                                                    </span>
                                                </div>
                                                <span className="content-stars__title">{product.rating}</span>
                                            </div>
                                        </div>

                                        <div className="content-row__col">
                                            <span className="content-row__icon">
                                                <MessageSmallIcon />
                                            </span>
                                            <span className="content-row__text">{product.reviewCount} ta sharh</span>
                                        </div>

                                        <div className="content-row__col">
                                            <span className="content-row__icon">
                                                <BasketIcon />
                                            </span>
                                            <span className="content-row__text">{product.sold} ta sotilgan</span>
                                        </div>
                                    </div>
                            }

                        </>

                        <div className="content-price">
                            {loading ? <Skeleton height={20} /> : <p className="content-price__old">{product.oldPrice?.toLocaleString()} UZS</p>}
                            {loading ? <Skeleton height={20} /> : <p className="content-price__new">{product.price?.toLocaleString()} UZS</p>}
                        </div>

                        {loading ? <Skeleton height={135} style={{ marginBottom: 10 }} /> : <ul className="content-list">
                            <li className="content-list__item">
                                <strong className="content-list__text">Brend:</strong>
                                <span className="content-list__line"></span>
                                <span className="content-list__text">{product.brand.title}</span>
                            </li>
                            <li className="content-list__item">
                                <strong className="content-list__text">Model:</strong>
                                <span className="content-list__line"></span>
                                <span className="content-list__text">{product.model}</span>
                            </li>
                            <li className="content-list__item">
                                <strong className="content-list__text">Holati:</strong>
                                <span className="content-list__line"></span>
                                <span className="content-list__text">Sotuvda bor</span>
                            </li>
                        </ul>}

                        {loading ? < Skeleton width={430} height={40} /> : <div className="content-buttons">
                            <button className="content-button content-button__primary" onClick={handleAdd}>
                                Savatchaga qo'shish
                            </button>
                            <button className="content-button content-button__secondary" onClick={isAuth ? handleNavigate : handleCheckout}>
                                Hoziroq harid qilish
                            </button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductHeader