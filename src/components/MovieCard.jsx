import React from "react";

const IMG_URL = 'https://image.tmdb.org/t/p/original';
const PLACEHOLDER_IMG = 'https://via.placeholder.com/400';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.release_date}</p>
      </div>
      <div>
        <img
          src={movie.backdrop_path ? `${IMG_URL}${movie.backdrop_path}` : PLACEHOLDER_IMG}
          alt={movie.title} />
      </div>
      <div>
        <h3>{movie.title}</h3>
      </div>
    </div>

  )
}

export default MovieCard;