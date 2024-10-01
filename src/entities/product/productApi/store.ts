import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi";
import cartReducer from '../../cart/cartSlice'; 
import { userAuthApi } from "../../user/userAuthApi";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer, 
        [userAuthApi.reducerPath]: userAuthApi.reducer,
        cartSlice: cartReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware).concat(userAuthApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>