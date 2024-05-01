import { Link } from 'react-router-dom'
import { ArrowIcon, } from '../../../assets/icons'
import { useSelector } from 'react-redux'
import BrandList from './BrandList'


function CategorySidebar() {
    const { categories } = useSelector(state => state.products)

    return (
        <div className='categories-page category-sidebar'>
            <div className="category-sidebar__top">
                <div className="category-sidebar__head">
                    <div className="category-sidebar__row">
                        <h2 className='category-sidebar__title'>Kategoriyalar</h2>
                        <span>
                            <ArrowIcon />
                        </span>
                    </div>

                    {
                        categories.list.map(item => (
                            <Link key={item.id} to={`/category/${item.slug}-${item.id}`}>
                                <p className="category-sidebar__subtitle">{item.title}</p>
                            </Link>
                        ))
                    }
                </div>
                <BrandList />
            </div>
        </div>
    )
}

export default CategorySidebar