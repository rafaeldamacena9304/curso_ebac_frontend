import { configureStore } from "@reduxjs/toolkit";
import api from '../services/api'
import { carrinhoSlice } from "./reducers/carrinhoSlice";

export const store = configureStore({
    reducer: {
        carrinho: carrinhoSlice.reducer,
        [api.reducerPath]: api.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
    
});

export type RootState = ReturnType<typeof store.getState>
