/* eslint-disable @next/next/no-img-element */
'use client'
import { fetchData } from '@/_utils/fetchData'
import { useEffect, useState } from 'react'
import Background from './Background'
import Cards from './Cards'

const HomePage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const data = await fetchData('movie/now_playing')
        setMovies(data.results)
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }

    fetchAllMovies()
  }, [])

  const filterTitles = [
    'Red Right Hand',
    'Land of Bad',
    'Poor Things',
    'Godzilla x Kong: The New Empire',
    'Code 8 Part II',
  ]
  const filteredMovies = movies.filter((movie) =>
    filterTitles.includes(movie.title),
  )

  return (
    <div className='relative'>
    <Cards filteredMovies={filteredMovies}/>
    <Background filteredMovies={filteredMovies}/>
    </div>
  )
}

export default HomePage
