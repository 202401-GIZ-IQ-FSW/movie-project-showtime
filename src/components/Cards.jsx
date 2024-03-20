import React, { useState } from 'react';

function Cards({ filteredMovies }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === filteredMovies.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? filteredMovies.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative overflow-hidden ">
      <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
        {/* Render the original set of images */}
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="w-1/4 flex-none">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="w-40 h-auto rounded object-fit"
            />
          </div>
        ))}
        {/* Render a duplicate set of images for looping */}
        {filteredMovies.map((movie) => (
          <div key={`${movie.id}-duplicate`} className="w-1/4 flex-none">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="w-40 h-auto rounded object-fit"
            />
          </div>
        ))}
      </div>
      <button className="absolute top-1/2 transform -translate-y-1/2 left-0" onClick={handlePrev}>
        Prev
      </button>
      <button className="absolute top-1/2 transform -translate-y-1/2 right-0" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Cards;
