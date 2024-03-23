import { fetchData } from '@/_utils/fetchData';
import MovieDetails from '@/components/MovieDetails';

const MovieInfo = async ({ params }) => {
  const { movieId } = params;
  const movieDetails = await fetchData(`/movie/${movieId}`);
  const credits = await fetchData(`/movie/${movieId}/credits`);
  const relatedMovies = await fetchData(`/movie/${movieId}/similar`);
  const trailers = await fetchData(`/movie/${movieId}/videos`);

  // Find the director's name among the crew
  const director = credits.crew.find((member) => member.job === 'Director')?.name;

  // Assuming the first YouTube trailer is the one we want to display
  const mainTrailer = trailers.results.find((trailer) => trailer.site === 'YouTube');

  return (
    <MovieDetails 
    movieDetails={movieDetails} 
    credits={credits} 
    relatedMovies={relatedMovies} 
    trailers={trailers} 
  />
  );
};

export default MovieInfo;
