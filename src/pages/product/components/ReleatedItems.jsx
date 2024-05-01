import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PageLoading } from "../../../components";
import Skeleton from "react-loading-skeleton";


function ReleatedItems() {
  const { recommended } = useSelector(state => state.product)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])


  if (recommended.loading) {
    return <PageLoading />
  }


  return (
    <div className="related-list">
      <div className="container">
        <div className="related-list-wrapper">
          <div className="related-list-top">
            {loading ? <Skeleton width={200} /> : <h1 className="related-list-top__title">Tavsiya</h1>}
          </div>
          <div className="related-list__items">
            {recommended.list.slice(0,5).map((item) => (
              <Link to={`/product/${item.slug}`} key={item.id}>
                <div className="related-list__item">
                  <div className="related-list__item__image">
                    {
                      loading ? <Skeleton /> :
                        <img
                          src={item.mainImage}
                          alt={item.title}
                          className="related-list__item__img"
                        />
                    }
                  </div>
                  <div className="related-list__titles">
                    {loading ? <Skeleton width={160} style={{ marginLeft: '10px' }} /> : <p className="related-list__item__title">{item.title.split(' ').slice(0, 4).join(' ')}</p>}
                    {loading ? <Skeleton width={160} style={{ marginLeft: '10px' }} /> : <p className="related-list__item__price">{item.price.toLocaleString()} UZS</p>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReleatedItems;
