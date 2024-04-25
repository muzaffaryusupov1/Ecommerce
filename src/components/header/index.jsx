import { ProfileIcon, CartIcon, HeartIcon } from '../../assets/icons'
import { Link, useNavigate } from 'react-router-dom'
import { MobileIcon, SearchIcon } from '../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { modalOpen } from '../../store/slices/modals'

function Header() {
    const { isAuth } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleProfile = () => {
        if (isAuth) {
            navigate('/profile')
        } else {
            dispatch(modalOpen('registerModal'))
        }
    }

    return (
        <header className='header'>
            <div className="header-top">
                <div className="container">
                    <div className="header-row">
                        <div className="header-logo">
                            <button className='header-mobile__btn'>
                                <MobileIcon />
                            </button>
                            <Link to='/'>
                                <img src="/images/logo.svg" alt="site logo" />
                            </Link>
                        </div>

                        <form className="header-search">
                            <input type="text" placeholder='Search...' className="header-search__input" />
                            <button className="header-search__button">Search</button>
                        </form>

                        <div className="header-buttons">
                            <button className="header-button profile">
                                <span className="header-button__icon" onClick={handleProfile}>
                                    <ProfileIcon />
                                </span>
                                <span className="header-button__text">{isAuth ? 'Profile' : 'Register'}</span>
                            </button>
                            <Link to='/favourites'>
                                <button className="header-button">
                                    <span className="header-button__icon">
                                        <HeartIcon />
                                    </span>
                                    <span className="header-button__text">Orders</span>
                                </button>
                            </Link>
                            <Link to='/cart'>
                                <button className="header-button">
                                    <span className="header-button__icon">
                                        <CartIcon />
                                    </span>
                                    <span className="header-button__text">My cart</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <form className="header-search__mobile">
                <label htmlFor="search">
                    <SearchIcon />
                </label>
                <input type="text" id='search' placeholder='Search...' className="header-search__input" />
            </form>
        </header>
    )
}

export default Header