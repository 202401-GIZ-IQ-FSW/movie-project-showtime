import React from "react"
import Card from "./Card"

function Home({ data }) {
  const latestMovies = data.results
    ? data.results.filter((movie) => {
        const releaseYear = new Date(movie.release_date).getFullYear()
        return releaseYear === 2024
      })
    : []

  return (
    <>
      {latestMovies.map((movie) => (
        <div key={movie.id}>
          <Card
            title={movie.title}
            date={movie.release_date}
            voteAverage={movie.vote_average}
            overview={movie.overview}
            posterPath={movie.poster_path}
          />
        </div>
      ))}
    </>
  )
}

export default Home
