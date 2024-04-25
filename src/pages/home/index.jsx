import React, { useEffect } from 'react'
import { Banner, Clothes, Offers,  RecommendedList, Smartphones } from './components'
import { useDispatch } from 'react-redux'
import { getBannersList, getCategoriesList, getCategoryRecommendedList, getClothes, getProductOffersList, getProductRecommendedList, getSmartphones } from '../../store/actions/homeActions'
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
        dispatch(getClothes())
    }, [])


    return (
        <div>
            <Banner />
            <Offers />
            <ProductsSection/>
           <RecommendedList/>
           <Smartphones/>
           <Clothes/>
        </div>
    )
}

export default HomePage