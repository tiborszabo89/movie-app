import React from "react";

const IMG_URL = 'https://image.tmdb.org/t/p/original';
const PLACEHOLDER_IMG = 'https://www.stevensegallery.com/640/360';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="top-info">
        <p>{movie.release_date}</p>
      </div>
      <div className="card-cover"
        style={{ backgroundImage: `url(${movie.backdrop_path}` ? `url(${IMG_URL}${movie.backdrop_path})` : `url(${PLACEHOLDER_IMG})` }}>
      </div>
      <div className="bottom-info">
        <h3>{movie.title}</h3>
      </div>
    </div>

  )
}

export default MovieCard;