/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const TeamCard = ({ name, city, linkedin, github, imgSrc }) => {
  return (
    <div className="flex flex-row items-center bg-gray-50 rounded-lg shadow-lg">
      <div>
        <img
          className="bg-[#F5C513] object-cover h-44 w-36 rounded-lg sm:rounded-none sm:rounded-l-lg"
          src={imgSrc}
          alt={`${name} Avatar`}
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 hover:text-[#F5C513] font-Poppins">
          {name}
        </h3>
        <span className="text-gray-800 font-Poppins ">Web Developer</span>
        <p className="mt-3 mb-4 font-light text-gray-800 font-Poppins ">Based in: {city}</p>
        <ul className="flex space-x-4 sm:mt-0">
          <li>
            <Link href={github} className="text-gray-600 hover:text-[#F5C513] ">
              <FaGithub className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <Link
              href={linkedin}
              className="text-gray-600 hover:text-[#F5C513]"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TeamCard
