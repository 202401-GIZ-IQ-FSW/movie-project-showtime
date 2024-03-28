/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Dropdown from '../Dropdown/Dropdown'
import MobileNavigation from './MobileNavigation'
import { fetchData } from '@/_utils/fetchData'
import { moviesOptions } from '@/data/constants'
import SearchBar from '../Search/SearchBar'

const Navbar = () => {
  const [movieGenres, setMovieGenres] = useState([])
  const [tvGenres, setTvGenres] = useState([])
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    async function fetchGenres() {
      try {
        const movieGenresData = await fetchData('/genre/movie/list')
        const tvGenresData = await fetchData('/genre/tv/list')

        // Process TV genres data to replace '&' with 'and' in genre names
        const processedTvGenres = tvGenresData.genres.map((genre) => ({
          id: genre.id,
          name: genre.name.replace('&', 'and'),
        }))

        setMovieGenres(movieGenresData.genres)
        setTvGenres(processedTvGenres)
      } catch (error) {
        console.error('Error fetching genres:', error)
      }
    }

    fetchGenres()

    // Event listener to check if the user has scrolled
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navbarClasses = isScrolled
    ? 'bg-[#151410] text-gray-700'
    : 'bg-transparent text-white/90'
  return (
    <>
      <nav
        className={`hidden md:block lg:fixed shadow-sm lg:top-0 lg:w-full z-50 ${navbarClasses}`}
      >
        <div className="flex flex-col md:flex-row items-center w-full justify-between px-3 md:px-6">
          <Link href="/" className="flex items-center">
            <img
              alt="ShowTime Logo"
              width="180"
              height="180"
              src="/showtime-logo-yellow.png"
            />
          </Link>
          {/* buttons */}
          <div className="!text-lg xl:text-2xl flex gap-3 !lg:gap-32 xl:gap-56  items-center">
            <div className="flex gap-x-8 items-center text-white">
              <Dropdown
                title="Movies"
                options={moviesOptions}
                baseUrl="/movies?category="
                className="font-Roboto text-red"
              />

              <Dropdown
                title="Genre"
                options={movieGenres}
                baseUrl="/movies?genre="
              />
              <Dropdown
                title="TV Shows"
                options={tvGenres}
                baseUrl="/shows?genre="
              />
              <Link
                href="/actors"
                className="text-lg font-Roboto font-semibold rounded-lg py-2  "
              >
                Actors
              </Link>
            </div>

            <SearchBar isScrolled={isScrolled} />
          </div>
        </div>
      </nav>
      <MobileNavigation movieGenres={movieGenres} tvGenres={tvGenres} />
    </>
  )
}

export default Navbar
