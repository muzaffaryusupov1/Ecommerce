import React from 'react'
import Skeleton from 'react-loading-skeleton'

function OffersSkeleton({ cards }) {
    return (
        Array(cards)
            .fill(0)
            .map((_, i) => (
                <div className='offers-skeleton' key={i}>
                    <div className="top">
                        <Skeleton width={140} height={140} />
                    </div>
                    <div className="bottom">
                        <Skeleton count={2} width={140}  />
                    </div>
                </div>
            ))
    )
}

export default OffersSkeleton