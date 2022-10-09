import React from 'react'
import { Link } from 'react-router-dom'
const Country = ({country}) => {
  return (
    <div  className="max-w-sm rounded overflow-hidden shadow-lg flex flex-wrap justify-center">
    <img className="w-64 h-40" src={country?.flags?.svg} alt="Sunset in the mountains"/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{country?.name?.official}</div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Region:{country?.region}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Population:{country?.population}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Capital:{country?.capital}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><Link to={`/countries/${country?.name?.official}`}>More Information</Link></span>
    </div>
  </div>
  )
}

export default Country