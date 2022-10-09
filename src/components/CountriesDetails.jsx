import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetCountryDetailsQuery } from '../services/CountriesApi';

const CountriesDetails = () => {
  const {name}=useParams();
  const { data:countryDetails}=useGetCountryDetailsQuery(name);
  return(
  <div>
    {
      countryDetails?.map((c)=>{
        const{  
           numericCode,
          flags,
          name,
          flag,
          population,
          region,
          subregion,
          capital,
        }=c
           return (
                 <div key={numericCode} className=" grid grid-cols-1 max-w h-100 rounded overflow-hidden shadow-lg">
                <img className="w-64 ml-5 " src={flags?.png} alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{name?.official}</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">population{population}</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Region{subregion}</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Capital{capital}</span>
                 
                </div>
                <Link to="/"><button className=" ml-5 mb-3 bg-gray-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full darK:bg-white dark:text-black" type='button'>Back</button></Link>
             </div>
        )
      })
    }
  </div>
  )
}

export default CountriesDetails