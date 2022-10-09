import React from 'react'
import {FaTimes} from "react-icons/fa"
const Search = ({setSearchTerm,searchTerm}) => {
  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3 mb-2">
      <input
       value={searchTerm}
        type="text"
        placeholder='Search...'
        onChange={(e)=>setSearchTerm(e.target.value)}
        className=" sm:w-72 w-72 h-10 dark:bg-gray-100 bg-gray-200  border rounded shadow-sm outline-none p-4 text-black hover:shadow-lg"
      />
      {
        searchTerm !== " " && (
          <button type="button" className="absolute align-center top-1.5 right-4 text-2xl text-gray-500 " onClick={() => setSearchTerm('')}>
             <FaTimes className='mt-0.5'/>
        </button>
        )
      }
    </div>
  )
}

export default Search