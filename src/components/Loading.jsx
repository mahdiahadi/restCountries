import React from 'react'
import * as Loader from "react-loader-spinner"

const Loading = () => {
  return (
    <div className='flex items-center justify-center' >
        <Loader.Circles color="gray" height={550} width={80}/>
    </div>
  )
}

export default Loading