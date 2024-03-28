import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const navigation = {
    main: [
      { name: 'About', href: '/about' },
      { name: 'Movies', href: '/movies' },
      { name: 'TV Shows', href: '/shows' },
      { name: 'Actors', href: '/actors' },
    ],
  }

  return (
    <footer className=" bg-black/100 border-t-4 border-[#F5C513]">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-lg leading-6 text-white hover:border-b-2 hover:border-[#F5C513] duration-600 transition-all p-2 "
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2024 ShowTime, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
export default Footer
