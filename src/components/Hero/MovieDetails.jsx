import React from 'react'

const MovieDetails = ({ selectedMovie, movieDetails }) => {
  console.log(movieDetails)
  return (
    <div className="w-fit sm:w-[600px]">
      {movieDetails && (
        <div className="mb-4 text-white/80 flex flex-wrap [&>*]:mx-1">
          <p>{movieDetails.release_date?.split('-')[0]} |</p>
          <p>{movieDetails.runtime} minutes |</p>
          <p>{movieDetails.vote_average} |</p>
          <p>{movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
        </div>
      )}
      <h1 className="text-4xl font-bold text-white">{selectedMovie?.title}</h1>
      <p className="text-lg text-white line-clamp-4 md:line-clamp-6">
        {selectedMovie?.overview}
      </p>
    </div>
  )
}

export default MovieDetails
