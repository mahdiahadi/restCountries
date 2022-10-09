import {configureStore} from "@reduxjs/toolkit";
import { countriesApi } from "../services/CountriesApi";

export const store =configureStore({
    reducer:{
        [countriesApi.reducerPath]:countriesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          immutableCheck: false,
          serializableCheck: false,
        }).concat(countriesApi.middleware),
})