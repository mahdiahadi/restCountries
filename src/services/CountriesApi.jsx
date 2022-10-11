import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react" ;
import { useState } from "react";

const baseUrl="https://restcountries.com";

// const countriesApiHeaders={

// };

const createRequest=(url)=>(url)

export const countriesApi=createApi({

    reducerPath:"countriesApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCountries: builder.query({
            query:()=>createRequest(`/v3.1/all`)
        }),
        getCountryDetails:builder.query({
            query:(name)=>createRequest(`/v3.1/name/${name}`)
        }),
        getCountryRegions:builder.query({
            query:(region)=>createRequest(`/v3.1/region/${region}`)
        })
    })
})

export const {
    useGetCountriesQuery,
    useGetCountryDetailsQuery,
    useGetCountryRegionsQuery
}=countriesApi;