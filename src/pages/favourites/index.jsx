import React from 'react'
import { FavouriteList } from './components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function FavouritesPage() {
  const { items } = useSelector(state => state.favorite)

  const navigate = useNavigate()
  console.log(items)
  const handleHome = () => {
    navigate('/')
  }

  return (
    <div className='favourite-page'>
      <div className="container">
        {
          items.length <= 0 ?
            <div className='favourite-page favourite-empty'>
              <div className="favourite-empty__image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrttyeywkb_T-woGp--6p3lulK4wi4cAb-oB1kyddBgQ&s" alt="favourite empty image" />
              </div>
              <h3 className='favourite-empty__title'>Sevimli mahsulotlar yo'q</h3>
              <p className='favourite-empty__subtitle'>❤️ ️tugmasi yordamida saralanganlar mahsulotlar qoʻshishingiz mumkin.</p>
              <button className="favourite-empty__btn" onClick={handleHome}>Orqaga</button>
            </div>
            :
            <>
              <h1 className='favourite-page__title'>Sevimli Mahsulotlar</h1>
              <div className="favourite-page__row">
                <FavouriteList />
                <div className="favourite-page__right">
                </div>
              </div>
            </>
        }
      </div>
    </div>
  )
}

export default FavouritesPage
