'use client'
import React, { useState } from 'react'

function ReadMore({ bio }) {
  const [showFullBio, setShowFullBio] = useState(false)

  const slicedBio = bio.length > 1300 ? bio.slice(0, 1300) + '...' : bio

  const handleToggleBio = () => {
    setShowFullBio(!showFullBio)
  }

  return (
    <div>
      <p>
        {showFullBio ? bio : slicedBio}
        {bio.length > 1300 && (
          <button
            onClick={handleToggleBio}
            className="text-primaryYellow underline hover:text-primaryYellow/80  active:text-primaryYellow"
          >
            {showFullBio ? 'Read less' : 'Read more'}
          </button>
        )}
      </p>
    </div>
  )
}

export default ReadMore
