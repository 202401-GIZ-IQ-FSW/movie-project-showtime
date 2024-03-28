'use client'
import React, { useState, useEffect } from 'react'
import { fetchData } from '../../_utils/fetchData'
import MovieCard from './MovieCard'
import LoadingSkeletonCard from '../LoadingSkeletonCard'
import { useSearchParams } from 'next/navigation'

const MovieList = ({ genresData }) => {
  const searchParams = useSearchParams()
  const category = searchParams.get('category') || 'popular'
  const genreName = searchParams.get('genre')
  const matchingGenre = genresData.genres.find(
    (genre) =>
      genre.name.toLowerCase() === genreName?.replace('_', ' ').toLowerCase(),
  )

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let moviesData
        if (genreName) {
          moviesData = await fetchData(
            `/discover/movie?with_genres=${matchingGenre.id}`,
          )
          console.log('movies by genere', moviesData)
        } else {
          moviesData = await fetchData(`/movie/${category}`)
          console.log('movies by category', moviesData)
        }
        setMovies(moviesData.results || [])
      } catch (error) {
        console.error(`Failed to fetch movies:`, error)
      }
    }

    fetchMovies()
  }, [category, genreName, matchingGenre])

  return (
    <section className="py-12 pt-32 bg-[#171717] px-4 md:px-12">
      <h1 className="text-3xl md:text-4xl text-primaryYellow/80 pb-2 border-b border-primaryYellow/55 font-Poppins font-semibold text-center md:text-left">
        {genreName ? matchingGenre.name : categoryEndpoints[category]}
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-10 lg:pt-12 pt-10 pb-10">
        {movies.length > 0
          ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          : Array.from({ length: 10 }).map((_, index) => (
              <LoadingSkeletonCard key={index} />
            ))}
      </div>
    </section>
  )
}

export default MovieList

const categoryEndpoints = {
  top_rated: 'Top Rated',
  popular: 'Popular',
  latest: 'Latest',
  now_playing: 'Now Playing',
  upcoming: 'Upcoming',
}
