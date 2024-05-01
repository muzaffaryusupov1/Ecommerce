import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function OffersProducts() {
    const { productOffers } = useSelector(state => state.home);


    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <div className="offers-products">
            {
                productOffers.list.slice(0, 5).map(item => (
                    <Link className="offers-product" to={`/product/${item.slug}`} key={item.id}>
                        <div>
                            {
                                loading ? <Skeleton width={140} height={140} /> : <div className="offers-product__image">
                                    <img src={item.mainImage} alt={item.title} />
                                </div>
                            }
                            <div className="offers-product__content">
                                {loading ? <Skeleton width={100} style={{marginTop: 10}} /> : <p className="offers-product__title">{item.title.split(' ').slice(0, 2).join(' ')}</p>}
                                {loading ? <Skeleton width={70} height={30} style={{marginTop: 10}} /> : <p className='offers-product__percent'>-{item.discount}%</p>}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default OffersProducts