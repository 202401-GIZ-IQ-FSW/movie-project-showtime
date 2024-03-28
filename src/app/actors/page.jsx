'use client'
import React, { useState, useEffect } from 'react'
import { fetchData } from '@/_utils/fetchData'
import ActorCard from '@/components/ActorCard/ActorCard'
import LoadingSkeletonCard from '@/components/LoadingSkeletonCard'

const Actors = () => {
  const [loading, setLoading] = useState(true)
  const [actors, setActors] = useState([])

  useEffect(() => {
    const fetchAllActorsInfo = async () => {
      try {
        const data = await fetchData('trending/person/day')
        setActors(data.results)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }

    fetchAllActorsInfo()
  }, [])

  return (
    <div className="flex flex-row pb-10 pt-28 md:py-32 bg-[#171717]">
      <div className="flex flex-col md:items-start items-center mx-4 md:mx-10">
        <h1 className='text-primaryYellow/75 font-bold font-Poppins text-3xl w-full border-b border-primaryYellow/75 mb-8'>Actors</h1>
        <div className="flex flex-row flex-wrap justify-center items-center md:gap-16 gap-10">
          {loading
            ? Array.from({ length: 10 }).map((_, index) => (
                <LoadingSkeletonCard key={index} />
              ))
            : actors.map((actor) => <ActorCard key={actor.id} actor={actor} />)}
        </div>
      </div>
    </div>
  )
}

export default Actors
