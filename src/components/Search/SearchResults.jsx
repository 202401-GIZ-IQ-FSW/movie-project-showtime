/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { TMDB_IMAGE_BASE_URL } from '@/data/constants'
const SearchResults = ({ results, closeDropdown, toggleMenu }) => {
  const handleClick = () => {
    closeDropdown()
    if (window.innerWidth < 450) {
      toggleMenu()
    }
  }
  const getUrl = (result) => {
    return `/${
      result.media_type === 'movie'
        ? 'movies'
        : result.media_type === 'tv'
          ? 'shows'
          : 'actors'
    }/${result.id}`
  }
  return (
    <div className="mt-2 absolute top-12 bg-gray-100 text-black z-50 w-full max-h-60 overflow-y-auto py-4 px-1 scrollbar-hide rounded-lg">
      {results.map((result) => (
        <Link
          key={result.id}
          href={getUrl(result)}
          className="flex items-center space-x-4 mb-2 hover:bg-gray-200 rounded-lg p-2 cursor-pointer border-b border-gray-300"
          onClick={handleClick}
        >
          <img
            src={`${TMDB_IMAGE_BASE_URL}w200/${result.poster_path}`}
            alt={result.title || result.name}
            className="w-16 h-20 rounded-sm"
          />
          <div>
            <p className="text-sm font-semibold">
              {result.title || result.name}
            </p>
            <p className="text-xs text-gray-500">
              {result.media_type === 'movie' || result.media_type === 'tv'
                ? result.release_date || result.first_air_date
                  ? result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date.substring(0, 4)
                  : ''
                : ''}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default SearchResults
