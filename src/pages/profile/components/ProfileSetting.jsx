import React, { useEffect, useState } from 'react'
import ProfileSidebar from './ProfileSidebar'
import { useNavigate } from 'react-router-dom'
import { setIsAuth } from '../../../store/slices/user'

function ProfileSetting() {

    const [active, setActive] = useState(false)
    const [selected, setSelected] = useState(false)
    const navigate = useNavigate()

    const handleActive = () => {
        setActive(true)
        setSelected(false)
    }

    const handleNotActive = () => {
        setActive(false)
        setSelected(true)
    }

    const handleLogOut = () => {
        navigate('/')
    }

    useEffect(() => {
        setIsAuth('')
        localStorage.clear();
    }, [])

    return (
        <div className="profile">
            <div className="container">
                <div className="profile-wrapper">
                    <ProfileSidebar />
                    <div className='profile-setting'>
                        <div className="profile-setting__top">
                            <h2 className='profile-setting__top-title'>Maʼlumotlarim</h2>
                        </div>
                        <form className="profile-setting__form">
                            <div className="profile-setting__row">
                                <div className="profile-setting__content">
                                    <label htmlFor="surname" className="profile-setting__label">Familiya</label>
                                    <input className='profile-setting__input' type="text" name="surname" id="surname" placeholder='Familiya' required />
                                </div>
                                <div className="profile-setting__content">
                                    <label htmlFor="name" className="profile-setting__label">Ism</label>
                                    <input className='profile-setting__input' type="text" name="name" id="name" placeholder='Ism' required />
                                </div>
                            </div>
                            <div className="profile-setting__row">
                                <div className="profile-setting__content">
                                    <label htmlFor="email" className="profile-setting__label">Elektron pochta</label>
                                    <input className='profile-setting__input' type="email" name="email" id="email" placeholder='Elektron pochta' required />
                                </div>

                                <div className="profile-setting__content">
                                    <label htmlFor="tel" className="profile-setting__label">Telefon raqami</label>
                                    <input className='profile-setting__input' type="tel" name="tel" id="tel" placeholder='Telefon raqami' required />
                                </div>
                            </div>
                            <div className="profile-setting__gen">
                                <p className='profile-setting__label'>Jins</p>
                                <div className="profile-setting__buttons">
                                    <button onClick={handleActive} className={active ? 'profile-setting__btn selected' : 'profile-setting__btn'} type='button'>Erkak</button>
                                    <button onClick={handleNotActive} className={selected ? 'profile-setting__btn selected' : 'profile-setting__btn'} type='button'>Ayol</button>
                                </div>
                            </div>
                            <div className='profile-setting__content'>
                                <label htmlFor="date" className="profile-setting__label">Tugʻilgan sana</label>
                                <input className='profile-setting__date' type="date" name="date" id="date" placeholder='Tugʻilgan sana' required />
                            </div>
                            <div className='profile-setting__butons'>
                                <button className='profile-setting__btn1' type='submit' onClick={handleLogOut}>Tizimdan chiqish</button>
                                <button className='profile-setting__btn1 primary'>Saqlash</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSetting