import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi";
import cartReducer from '../../cart/cartSlice'; 

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer, // Правильно
        cart: cartReducer, // Правильно
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware),
});
