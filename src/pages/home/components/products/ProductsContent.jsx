import React, { useEffect, useState } from 'react'
import ProductsRightSkeleton from './components/ProductsRightSkeleton'
import { Link } from 'react-router-dom'
// import ProductsRightSkeleton from './components/ProductsRightSkeleton'

function ProductsContent({ category }) {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <>
            {
                loading ? <ProductsRightSkeleton /> : <div className="products-content">
                    <div className="products-content__image">
                        <img src={category.image} alt={category.title} />
                    </div>
                    <div className="products-content__row">
                        <h2 className='products-content__title'>{category.title}</h2>
                        <Link to={`/category/${category.slug}-${category.id}`}>
                            <button className='products-content__btn'>Hoziroq Ko'rish</button>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductsContent