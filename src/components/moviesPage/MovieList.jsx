// DynamicMovieList.js
"use client";
import React, { useState, useEffect } from 'react';
import { fetchData } from '../../_utils/fetchData'; 
import MovieCard from './MovieCard'; 

const MovieList = ({ category = 'popular' }) => { // Thats a default category, that way it will render regardless of the navbar
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await fetchData(`/movie/${category}`);
        setMovies(moviesData.results || []);
      } catch (error) {
        console.error(`Failed to fetch movies:`, error);
      }
    };

    fetchMovies();
  }, [category]);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 px-10">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;