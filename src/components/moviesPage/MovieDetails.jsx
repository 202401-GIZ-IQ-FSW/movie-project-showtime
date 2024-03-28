/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import Link from 'next/link'
import MovieCard from './MovieCard'
import { GoDot } from 'react-icons/go'
import HeartIcon from '../HeartIcon'
import WishListCheck from '../WishListIcon'
import { BsFillPlayFill } from 'react-icons/bs'
import ActorCard from '../ActorCard/ActorCard'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

const MovieDetails = ({ movieDetails, credits, relatedMovies, trailers }) => {
  const director = credits.crew.find(
    (member) => member.job === 'Director',
  )?.name

  const screenplay = credits.crew
    .filter((member) => member.job === 'Screenplay')
    .slice(0, 2)
    .map((member) => member.name)

  const mainTrailer = trailers.results.find(
    (trailer) => trailer.site === 'YouTube',
  )

  const getYear = (year) => {
    const date = new Date(year)
    return date.getFullYear()
  }
  const convertRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}m`
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#171717] overflow-hidden">
      <div>
        <div>
          <div
            className="flex flex-col lg:flex-row pt-28 p-16"
            style={{
              background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${IMAGE_BASE_URL}${movieDetails.backdrop_path})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Movie Poster */}
            <div className="flex-none mb-4 lg:mb-0">
              <img
                src={`${IMAGE_BASE_URL}${movieDetails.poster_path}`}
                alt={`Poster of ${movieDetails.title}`}
                className="rounded-lg shadow-lg w-full lg:w-80 lg:h-96 object-cover"
              />
            </div>
            {/* Movie Details */}
            <div className="lg:ml-8 lg:w-3/4">
              <div className="flex flex-row gap-2 items-center mb-4">
                <h1 className="lg:text-4xl text-3xl text-white font-Poppins font-bold">
                  {movieDetails.title}
                </h1>
                <p className="text-black font-Poppins rounded-full py-1 px-2.5 bg-primaryYellow font-bold text-sm lg:text-lg">
                  {getYear(movieDetails.release_date)}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex flex-row gap-2 items-center">
                  <p className="border-white border-opacity-60 text-sm text-white text-opacity-60 border-solid border-2 py-0 px-2">
                    {movieDetails.original_language}
                  </p>
                  <GoDot className="text-white" />
                  <p className="text-sm text-white font-Poppins ">
                    {movieDetails.release_date}
                  </p>
                  <GoDot className="text-white" />
                  <p className="text-sm text-white font-Poppins ">
                    {movieDetails.genres
                      .map((genre) => genre.name)
                      .slice(0, 3)
                      .join(', ')}
                  </p>
                  <GoDot className="text-white" />
                  <p className="text-sm text-white font-Poppins ">
                    {convertRuntime(movieDetails.runtime)}
                  </p>
                </div>
              </div>

              <div className="flex flex-row gap-2 items-center mb-6">
                <div
                  className="rounded-full cursor-pointer hover:scale-110 text-lg text-white font-bold transition-all duration-300 ease-in-out bg-gray-900 hover:bg-primaryYellow/90 w-12 h-12 flex items-center justify-center"
                  title={`${movieDetails.vote_count} user score`}
                >
                  <p>{Math.round(movieDetails.vote_average * 10)}%</p>
                </div>
                <p className="text-lg text-white font-bold font-Roboto">
                  User<br></br>Score
                </p>
              </div>
              <div className="flex flex-row items-center gap-6 mb-8">
                <HeartIcon />
                <WishListCheck />
                <div>
                  <button
                    onClick={() => {
                      window.open(
                        `https://www.youtube.com/watch?v=${mainTrailer.key}`,
                        '_blank',
                      )
                    }}
                    className="flex items-center justify-center gap-1 text-white font-bold hover:text-customeYellow/80 active:text-white transition duration-300"
                  >
                    <BsFillPlayFill className="text-2xl" />
                    Play Trailer
                  </button>
                </div>
              </div>

              <div className="flex flex-col">
                <p className="text-xl font-Poppins font-semibold tracking-wide text-white mb-2">
                  Overview
                </p>
                <p className="mb-4 text-white font-Roboto font-normal leading-5 text-sm">
                  {movieDetails.overview}
                </p>
              </div>

              <div className="flex flex-wrap flex-row gap-10 mb-10">
                <div className="text-white font-Poppins text-sm font-medium">
                  <p>{director}</p>
                  <p className="font-light">Director</p>
                </div>

                <div className="text-white font-Poppins text-sm font-medium">
                  <ul className="flex flex-wrap flex-row gap-10">
                    {screenplay.map((member, index) => (
                      <li key={index}>
                        <p>{member}</p>
                        <p className="font-light">Screenplay</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/**production companies */}
              <div className="flex flex-col min-w-full items-start">
                <div className="flex flex-row gap-10 py-2 px-2 rounded-lg bg-gray-100/10 items-start">
                  {movieDetails.production_companies
                    .slice(0, 2)
                    .map((company) => (
                      <div
                        key={company.id}
                        className="flex flex-col items-center"
                      >
                        {company.logo_path && (
                          <img
                            src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                            alt={company.name}
                            className="w-8 h-8 lg:w-10 lg:h-10 mb-2"
                          />
                        )}
                        <p className="font-Poppins text-white text-sm font-bold">
                          {company.name}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Main Cast */}
            <div className="mt-20">
              <div className="flex items-start">
                <h2 className="text-2xl mx-20 w-full font-bold text-primaryYellow border-b border-primaryYellow font-Poppins">
                  Top billed cast
                </h2>
              </div>
              <div className="flex flex-col justify-center items-center pt-12">
                <div className="flex flex-row flex-wrap justify-center items-center gap-10">
                  {credits.cast.slice(0, 5).map((actor) => (
                    <ActorCard key={actor.id} actor={actor} />
                  ))}
                </div>
              </div>
            </div>

            {/* Related Movies */}
            <div className="mt-20 mb-10">
              <div className="flex items-start">
                <h2 className="text-2xl mx-20 w-full font-bold text-primaryYellow border-b border-primaryYellow font-Poppins mb-8">
                  Related Movies
                </h2>
              </div>
              <div className="flex lg:flex-row lg:gap-10 gap-5 justify-center flex-wrap">
                {relatedMovies.results.slice(0, 5).map((relatedMovie) => (
                  <div key={relatedMovie.id} className="mb-4">
                    <Link href={`/movies/${relatedMovie.id}`}>
                      <MovieCard movie={relatedMovie} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
