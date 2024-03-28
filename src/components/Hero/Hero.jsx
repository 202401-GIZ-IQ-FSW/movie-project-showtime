/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import BackgroundImage from './BackgroundImage'
import { fetchData } from '@/_utils/fetchData'
import { heroCarouselConfig } from '@/data/heroCarouselConfig'
import MovieDetails from './MovieDetails'
import { TMDB_IMAGE_BASE_URL } from '@/data/constants'

const HeroSection = () => {
  const [latestMovies, setLatestMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [movieDetails, setMovieDetails] = useState(null)

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieData = await fetchData('/movie/now_playing')
        setLatestMovies(movieData.results)

        // Fetch details for the first movie right away
        const firstMovieId = movieData.results[0].id
        const additionalDetails = await fetchData(`/movie/${firstMovieId}`)
        setSelectedMovie(movieData.results[0])
        setMovieDetails(additionalDetails)
      } catch (error) {
        console.error('Error fetching movie data:', error)
      }
    }

    fetchMovieData()
  }, [])

  const handleMovieClick = async (movie) => {
    setSelectedMovie(movie)

    try {
      const movieId = movie.id
      const details = await fetchData(`/movie/${movieId}`)
      setMovieDetails(details)
    } catch (error) {
      console.error('Error fetching movie details:', error)
    }
  }

  return (
    <section className="relative overflow-hidden h-[100dvh]">
      <BackgroundImage selectedMovie={selectedMovie} />

      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-black/70 bg-fixed 
        flex flex-col lg:flex-row sm:items-center sm:justify-center gap-x-20 lg:gap-y-44 gap-y-10 px-4 pt-20 md:pt-10"
      >
        <MovieDetails
          selectedMovie={selectedMovie}
          movieDetails={movieDetails}
        />

        {latestMovies.length > 0 && (
          <div className="w-[600px] py-10 sm:py-14 sm:px-10  bg-blue-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100/10 cursor-grabbing">
            <Carousel {...heroCarouselConfig}>
              {latestMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  <img
                    src={`${TMDB_IMAGE_BASE_URL}w500${movie.poster_path}`}
                    alt={movie.title}
                    className={`w-44 h-52 cursor-pointer !self-center ${
                      movie.id === selectedMovie?.id ? '!h-64 !w-48' : 'mt-6'
                    }`}
                    onClick={() => handleMovieClick(movie)}
                    draggable="false"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection
