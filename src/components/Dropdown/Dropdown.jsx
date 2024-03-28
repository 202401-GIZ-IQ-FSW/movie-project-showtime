import { Menu } from '@headlessui/react'
import DropdownItem from './DropdownItem'
import { FaAngleDown } from 'react-icons/fa'

const Dropdown = ({ title, options, baseUrl, toggleMenu }) => {
  // Receive toggleMenu as a prop
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="text-lg font-Roboto font-medium rounded-lg py-2 inline-flex items-center ">
        {title}
        <FaAngleDown className="ml-2" />
      </Menu.Button>

      <Menu.Items className="rounded-lg text-sm z-10 bg-gray-100 absolute max-h-60 overflow-y-auto scrollbar-hide grid grid-cols-2 w-[290px] md:w-[230px] pb-2">
        {options.map((option) => (
          <DropdownItem
            key={option.id}
            option={option.name}
            href={`${baseUrl}${option.name.replace(/\s/g, '_').toLowerCase()}`}
            toggleMenu={toggleMenu}
          />
        ))}
      </Menu.Items>
    </Menu>
  )
}

export default Dropdown
