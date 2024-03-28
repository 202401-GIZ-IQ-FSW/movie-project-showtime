import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <FaSpinner className="animate-spin text-2xl text-gray-500" />
    </div>
  )
}

export default LoadingSpinner
