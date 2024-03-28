import React, { useState } from 'react'
import { FaSearch, FaSpinner } from 'react-icons/fa'
import SearchResults from './SearchResults'
import { fetchData } from '@/_utils/fetchData'

const SearchBar = ({ isScrolled, toggleMenu }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearchChange = async (event) => {
    const value = event.target.value
    setSearchTerm(value)

    if (!value) {
      setSearchResults([])
      return
    }

    setIsLoading(true)

    try {
      const endpoint = `/search/multi?query=${value}`
      const data = await fetchData(endpoint)
      console.log(data)
      setSearchResults(data.results)
    } catch (error) {
      console.error('Search error:', error)
    }

    setIsLoading(false)
  }

  const closeDropdown = () => {
    setSearchResults([])
    setSearchTerm('')
  }

  const searchBarClasses = isScrolled
    ? 'border border-opacity-20 placeholder-gray-400'
    : 'bg-transparent border border-white border-opacity-40 focus:border-opacity-80 text-white placeholder-white'

  return (
    <div className="relative w-80">
      <label
        htmlFor="search"
        className="text-sm font-medium text-gray-800 sr-only"
      >
        Search
      </label>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {isLoading ? (
          <FaSpinner className="w-4 h-4 animate-spin text-gray-500 dark:text-gray-400" />
        ) : (
          <FaSearch
            className={`w-4 h-4 ${isScrolled ? 'text-gray-500 ' : 'text-white '}`}
          />
        )}
      </div>
      <input
        type="search"
        id="search"
        className={`block w-full p-3 pl-10 text-sm rounded-full border-gray-600  ${searchBarClasses} outline-none `}
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        required
      />

      {searchResults.length > 0 && (
        <SearchResults
          toggleMenu={toggleMenu}
          results={searchResults}
          closeDropdown={closeDropdown}
        />
      )}
    </div>
  )
}

export default SearchBar
