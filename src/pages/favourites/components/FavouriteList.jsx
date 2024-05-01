import React from 'react'
import { useSelector } from 'react-redux'
import FavouriteItems from './FavouriteItems'

function FavouriteList({product}) {
  const { items } = useSelector(state => state.favorite)

  console.log(items)
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