import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchData } from '@/_utils/fetchData';
import MovieList from '@/components/moviesPage/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    // Default to 'popular' if no category is specified in the URL
    const category = router.query.category || 'popular';

    const fetchMovies = async () => {
      const categoryEndpoints = {
        'Top Rated': 'top_rated',
        Popular: 'popular',
        Latest: 'latest',
        'Now Playing': 'now_playing',
        Upcoming: 'upcoming',
      };

      const endpoint = categoryEndpoints[category] || 'popular';
      try {
        const moviesData = await fetchData(`/movie/${endpoint}`);
        setMovies(moviesData.results || []);
      } catch (error) {
        console.error(`Failed to fetch movies:`, error);
      }
    };

    fetchMovies();
  }, [router.isReady, router.query]);

  return (
    <div className='bg-[#262626]'>
      <div className="flex flex-row flex-wrap justify-center gap-10 px-10 mt-10 pb-10">
        {movies.map((movie) => (
          <MovieList key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
