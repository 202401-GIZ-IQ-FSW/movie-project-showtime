import React from 'react'
import Link from 'next/link'
import { BsFillSuitHeartFill } from 'react-icons/bs'

function Cards({ actors }) {
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <div className="flex flex-row flex-wrap justify-center items-center gap-10">
        {actors.map((actor) => (
          <Link key={actor.id} href={`/actors/${actor.id}`} legacyBehavior>
            <a>
              <div className="lg:w-52 w-64 rounded-2xl relative border hover:scale-110 transition-all duration-300 ease-in-out border-white shadow-lg">
                <img
                  src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                  alt={`${actor.name}`}
                  className="object-cover rounded-2xl"
                />
                <div className="absolute rounded-2xl top-0 left-0 w-full h-full p-1 bg-black bg-opacity-75 text-white transition-opacity duration-300 opacity-100 hover:opacity-0 flex flex-col items-center justify-center">
                  <h1 className="font-Poppins text-gray-100 text-opacity-55 text-xl font-extrabold tracking-wider text-center">
                    {actor.name}
                  </h1>
                  <div className="mt-2">
                    <BsFillSuitHeartFill className="text-primaryYellow  hover:text-primaryYellow/75  active:text-primaryYellow " />
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Cards
