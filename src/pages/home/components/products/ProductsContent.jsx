import React from 'react'

function ProductsContent({ category }) {
    return (
        <div className="products-content">
            <div className="products-content__image">
                <img src={category.image} alt={category.title} />
            </div>
            <div className="products-content__row">
                <h2 className='products-content__title'>{category.title}</h2>
                <button className='products-content__btn'>Source now</button>
            </div>
        </div>
    )
}

export default ProductsContent