import React from 'react'
import Skeleton from 'react-loading-skeleton'

function ProductsSkeleton({ cards }) {
    return (
        Array(cards)
            .fill(0).map((_, i) => (
                <div className="products-card" key={i}>
                    <div className="products-card__contents">
                        <Skeleton count={3} width={120} />
                    </div>
                    <div className="products-card__image">
                        <Skeleton width={95} height={95} />
                    </div>
                </div>
            ))
    )
}

export default ProductsSkeleton