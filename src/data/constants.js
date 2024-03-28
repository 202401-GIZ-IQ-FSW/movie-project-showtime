export const TMDB_BASE_URL = 'https://api.themoviedb.org/3/'
export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/'

export const BearerToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTFkZDVhZWUxY2FiZWNkNzQzOGY3YzRiOGE2YzBjOCIsInN1YiI6IjY1ZjhjZTIwNGI5YmFlMDE4MzdkODc3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GYLuOnQ1z3JfjiJSeUrFy0nzMh9CXx3NMMWW3osS7nQ'

// const myBearerToken = process.env.NEXT_PUBLIC_BEARER_TOKEN

export const moviesOptions = [
  { id: 'now_playing', name: 'Now Playing' },
  { id: 'top_rated', name: 'Top Rated' },
  { id: 'upcoming', name: 'Upcoming' },
  { id: 'popular', name: 'Popular' },
]
