import React from 'react'
import { categoriesModalClose } from '../store/slices/categoriesmodal'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { modalOpen } from '../store/slices/modals'
import { CategoriesIcon, FavouriteIcon, HomeIcon, InventorIcon, OrdersIcon, SignIcon } from '../assets/icons'

function CategoriesModal() {
    const { categories } = useSelector(state => state.home)
    const { isAuth } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClose = () => {
        dispatch(categoriesModalClose('registerCategoriesModal'))
    }

    const handleProfile = () => {
        if (isAuth) {
            navigate('/profile/card')
        } else {
            dispatch(modalOpen('registerModal'))
            dispatch(categoriesModalClose('registerCategoriesModal'))
        }
    }

    return (
        <div className='categories-modal'>
            <div className="categories-modal__bg" onClick={handleClose}></div>
            <div className="categories-modal__panel">
                <div className='categories-modal__register'>
                    <span className='categories-modal__register_icon'><SignIcon/></span>
                    <button className='categories-modal__register_title' onClick={handleProfile}>Sign in | Register</button>
                </div>
                <div className='categories-modal__row'>
                    <a className='categories-modal__link' href='/'>
                        <span><HomeIcon/></span>
                        <span>Bosh Sahifa</span>
                    </a>
                    <a className='categories-modal__link' href='/category/smartfonlar-va-gadjetlar-1'>
                        <span><CategoriesIcon/></span>
                        <span>Kategoriyalar</span>
                    </a>
                    <a className='categories-modal__link' href='/favourites'>
                        <span><OrdersIcon/></span>
                        <span>Sevimlilar</span>
                    </a>
                    <a className='categories-modal__link' href='/cart'>
                        <span><InventorIcon/></span>
                        <span>Savatcha</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CategoriesModal