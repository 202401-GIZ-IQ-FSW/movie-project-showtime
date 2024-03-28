'use client'
import React, { useState } from 'react'
import { BsFillSuitHeartFill } from 'react-icons/bs'

function HeartCheckbox() {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <label className="cursor-pointer relative ">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="hidden"
      />
      <div
        className={`rounded-full w-10 h-10 bg-gray-900 hover:bg-primaryYellow/90 transition-all duration-300 ease-in-out flex items-center justify-center ${
          checked ? 'text-red-700' : ''
        }`}
      >
        <BsFillSuitHeartFill
          className={`w-3 h-3 ${checked ? 'text-red-700' : 'text-white'}`}
        />
      </div>
      <div className="bg-gray-900 flex items-center rounded-xl absolute top-full left-0 mt-1 opacity-0 pointer-events-none">
        <p className="text-white font-poppins font-medium px-2 text-sm w-32">
          Mark as favorite
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

export default HeartCheckbox
