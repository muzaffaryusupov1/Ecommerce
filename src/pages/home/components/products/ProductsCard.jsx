import React, { useEffect, useState } from 'react'
import ProductsSkeleton from './ProductsSkeleton'
import { Link } from 'react-router-dom'

function ProductsCard({ list }) {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <div className="products-card__row">
            {
                loading ? <ProductsSkeleton cards={8} /> : list.map(item => (
                    <Link key={item.id} to={`/product/${item.slug}`}>
                        <div className="products-card">
                            <div className="products-card__contents">
                                <p className="products-card__title">{item.title}</p>
                                <small className='products-card__subtitle'>{item.price.toLocaleString()} UZS</small>
                            </div>
                            <div className="products-card__image">
                                <img src={item.mainImage} alt={item.title} />
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default ProductsCard