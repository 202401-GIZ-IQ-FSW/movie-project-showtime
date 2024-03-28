/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import BackgroundImage from './BackgroundImage'
import { fetchData } from '@/_utils/fetchData'
import { heroCarouselConfig } from '@/data/heroCarouselConfig'
import { TMDB_IMAGE_BASE_URL } from '@/data/constants'
import ShowDetails from './ShowDetails'

const HeroSection = ({ shows }) => {
  const [selectedShow, setSelectedShow] = useState(null)
  const [showDetails, setShowDetails] = useState(null)

  useEffect(() => {
    if (shows.length > 0) {
      setSelectedShow(shows[0])
    }
  }, [shows])

  const handleShowClick = async (show) => {
    setSelectedShow(show)
  }

  useEffect(() => {
    const fetchShowDetails = async () => {
      if (selectedShow) {
        try {
          const details = await fetchData(`/tv/${selectedShow.id}`)
          setShowDetails(details)
        } catch (error) {
          console.error('Error fetching show details:', error)
        }
      }
    }

    fetchShowDetails()
  }, [selectedShow])
  return (
    <section className="relative overflow-hidden h-[100dvh]">
      <BackgroundImage selectedShow={selectedShow} />

      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed 
        flex flex-col lg:flex-row sm:items-center sm:justify-center gap-x-20 gap-y-44 px-4 pt-20 md:pt-10"
      >
        <ShowDetails selectedShow={selectedShow} showDetails={showDetails} />

        {shows.length > 0 && (
          <div className="w-[600px] py-10 sm:py-14 sm:px-10  bg-blue-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100/10 cursor-grabbing">
            <Carousel {...heroCarouselConfig}>
              {shows.map((show) => (
                <div
                  key={show.id}
                  className="hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  <img
                    src={`${TMDB_IMAGE_BASE_URL}w500${show.poster_path}`}
                    alt={show.name}
                    className={`w-44 h-52 cursor-pointer !self-center ${
                      show.id === selectedShow?.id ? '!h-64 !w-48' : 'mt-6'
                    }`}
                    onClick={() => handleShowClick(show)}
                    draggable="false"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection
