import Link from 'next/link'
import React from 'react'

const MovieDetails = ({ selectedMovie, movieDetails }) => {
  const convertRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}m`
  }

  return (
    <div className="w-fit sm:w-[600px] mt-10 sm:mt-0">
      <h1 className="text-5xl font-bold font-Poppins text-white mb-6">
        {selectedMovie?.title}
      </h1>
      {movieDetails && (
        <>
          <div className="mb-2 text-white/80 flex flex-wrap [&>*]:mx-1">
            <p>{movieDetails.release_date?.split('-')[0]} |</p>
            <p>{convertRuntime(movieDetails.runtime)} minutes |</p>
            <div className="cursor-pointer rounded-sm text-sm text-white font-bold bg-primaryYellow py-1 px-2 flex items-center justify-center">
              <p>{Math.round(movieDetails.vote_average * 10)}%</p>
            </div>
            <p>| {movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
          </div>
          <p className="text-lg text-white line-clamp-4 md:line-clamp-6">
            {selectedMovie?.overview}
          </p>
          <div className="mt-4">
            <Link
              href={`/movies/${selectedMovie?.id}`}
              className="text-white font-semibold font-Poppins px-2 py-1.5 rounded-xl bg-primaryYellow hover:bg-primaryYellow/70 active:bg-primaryYellow transition-all ease-in-out duration-300"
            >
              Read More
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default MovieDetails
