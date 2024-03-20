import React, { useState, useEffect } from 'react'
import { fetchData } from '@/_utils/fetchData'

function Background({ filteredMovies }) {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await fetchData('genre/movie/list')
        setGenres(data.genres)
      } catch (error) {
        console.error('Error fetching genres:', error)
      }
    }

    fetchGenres()
  }, [])

  const getTopGenresForMovie = (genreIds) => {
    const topGenres = genreIds
      .map((genreId) => genres.find((genre) => genre.id === genreId)?.name)
      .filter((genre) => genre)
      .slice(0, 3);
      return topGenres.length > 0 ? (
        <span>
          {topGenres.map((genre, index) => (
            <span key={index}>
              {genre}
              {index < topGenres.length - 1 && <span className="text-[#eee] text-opacity-50"> | </span>}
            </span>
          ))}
        </span>
      ) : "Unknown";
    }

  return (
    <div>
      <div>
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="relative h-screen overflow-hidden transition duration-500 before:absolute before:content-'' before:top-0 before:bottom-0 before:left-0 before:right-0 before:h-screen before:w-screen before:bg-black before:bg-opacity-50"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className=" object-fit "
            />
            <div className="flex flex-col justify-center  absolute bottom-0 left-0 ml-16 mb-40 w-1/3 ">
              <h1 className="font-bold text-white text-5xl font-poppins mb-4">{movie.title}</h1>
              <h4 className="text-[#eee] text-lg text-opacity-40 mb-3">
                <span className="mr-2">
                  {movie.release_date} |
                </span>
                <span>
                  {getTopGenresForMovie(movie.genre_ids)} 
                </span>
              </h4>
              <p className="text-[#eee] text-sm text-opacity-60 font-poppins">{movie.overview}</p>
              <div className="flex flex-row gap-10 mt-10">
              <a href="#" className='text-white px-6 py-1 bg-teal-400'>WATCH</a>
              <a href="#" className='text-white px-6 py-1 bg-black bg-opacity-55 border border-white border-opacity-20 transition hover:bg-teal-400'>MY LIST</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Background
