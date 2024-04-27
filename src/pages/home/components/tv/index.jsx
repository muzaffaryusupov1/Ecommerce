import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '../../../../assets/icons'
import RecommendedListSkeleton from '../recommendedList/RecommendedListSkeleton'

function Tv() {
    const { tv } = useSelector(state => state.home)

    return (
        <div className="recommended-list">
            <div className="container">
                <div className="recommended-list-wrapper">
                    <div className="recommended-list-top">
                        <Link style={{ display: 'flex', alignItems: 'center' }} to={`/category/televizorlar-video-va-audio-11`}>
                            <h1 className='recommended-list-top__title'>Televizorlar</h1>
                            <ChevronRightIcon />
                        </Link>
                    </div>
                    <div className="recommended-list-items">
                        {tv.loading ? <RecommendedListSkeleton cards={2} /> : tv.list.map(item => (
                            <Link to={`/product/${item.slug}`} key={item.id}>
                                <div className="recommended-list-item" >
                                    <div className="recommended-list-item__image">
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

export default Tv