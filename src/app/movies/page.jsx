import { fetchData } from '@/_utils/fetchData';

export const MoviesPage = async ({ category = 'popular' }) => {
  
  const categoryEndpoints = {
    'Top Rated': 'top_rated',
    'Popular': 'popular',
    'Latest': 'latest',
    'Now Playing': 'now_playing',
    'Upcoming': 'upcoming'
  };

  const endpoint = categoryEndpoints[category] || 'popular';
  const moviesData = await fetchData(`/movie/${endpoint}`);
  const movies = endpoint === 'latest' ? [moviesData] : moviesData.results || [];

  // Server-side code ends here. The rest would be client-side logic for rendering and interaction.
  // Note: Dynamic interactions like category selection would still need to be handled in a client component.
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-8">
          {/* Navigation and dynamic category selection would go here */}
      </section>
      <MovieList movies={movies} />
    </>
  );
};


export default MoviesPage;