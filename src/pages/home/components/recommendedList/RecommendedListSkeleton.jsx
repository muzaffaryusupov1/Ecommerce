import React from 'react'
import Skeleton from 'react-loading-skeleton'

function RecommendedListSkeleton({ cards }) {
    return (
        Array(cards)
            .fill(0)
            .map((_, i) => (
                <div className="recommended-list-item" key={i} >
                    <div className="recommended-list-item__image">
                        <Skeleton width={152} height={172} />
                    </div>
                    <div className="recommended-list-item__content">
                        <Skeleton width={184} height={20} count={2} />
                    </div>
                </div>
            ))
    )
}

export default RecommendedListSkeleton