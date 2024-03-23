import React from 'react'
import Link from 'next/link'
import { BsFillSuitHeartFill } from "react-icons/bs";

function Cards({ actors }) {
  return (
    <div className="flex flex-col pt-16 justify-center items-center p-8">
      <h1 className="text-teal-300 text-5xl font-Roboto font-bold mb-5">
        Actors
      </h1>
      <div className="flex flex-row flex-wrap justify-center items-center gap-10 border-t-2 border-teal-300 pt-8">
        {actors.map((actor) => (
          <div
            key={actor.id}
            className="lg:w-52 w-64 rounded-2xl relative border border-white shadow-lg"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
              alt={`${actor.name}`}
              className="object-cover rounded-2xl"
            />
            <div className="absolute rounded-2xl top-0 left-0 w-full h-full p-1 bg-black bg-opacity-75 text-white transition-opacity duration-300 opacity-0 hover:opacity-100">
              <h1 className="pt-8 pb-4 font-Roboto text-xl font-extrabold tracking-wider">
                {actor.name}
              </h1>
              <div>
                <h5 className="font-Roboto font-normal text-sm mb-2">
                  Known for:
                </h5>
                {actor.known_for.map((movie) => (
                  <div
                    key={movie.id}
                    className="flex flex-row gap-2 items-center font-Roboto font-light text-sm pl-2 leading-5"
                  >
                    {movie.title && <span><BsFillSuitHeartFill className='text-teal-300' /></span>}
                    {movie.title}
                  </div>
                ))}
                <Link href={`/actors/${actor.id}`} className="absolute bottom-0 left-0 mb-5 ml-3 rounded-lg py-1 px-4 items-center justify-center font-normal text-sm border border-gray-100 border-opacity-55 bg-teal-500 bg-opacity-55 hover:bg-teal-400 active:bg-teal-500 active:bg-opacity-55">
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
