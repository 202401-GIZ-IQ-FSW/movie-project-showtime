'use client'
import React, { useState } from 'react'
import { BiSolidBookmark } from 'react-icons/bi'

function WishListCheck() {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <label className="cursor-pointer relative">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="hidden"
      />
      <div
        className={`rounded-full w-10 h-10 bg-gray-900 hover:bg-primaryYellow/90 transition-all duration-300 ease-in-out flex items-center justify-center ${
          checked ? 'text-orange-700' : ''
        }`}
      >
        <BiSolidBookmark
          className={`w-3 h-3 ${checked ? 'text-orange-700' : 'text-white'}`}
        />
      </div>
      <div className="bg-gray-900 flex items-center px-2 rounded-xl absolute top-full left-0 mt-1 opacity-0 pointer-events-none">
        <p className="text-white font-poppins font-medium text-sm w-24">
          Add to wishlist
        </p>
      </div>
      <style jsx>{`
        label:hover .bg-gray-900 {
          opacity: 1;
          pointer-events: initial;
        }
      `}</style>
    </label>
  )
}

export default WishListCheck
