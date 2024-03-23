import React from 'react';
import Link from 'next/link';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = ({ movieDetails, credits, relatedMovies, trailers }) => {
  
  const director = credits.crew.find((member) => member.job === 'Director')?.name;
  const mainTrailer = trailers.results.find((trailer) => trailer.site === 'YouTube');

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          {/* Movie Poster */}
          <div className="flex-none mb-4 lg:mb-0">
            <img 
              src={`${IMAGE_BASE_URL}${movieDetails.poster_path}`} 
              alt={`Poster of ${movieDetails.title}`} 
              className="rounded-lg shadow-lg w-full lg:w-64 lg:h-96 object-cover" 
            />
          </div>
          {/* Movie Details */}
          <div className="lg:ml-8 lg:w-3/4">
            <h1 className="text-3xl font-bold mb-2">{movieDetails.title}</h1>
            <div className="text-sm mb-4">
              <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
              <p><strong>Runtime:</strong> {movieDetails.runtime} minutes</p>
              <p><strong>Language:</strong> {movieDetails.original_language}</p>
              <p><strong>Rating:</strong> {movieDetails.vote_average} ({movieDetails.vote_count} votes)</p>
              <p><strong>Director:</strong> {director}</p>
            </div>
            <p className="mb-4">{movieDetails.overview}</p>
            
            {/* Main Cast */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Main Cast</h2>
              <ul> {/* actors logic here */}
                {credits.cast.slice(0, 5).map((actor) => (  
                  <li key={actor.id} className="mb-1">
                    <Link href={`/actors/${actor.id}`}>
                      <span className="text-blue-500 hover:text-blue-700">{actor.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Related Movies */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-3">Related Movies</h2>
              <div className="flex flex-wrap -mx-2">
                {relatedMovies.results.slice(0, 5).map((relatedMovie) => (
                  <div key={relatedMovie.id} className="md:w-1/5 p-2">
                    <Link href={`/movies/${relatedMovie.id}`}>
                      <span>
                        <img 
                          src={`${IMAGE_BASE_URL}${relatedMovie.poster_path}`} 
                          alt={relatedMovie.title} 
                          className="rounded-lg shadow-lg w-full"
                        />
                        <p className="text-center mt-2">{relatedMovie.title}</p>
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Trailer Section */}
            {mainTrailer && (
              <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Trailer</h2>
                <iframe
                  src={`https://www.youtube.com/embed/${mainTrailer.key}`}
                  title={`Trailer for ${movieDetails.title}`}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full"
                  style={{height: '315px'}}
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default MovieDetails;
