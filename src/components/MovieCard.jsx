import React from "react";

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const PLACEHOLDER_IMG = 'https://via.placeholder.com/500';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <p>{movie.release_date}</p>
      <img
        src={movie.backdrop_path ? `${IMG_URL}${movie.backdrop_path}` : PLACEHOLDER_IMG}
        alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>

  )
}

export default MovieCard;