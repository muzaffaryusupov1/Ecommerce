import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ChevronRightIcon from '../../../../assets/icons/ChevronRightIcon'

function Smartphones() {
    const { smartphones } = useSelector(state => state.home)
    const { categories } = useSelector(state => state.products)


    return (
        <div className="recommended-list">
            <div className="container">
                <div className="recommended-list-wrapper">
                    <div className="recommended-list-top">
                        <Link style={{display: 'flex', alignItems: 'center'}}>
                            <h1 className='recommended-list-top__title'>Telefonlar</h1>
                            <ChevronRightIcon />
                        </Link>
                    </div>
                    <div className="recommended-list-items">
                        {smartphones.list.map(item => (
                            <Link to={`/product/${item.slug}`} key={item.id}>
                                <div className="recommended-list-item" >
                                    <div className="recommended-list-item__image">
                                        <img src={item.mainImage} alt={item.title} className='recommended-list-item__img' />
                                    </div>
                                    <div className="recommended-list-item__content">
                                        <p className="recommended-list-item__price">{item.price.toLocaleString()} UZS</p>
                                        <p className="recommended-list-item__subtitle">{item.model}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Smartphones