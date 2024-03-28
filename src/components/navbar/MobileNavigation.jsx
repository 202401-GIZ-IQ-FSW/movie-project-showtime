/* eslint-disable @next/next/no-img-element */
import { AiFillCloseCircle } from 'react-icons/ai'
import { FaBars, FaSearch } from 'react-icons/fa'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import { moviesOptions } from '@/data/constants'
import SearchBar from '../Search/SearchBar'

const MobileNavigation = ({ movieGenres, tvGenres }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navbarClasses = isScrolled
    ? 'bg-[#151410] text-gray-700'
    : 'bg-transparent text-white/90'

  return (
    <div className={`fixed top-0 w-full lg:hidden z-50 ${navbarClasses}`}>
      <div className="flex justify-between items-center p-4">
        <Link href={'/'}>
          <img src="/showtime-logo-yellow.png" alt="Logo" className="w-32" />
        </Link>
        <button
          onClick={toggleMenu}
          className="text-3xl text-gray-800 focus:outline-none"
        >
          <FaBars className="text-primaryYellow" />
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-[#151410] z-50 slide-bottom">
          <div className="flex flex-col items-center justify-center h-2/4  space-y-4">
            <div className="flex justify-end">
              <button
                onClick={toggleMenu}
                className="text-3xl text-white absolute top-5 right-5 focus:outline-none"
              >
                <AiFillCloseCircle />
              </button>
            </div>
            <div className="flex flex-col text-4xl pt-44 space-y-8 text-white">
              <Dropdown
                title="Movies"
                options={moviesOptions}
                baseUrl="/movies?category="
                className="font-Roboto text-red"
                toggleMenu={toggleMenu}
              />

              <Dropdown
                title="Genre"
                options={movieGenres}
                baseUrl="/movies?genre="
                toggleMenu={toggleMenu}
              />
              <Dropdown
                title="TV Shows"
                options={tvGenres}
                baseUrl="/shows?genre="
                toggleMenu={toggleMenu}
              />
              <Link
                onClick={toggleMenu}
                href="/actors"
                className="text-lg font-Roboto font-semibold rounded-lg py-2"
              >
                Actors
              </Link>
              <SearchBar toggleMenu={toggleMenu} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileNavigation
