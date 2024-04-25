import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PageLoading } from "../../../components";

function ReleatedItems() {
  const { recommended } = useSelector(state => state.product)

  if(recommended.loading){
    return <PageLoading/>
  }

  return (
    <div className="related-list">
      <div className="container">
        <div className="related-list-wrapper">
          <div className="related-list-top">
            <h1 className="related-list-top__title">Related products</h1>
          </div>
          <div className="related-list__items">
            {recommended.list.map((item) => (
              <Link to={`/product/${item.slug}`} key={item.id}>
                <div className="related-list__item" key={item.id}>
                  <div className="related-list__item__image">
                    <img
                      src={item.mainImage}
                      alt={item.title}
                      className="related-list__item__img"
                    />
                  </div>
                  <div className="related-list__titles">
                    <p className="related-list__item__title">{item.title}</p>
                    <p className="related-list__item__price">{item.price.toLocaleString()} UZS</p>
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
