import React from 'react'
import Skeleton from 'react-loading-skeleton'

function ProductsRightSkeleton() {
    return (
        <div className="products-content">
            <div className="products-content__image">
                <Skeleton width={250} height={257}/>
            </div>
        </div>
    )
}

export default ProductsRightSkeleton