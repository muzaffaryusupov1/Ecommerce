import { configureStore } from "@reduxjs/toolkit";
import home from "./slices/home";
import product from "./slices/product";
import cart from "./slices/cart";
import products from "./slices/products";
import favorite from "./slices/favorite";
import modals from "./slices/modals";
import user from "./slices/user";

export const store = configureStore({
    reducer: {
        home,
        product,
        cart,
        favorite,
        products,
        modals,
        user
    }
})