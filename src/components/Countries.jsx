import React,{useState,useEffect} from 'react'
import { useGetCountriesQuery } from '../services/CountriesApi'
import { useGetCountryRegionsQuery } from '../services/CountriesApi';
import Country from './Country';
import { Filter } from './Filter';
import Loading from "./Loading"
import Search from './Search';
const Countries = () => {

  const [countries, setCountries] = useState([]);
  const [loading,setLoading]=useState(false)
  const [searchTerm,setSearchTerm]=useState("")
  const [region, setRegion] = useState("")
  const { data:allCountries }=useGetCountriesQuery();
  const { countryRegions }=useGetCountryRegionsQuery(region)
    console.log(countries)

    useEffect(()=>{
      setLoading(true);
      let fetchData=allCountries?.filter((item) =>
      Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchTerm)
    )

      setCountries(fetchData)
      setLoading(false)
    },[searchTerm,allCountries])

      // useEffect(() => {
      //   let filterData=countryRegions?.filter((item)=>
      //   Object.values(item).toLowerCase().includes(region)
      //   )
      //   setCountries(filterData);
      // }, [region])
      
    if (loading) return <Loading/>
  return (
    <>
      <div className="mt-10 flex align-items justify-between">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Filter region={region} setRegion={setRegion} />
     </div>
    
    <div className='mb-3 mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
     
        {
          countries?.map((country,index)=>(
             
              <div className="flex align-items justify-center">
                   <Country key={index} country={country} />
              </div>
          ))
        }
    </div>
   
    </>
  )
}

export default Countries