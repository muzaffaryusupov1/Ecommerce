import React from 'react'
import { useSelector } from 'react-redux'
import FavouriteItems from './FavouriteItems'

function FavouriteList() {
  const { items } = useSelector(state => state.favorite)

  return (
    <div className='favourite-list'>
      {
        items.map(item => (
          <FavouriteItems product={item} key={item.id} />
        ))
      }
    </div>
  )
}

export default FavouriteList