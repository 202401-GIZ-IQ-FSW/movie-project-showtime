import Link from 'next/link'
import { Menu } from '@headlessui/react'

const DropdownItem = ({ option, href, toggleMenu }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          onClick={toggleMenu}
          href={href}
          className={`block px-4 py-2  rounded-lg   text-black  ${
            active ? 'font-semibold duration-100' : ''
          }`}
        >
          {option}
        </Link>
      )}
    </Menu.Item>
  )
}

export default DropdownItem
