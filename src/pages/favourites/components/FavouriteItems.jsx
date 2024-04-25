import { useDispatch } from 'react-redux'
import { BlackRatingIcon, CartIcon, HeartIcon, RatingIcon } from '../../../assets/icons'
import { useState } from 'react'
import { removeFavorite } from '../../../store/slices/favorite'
import { addCart } from '../../../store/slices/cart'

function FavouriteItems({ product }) {
  const { id, title, mainImage, model, price, qty } = product
  console.log(product)
  const dispatch = useDispatch()

  const {like, setLike} = useState(false);

  function likeItems(){
    setLike(true)
  }

  const handleUnFavourite = () => {
    dispatch(removeFavorite(id))
  }

  const handleCart = () => {
    dispatch(addCart(product))
  }

  return (
    <div className='favourite-items'>
      <div className="favourite-items__row">
        <div className="favourite-items__image">
          <img src={mainImage} alt={title} />
        </div>

        <div className="favourite-items__content">
          <p className="favourite-items__price">${price.toLocaleString()}</p>
          <ul className='favourite-items__list'>
            <li>
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
              <BlackRatingIcon />
              <BlackRatingIcon />
              <span className='favourite-items__rating'>5.9</span>
            </li>
          </ul>
          <p className="favourite-items__model">{model}</p>
          <div className="favourite-items__button">
            <button className='favourite-items__cardbtn' onClick={handleCart}>
              <CartIcon />
            </button>
          </div>

          <button className='favourite-items__btn active' onClick={handleUnFavourite}>
            <HeartIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FavouriteItems