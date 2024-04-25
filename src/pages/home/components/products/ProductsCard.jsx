import React from 'react'

function ProductsCard({list}) {

    return (
        <div className="products-card__row">
            {
                list.map(item => (
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