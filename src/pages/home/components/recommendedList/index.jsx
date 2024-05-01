import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import RecommendedListSkeleton from './RecommendedListSkeleton'

function RecommendedList() {
    const { productsRecommended } = useSelector(state => state.home)


    return (
        <div className="recommended-list">
            <div className="container">
                <div className="recommended-list-wrapper">
                    <div className="recommended-list-top">
                        <h1 className='recommended-list-top__title'>Rekomendatsiyadagi tovarlar</h1>
                    </div>
                    <div className="recommended-list-items">
                        {productsRecommended.loading ? <RecommendedListSkeleton cards={8} /> : productsRecommended.list.map(item => (
                            <Link to={`/product/${item.slug}`} key={item.id}>
                                <div className="recommended-list-item" >
                                    <div className="recommended-list-item__image">
                                        {item.isOffer ?
                                            <p className="recommended-list-item__offers">Hafta chegirmalari</p>
                                            : null}
                                        <img src={item.mainImage} alt={item.title} className='recommended-list-item__img' />
                                    </div>
                                    <div className="recommended-list-item__content">
                                        <p className="recommended-list-item__subtitle">{item.title.split(' ').slice(0, 3).join(' ')}</p>
                                        <p className="recommended-list-item__price">{item.price.toLocaleString()} UZS</p>
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

export default RecommendedList