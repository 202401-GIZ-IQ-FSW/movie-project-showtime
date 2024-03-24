import { fetchData } from '@/_utils/fetchData'
import React, { useState } from 'react'
import { FaSearch, FaSpinner } from 'react-icons/fa'
import SearchResults from './SearchResults'

const SearchBar = () => {
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
      const endpoint = `/search/movie?query=${value}`
      const data = await fetchData(endpoint)
      setSearchResults(data.results)
    } catch (error) {
      console.error('Search error:', error)
    }

    setIsLoading(false)
  }

  return (
    <div className="relative w-72">
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
          <FaSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        )}
      </div>
      <input
        type="search"
        id="search"
        className="block w-full p-3 pl-10 text-sm text-black rounded-lg border-gray-600 placeholder-gray-400 "
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        required
      />

      {searchResults.length > 0 && <SearchResults results={searchResults} />}
    </div>
  )
}

export default SearchBar
