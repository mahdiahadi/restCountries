import React,{useState,useEffect} from 'react'
import { useGetCountriesQuery } from '../services/CountriesApi'
import { useGetCountryRegionsQuery } from '../services/CountriesApi';
import Country from './Country';
import { Filter } from './Filter';
import Loading from "./Loading"
import Search from './Search';
const Countries = () => {
  const regions=[
    {
      name: "",
      desc: "",
    },
    {
      name: "africa",
      desc: "africa",
    },
    {
      name: "americas",
      desc: "americas",
    },
    {
      name: "asia",
      desc: "asia",
    },
    {
      name: "europe",
      desc: "europe",
    },
    {
      name: "oceania",
      desc: "oceania",
    },
  ]
  const [countries, setCountries] = useState([]);
  const [loading,setLoading]=useState(false)
  const [searchTerm,setSearchTerm]=useState("")
  const [region, setRegion] = useState("")
  const { data:allCountries }=useGetCountriesQuery();
  const { data:countryRegions }=useGetCountryRegionsQuery(region)

    console.log(countryRegions)

    useEffect(()=>{
      setLoading(true);
        if(searchTerm){
          let fetchData=allCountries?.filter((item) =>
          Object.values(item)
            .join("")
            .toLowerCase()
            .includes(searchTerm)
          )
          setCountries(fetchData)
        }else if(region !==""){
          setCountries(countryRegions)
        }else if(region===""){
          let fetchData=allCountries?.filter((item) =>
          Object.values(item)
            .join("")
            .toLowerCase()
            .includes(searchTerm))
            setCountries(fetchData)
        }
       
                 
      
      setLoading(false)
    },[region,searchTerm,allCountries])

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
          <Filter regions={regions} setRegion={setRegion} />
     </div>
    
    <div className='mb-3 mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
     
        {
          countries?.map((country,index)=>(
             
              <div  key={index} className="flex align-items justify-center">
                   <Country country={country} />
              </div>
          ))
        }
    </div>
   
    </>
  )
}

export default Countries