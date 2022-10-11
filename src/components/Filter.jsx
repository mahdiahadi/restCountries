import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export const Filter = ({regions,setRegion}) => {

 
  return (
    <div className="relative sm:ml-48 md:mr-72 sm:-mt-10 mt-3 mb-2">
        <select
         
            name='select'
            className=" sm:w-72 w-72 h-10 dark:bg-gray-100 bg-gray-200  border rounded shadow-sm outline-none p-4 text-black hover:shadow-lg"
            onChange={(e)=>setRegion(e.target.value)}
            value={regions.name}
            // filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
             >
              <option value="">All</option>
            {
              regions?.map((item,index) => <option defaultValue={item.name}   key={index} value={item.name} >{item.name}</option>)
            }
        </select>
    </div>
  )
}
