import React from 'react'
import {Link} from "react-router-dom"
import {AiOutlineGlobal} from "react-icons/ai"
import {MdOutlineModeNight,MdOutlineLightMode} from "react-icons/md"
import { Button } from 'bootstrap'
import Search from './Search'
import { Filter } from './Filter'
const Navbar = ({darkTheme,setDarkTheme}) => {
  return (
    <div className=" p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 " >
        <div className="flex justify-between items-center space-x-5 w-screen ">
          <Link to="/" style={{ textDecoration:"none" }} >
              <p className="flex items-center text-2xl bg-gray-400 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-black">
                 Countries <AiOutlineGlobal/>
                 {/* 🔎 */}
               </p>
          </Link>
          <button
          type='button'
             onClick={ ()=> setDarkTheme( !darkTheme )}
             className='text-xl text-white font-bold bg-gray-400 dark:bg-gray-50 dark:text-black  border rounded px-2 py-1 hover:shadow-lg'
            >
            { darkTheme ?  <p className='flex items-center align-content-center'> Light <MdOutlineLightMode/> </p>  : <p className='flex items-center'> Dark <MdOutlineModeNight/> </p> }
          </button>
        </div>
  
     
    </div>
  )
}

export default Navbar