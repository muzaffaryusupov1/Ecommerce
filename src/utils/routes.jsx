import { CartPage, CategoriesPage, CheckoutPage, FavouritesPage, HomePage, NotFoundPage, ProductPage, ProfilePage } from "../pages";
import ProfileCard from "../pages/profile/components/ProfileCard";
import ProfileSetting from "../pages/profile/components/ProfileSetting";

export const routes = [
    {
        id: 1,
        component: <HomePage />,
        path: '/'
    },
    {
        id: 2,
        component: <CategoriesPage />,
        path: '/category/:id'
    },
    {
        id: 3,
        component: <NotFoundPage />,
        path: '*'
    },
    {
        id: 4,
        component: <ProductPage />,
        path: '/product/:slug'
    },
    {
        id: 5,
        component: <CartPage />,
        path: '/cart'
    },
    {
        id: 6,
        component: <FavouritesPage />,
        path: '/favourites'
    },
    {
        id: 8,
        component: <CheckoutPage />,
        path: '/checkout'
    },
    {
        id: 9,
        component: <ProfilePage />,
        path: '/profile'
    },
    {
        id: 10,
        component: <ProfileSetting />,
        path: '/profile/setting'
    },
    {
        id: 10,
        component: <ProfileCard />,
        path: '/profile/card'
    },
]