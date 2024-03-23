/* eslint-disable @next/next/no-img-element */
import { TMDB_IMAGE_BASE_URL } from '@/data/constants'
import React, { useState } from 'react'

const BackgroundImage = ({ selectedMovie }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoaded = () => {
    setImageLoaded(true)
  }

  return (
    <div className="relative w-full h-full">
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-300/95 animate-pulse" />
      )}
      <img
        className={`w-full h-full object-cover ${!imageLoaded ? 'hidden' : ''}`}
        src={`${TMDB_IMAGE_BASE_URL}original${selectedMovie?.backdrop_path}`}
        alt={selectedMovie?.title}
        onLoad={handleImageLoaded}
      />
    </div>
  )
}

export default BackgroundImage
