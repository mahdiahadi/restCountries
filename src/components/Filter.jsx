import React, { useState } from 'react'
import { useGetCountriesQuery, useGetCountryRegionsQuery } from '../services/CountriesApi';
export const Filter = ({setRegion}) => {

  const { data }=useGetCountriesQuery();
 
  return (
    <div className="relative sm:ml-48 md:mr-72 sm:-mt-10 mt-3 mb-2">
        <select
            placeholder='Select '
            className=" sm:w-72 w-72 h-10 dark:bg-gray-100 bg-gray-200  border rounded shadow-sm outline-none p-4 text-black hover:shadow-lg"
            onChange={(e)=>setRegion(e.target.value)}
            // filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
             >
            {
              data?.map((item,index) => <option key={index} value={item.region} >{item.region}</option>)
            }
        </select>
    </div>
  )
}
