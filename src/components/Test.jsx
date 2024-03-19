/* eslint-disable @next/next/no-img-element */
import { fetchData } from "@/_utils/fetchData"

const Test = async () => {
  const data = await fetchData("movie/now_playing")

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-3xl lg:text-5xl text-center pb-10">
        Now Playing Movies
      </h1>
      {data.results && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.results.map((movie) => (
            <li key={movie.id} className="bg-white rounded-lg shadow-md p-4">
              {" "}
              <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="w-full mb-3"
              />
              <p className="text-gray-700">{movie.overview}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Test
