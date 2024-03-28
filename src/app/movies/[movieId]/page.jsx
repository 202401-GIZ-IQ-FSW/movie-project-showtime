import { fetchData } from '@/_utils/fetchData';
import MovieDetails from '@/components/moviesPage/MovieDetails';

const MovieInfo = async ({ params }) => {
  const { movieId } = params;
  const movieDetails = await fetchData(`/movie/${movieId}`);
  const credits = await fetchData(`/movie/${movieId}/credits`);
  const relatedMovies = await fetchData(`/movie/${movieId}/similar`);
  const trailers = await fetchData(`/movie/${movieId}/videos`);

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
