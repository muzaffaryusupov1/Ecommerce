import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

function ProductCharacteristic({ product }) {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    return (
        <div className='product-characteristic characteristic'>
            <ul className="characteristic-list">
                {
                    product.attributes.map((item, i) => (
                        <li className="characteristic-list__item" key={i}>
                            {loading ? <Skeleton /> : <span className="characteristic-title">{item.title}</span>}
                            {loading ? <Skeleton /> : <span className="characteristic-value">{item.value}</span>}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductCharacteristic