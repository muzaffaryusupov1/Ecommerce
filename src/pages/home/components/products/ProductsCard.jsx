import React, { useEffect, useState } from 'react'
import ProductsSkeleton from './ProductsSkeleton'

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
                    <div className="products-card" key={item.id}>
                        <div className="products-card__contents">
                            <p className="products-card__title">{item.title}</p>
                            <small className='products-card__subtitle'>{item.price.toLocaleString()} UZS</small>
                        </div>
                        <div className="products-card__image">
                            <img src={item.mainImage} alt={item.title} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductsCard