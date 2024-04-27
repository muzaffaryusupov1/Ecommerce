import React, { useEffect } from 'react'
import { Banner, Offers,  RecommendedList, Smartphones, Tv } from './components'
import { useDispatch } from 'react-redux'
import { getBannersList, getCategoriesList, getCategoryRecommendedList, getTv, getProductOffersList, getProductRecommendedList, getSmartphones } from '../../store/actions/homeActions'
import ProductsSection from './components/products/ProductsSection'

function HomePage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategoriesList())
        dispatch(getBannersList())
        dispatch(getProductRecommendedList())
        dispatch(getProductOffersList())
        dispatch(getCategoryRecommendedList())
        dispatch(getSmartphones())
        dispatch(getTv())
    }, [])


    return (
        <div>
            <Banner />
            <Offers />
            <ProductsSection/>
           <RecommendedList/>
           <Smartphones/>
           <Tv/>
        </div>
    )
}

export default HomePage