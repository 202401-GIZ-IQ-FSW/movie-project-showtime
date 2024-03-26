'use client';
import React, { useEffect, useState } from 'react';
import { fetchData } from '@/_utils/fetchData';
import MovieList from './moviesPage/MovieList'; 

const MoviesFetcher = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      
      if (typeof window !== 'undefined') {
        const searchParams = new URLSearchParams(window.location.search);
        const category = searchParams.get('category') || 'popular';

        const categoryEndpoints = {
          'top_rated': 'top_rated',
          'popular': 'popular',
          'latest': 'latest',
          'now_playing': 'now_playing',
          'upcoming': 'upcoming',
        };

        const endpoint = categoryEndpoints[category] || 'popular';

        try {
          const moviesData = await fetchData(`/movie/${endpoint}`);
          
          setMovies(endpoint === 'latest' ? [moviesData] : moviesData.results || []);
        } catch (error) {
          console.error('Failed to fetch movies:', error);
        }
      }
    };

    fetchMovies();
  }, []);

  return <MovieList movies={movies} />;
};

export default MoviesFetcher;
