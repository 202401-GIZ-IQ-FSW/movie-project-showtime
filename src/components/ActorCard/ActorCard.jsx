/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { BsFillSuitHeartFill } from 'react-icons/bs'

const ActorCard = ({ actor }) => {
  const profilePath = actor.profile_path ? `https://image.tmdb.org/t/p/original${actor.profile_path}` : '/showtime-logo-yellow.png';

  return (
    <Link key={actor.id} href={`/actors/${actor.id}`}>
      <div className="lg:w-48 w-36 rounded-2xl relative border hover:scale-110 transition-all duration-300 ease-in-out border-white shadow-lg overflow-hidden">
        {actor.profile_path ? (
          <img
            src={profilePath}
            alt={`${actor.name}`}
            className="object-cover rounded-2xl h-72"
          />
        ) : (
          <img
            src="/showtime-logo-yellow.png"
            alt={`${actor.name}`}
            className="object-fit rounded-2xl h-72"
          />
        )}
        <div className="absolute rounded-2xl top-0 left-0 w-full h-full p-1 bg-black bg-opacity-75 text-white transition-opacity duration-300 opacity-100 hover:opacity-0 flex flex-col items-center justify-center">
          <h1 className="font-Poppins text-gray-100 text-opacity-55 text-xl font-extrabold tracking-wider text-center">
            {actor.name}
          </h1>
          <div className="mt-2">
            <BsFillSuitHeartFill className="text-primaryYellow/75 hover:text-primaryYellow active:text-primaryYellow/75" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ActorCard
