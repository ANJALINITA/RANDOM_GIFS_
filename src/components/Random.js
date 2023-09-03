import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {


  const {gif, loading, fetchData} = useGif();


  return (
    <div className='w-1/2   bg-blue-900 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> A Random Gif</h1>

    {
        loading ? (<Spinner/>) : (<img src= {gif} width="450" />)
    }

      

      <button onClick={() => fetchData()}
      className=" text-2xl bold border border-l-4 border-black   bg-white px w-10/12 bg- text-lg py-2 rounded-lg mb-[20px]">

       Generate

      </button>

    </div>
  )
}

export default Random
