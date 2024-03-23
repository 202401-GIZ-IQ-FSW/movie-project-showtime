import React from 'react';
import Link from 'next/link';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie }) => {

  const { id, title, overview, poster_path } = movie;

  return (
    <div className="movie-card bg-white shadow-md rounded p-4 mb-6">
      {poster_path && (
        <img
          src={`${IMAGE_BASE_URL}${poster_path}`}
          alt={`Poster of ${title}`}
          className="rounded mb-4"
        />
      )}
      <h2 className="text-lg font-bold mb-2">
        <Link href={`/movies/${id}`}>
          <span className="hover:underline">{title}</span>
        </Link>
      </h2>
      <p className="text-sm text-gray-700">{overview}</p>
    </div>
  );
};

export default MovieCard;
