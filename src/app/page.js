"use client"
import React, {useState, useEffect} from "react";
import Home from './components/Home'

export default function Page() {
  const [latestMovies, setLatestMovies] = useState([]);

    const fetchData = async () =>{
        try {
            const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=17ffe7213d2cc56b18d9382aff562804");
            const data = await response.json();
            setLatestMovies(data);
        }
        catch(error){
            console.error('Error fetching posts:', error);
        }
    }

    useEffect(()=>{
        fetchData();
    }, [] )

  return (
    <>
      <Home data={latestMovies}/>
    </>
  )
}
