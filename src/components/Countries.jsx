import React,{useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import { useGetCountriesQuery } from '../services/CountriesApi'
import { useGetCountryRegionsQuery } from '../services/CountriesApi';
import Country from './Country';
import { Filter } from './Filter';
import Loading from "./Loading"
import Search from './Search';
import "./pagination.css"
const Countries = () => {
  const regions=[
    // {
    //   name: "",
    //   desc: "",
    // },
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

  //pagination state
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(12);
  const [pageCount, setPageCount] = useState(0)

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
          setPageCount(Math.ceil(fetchData?.length/perPage))
          setCountries(fetchData.slice(offset, offset+perPage))
          // setCountries(fetchData)
    
        }else if(region !==""){
         
          setCountries(countryRegions)
          setPageCount(Math.ceil(countryRegions?.length/perPage))
          setCountries(countryRegions?.slice(offset, offset+perPage))
    
        }else if(region===""){
        
          let fetchData=allCountries?.filter((item) =>
          Object.values(item)
            .join("")
            .toLowerCase()
            .includes(searchTerm))
            setPageCount(Math.ceil(fetchData?.length/perPage))
            setCountries(fetchData.slice(offset, offset+perPage))
            // setCountries(fetchData)
          
        }
       
      
      setLoading(false)
    },[region,searchTerm,allCountries,offset])

    //pagination handleFunction
    const handlePageClick = (e) => {
      const selectedPage = e.selected;
      setOffset((selectedPage + 1)*perPage)
    }

      if (loading) return <Loading/>
 
  
  return (
    <>
        {loading &&  ( <Loading/>)}
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
    <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
      />
    </>
  )
}

export default Countries