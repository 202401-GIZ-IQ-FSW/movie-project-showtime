import { BsFillHouseDoorFill, BsFillCaretDownFill } from 'react-icons/bs'
import { AiFillPlayCircle } from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div className="hidden lg:flex  flex-col w-64 h-screen px-4 py-8 bg-white border-r">
      <h2 className="text-3xl font-semibold text-gray-800">Show Time</h2>

      <div>
        <nav className="flex flex-col justify-between flex-1 mt-6">
          <div className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md">
            <BsFillHouseDoorFill className="w-6 h-6" />
            <span className="mx-4 font-medium">Home</span>
          </div>

          <div className="flex px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md ">
            <AiFillPlayCircle className="w-6 h-6" />
            <div className="group inline-block">
              <button className="outline-none focus:outline-none  px-3 py-1 bg-white flex items-center min-w-32">
                <span className="pr-1 font-semibold flex-1">Movies</span>
                <span>
                  <BsFillCaretDownFill className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" />
                </span>
              </button>
              <ul className="border rounded-sm transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top min-w-32 top-full left-0 mt-1 w-32 hidden group-hover:block">
                <li className="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer">
                  Top Rate
                </li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer">
                  Popular
                </li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer">
                  Now Playing
                </li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer">
                  Upcoming
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
