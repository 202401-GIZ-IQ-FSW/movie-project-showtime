'use client'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import React, { useState, useEffect } from 'react'
import MovieCard from '../../components/moviesPage/MovieCard'
import { fetchData } from '@/_utils/fetchData'
import CustomArrows from './CustomArrows'
import { homePageCarouselConfig } from '@/data/homePageCarouselConfig'
import LoadingSkeletonCard from '../LoadingSkeletonCard'

const Homepage = () => {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [currentlyPlayingMovies, setCurrentlyPlayingMovies] = useState([])
  const [comingSoonMovies, setComingSoonMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      const trendingData = await fetchData('/trending/all/day')
      setTrendingMovies(trendingData.results)

      const currentlyPlayingData = await fetchData('/movie/now_playing')
      setCurrentlyPlayingMovies(currentlyPlayingData.results)

      const comingSoonData = await fetchData('/movie/upcoming')
      setComingSoonMovies(comingSoonData.results)

      const topRatedData = await fetchData('/movie/top_rated')
      setTopRatedMovies(topRatedData.results)

      setLoading(false)
    }

    fetchMovies()
  }, [])

  const renderMoviesCarousel = (movies, title) => (
    <div className="mb-16 mt-5 lg:min-h-96">
      <h2 className="text-2xl font-bold text-primaryYellow pb-2 border-b border-primaryYellow/70 mb-6 ">{title}</h2>
      <Carousel
        {...homePageCarouselConfig}
        customButtonGroup={<CustomArrows />}
      >
        {loading
          ? Array.from(Array(6).keys()).map((index) => (
              <LoadingSkeletonCard key={index} />
            ))
          : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </Carousel>
    </div>
  )

  return (
    <div className="p-4 px-3 bg-[#171717]">
      {renderMoviesCarousel(trendingMovies, 'Trending')}
      {renderMoviesCarousel(currentlyPlayingMovies, 'Currently Playing')}
      {renderMoviesCarousel(topRatedMovies, 'Top Rated')}
    </div>
  )
}

export default Homepage
