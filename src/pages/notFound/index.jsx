import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFoundPage() {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <div className='not-found__page'>
      <div className="container">
        <div className="not-found__page__row">
          <img src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png" alt="not-found img" />
          <p className="not-found__page__subtitle">Sahifa topilmadi!</p>
          <button className="not-found__page__btn" onClick={handleNavigate}>Bosh Sahifa</button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage