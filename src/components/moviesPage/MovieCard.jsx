import React from 'react';
import Link from 'next/link';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, release_date, overview, vote_average } = movie;
  const formattedDate = new Date(release_date).getFullYear(); 
  const formattedRating = vote_average.toFixed(1); 


  return (
    <Link href={`/movies/${id}`} passHref>
      <div className="cursor-pointer bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 ease-in-out overflow-hidden">
        <div className="relative">
          <img src={`${IMAGE_BASE_URL}${poster_path}`} alt={`Poster of ${title}`} className="w-full" />
          <div className="absolute top-0 left-0 bg-yellow-400 text-black rounded-br-lg px-2 py-1 text-sm font-bold">{formattedRating}</div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold truncate">{title}</h3>
          <p className="text-sm text-gray-600">Release Date: {formattedDate}</p>
          <p className="text-sm text-gray-800 mt-1">{overview.length > 100 ? `${overview.substring(0, 100)}...` : overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;