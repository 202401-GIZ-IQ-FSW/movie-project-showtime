'use client'
import { fetchData } from '@/_utils/fetchData'
import TvCard from '@/components/TvShows/TVCard'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'
import React, { useEffect, useState } from 'react'
import HeroSection from '@/components/tvShowsHero/Hero'
import LoadingSkeletonCard from '@/components/LoadingSkeletonCard'
import { useSearchParams } from 'next/navigation'

const TvShowsPage = () => {
  const searchParams = useSearchParams()
  let genreName = searchParams.get('genre')
  if (genreName) {
    genreName = genreName.replace('_and_', ' & ')
  }
  if (!genreName) {
    genreName = 'comedy'
  }
  const [loading, setLoading] = useState(true)
  const [tvShows, setTvShows] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [genres, setGenres] = useState([])
  console.log(genres)
  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        let tvShowsData
        if (genreName) {
          const matchingGenre = genres.find(
            (genre) =>
              genre.name.toLowerCase() ===
              genreName.replace('_', ' ').toLowerCase(),
          )
          if (matchingGenre) {
            tvShowsData = await fetchData(
              `/discover/tv?with_genres=${matchingGenre.id}&page=${currentPage}`,
            )
          }
        } else {
          tvShowsData = await fetchData(`/tv/popular?page=${currentPage}`)
        }
        setTvShows(tvShowsData?.results || [])
        setLoading(false)
      } catch (error) {
        console.error(`Failed to fetch TV shows:`, error)
      }
    }

    const fetchGenres = async () => {
      try {
        const genresData = await fetchData('/genre/tv/list')
        setGenres(genresData.genres || [])
      } catch (error) {
        console.error(`Failed to fetch genres:`, error)
      }
    }

    fetchTvShows()
    fetchGenres()
  }, [currentPage])

  useEffect(() => {
    if (genreName && genres.length > 0) {
      const matchingGenre = genres.find(
        (genre) =>
          genre.name.toLowerCase() ===
          genreName.replace('_', ' ').toLowerCase(),
      )
      if (matchingGenre) {
        const fetchMoviesByGenre = async () => {
          try {
            const moviesData = await fetchData(
              `/discover/tv?with_genres=${matchingGenre.id}`,
            )
            setTvShows(moviesData.results || [])
            setLoading(false)
          } catch (error) {
            console.error(`Failed to fetch TV shows:`, error)
          }
        }
        fetchMoviesByGenre()
      }
    }
  }, [genreName, genres, currentPage])

  function goToNextPage() {
    setCurrentPage(currentPage + 1)
  }

  function goToPreviousPage() {
    setCurrentPage(currentPage - 1)
  }

  return (
    <div className="bg-[#171717]">
      <HeroSection shows={tvShows} />
      <h1 className="pl-4 md:pl-8 lg:pl-14 py-4 md:py-10 text-3xl md:text-4xl lg:text-5xl text-primaryYellow font-Poppins font-semibold text-center md:text-left">
        {genreName[0].toUpperCase() + genreName.slice(1)}
      </h1>
      <div className="pagination-buttons flex justify-between px-10 mt-10">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`flex items-center bg-primaryYellow  ${currentPage === 1 ? 'cursor-not-allowed bg-gray-500/60 text-gray-400' : 'hover:bg-gray-300'} active:bg-customeBlue/10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          <IoIosArrowBack className="mr-2" /> Previous
        </button>
        <button
          onClick={goToNextPage}
          className="flex items-center bg-primaryYellow hover:bg-gray-300 active:bg-customeBlue/10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next <IoIosArrowForward className="ml-2" />
        </button>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10 px-10  mt-10 pb-16">
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
              <LoadingSkeletonCard key={index} />
            ))
          : tvShows.map((tvShow) => <TvCard key={tvShow.id} tvShow={tvShow} />)}
      </div>
    </div>
  )
}

export default TvShowsPage
