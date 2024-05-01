import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

function SwiperSkeleton({ cards }) {
    return (
        <div style={{display: 'flex', gap: '10px'}}>
            {Array(cards).fill(0)
                .map((_, i) => (
                    <div key={i}>
                        <Skeleton width={90} height={100}/>
                    </div>
                ))
            }
        </div>
    )
}

export default SwiperSkeleton