import React from 'react'
import Link from 'next/link'

const ShowDetails = ({ selectedShow, showDetails }) => {
  const convertRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}m`
  }

  return (
    <div className="w-fit sm:w-[600px]">
      <h1 className="text-5xl font-bold font-Poppins text-white mb-6">
        {selectedShow?.name}
      </h1>
      {showDetails && (
        <>
          <div className="mb-2 text-white/80 flex flex-wrap [&>*]:mx-1">
            <p>{showDetails.first_air_date?.split('-')[0]} |</p>
            {/* <p>{convertRuntime(showDetails.runtime)} minutes |</p> */}
            <div className="cursor-pointer rounded-sm text-sm text-white font-bold bg-primaryYellow py-1 px-2 flex items-center justify-center">
              <p>{Math.round(showDetails.vote_average * 10)}%</p>
            </div>
            <p>| {showDetails.genres.map((genre) => genre.name).join(', ')}</p>
          </div>
          <p className="text-lg text-white line-clamp-4 md:line-clamp-6">
            {selectedShow?.overview}
          </p>
          <div className="mt-4">
            <Link
              href={`/shows/${selectedShow?.id}`}
              className="text-white font-semibold px-2 py-1.5 rounded-xl bg-primaryYellow hover:bg-primaryYellow/80 duration-100"
            >
              Read More
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default ShowDetails
