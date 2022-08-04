import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";

import './App.scss';
import SearchIcon from './search.svg';

const API_SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=30a95f151f99b59e441796c6ba07f223'
const API_LATEST_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=30a95f151f99b59e441796c6ba07f223&language=en-US'
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_SEARCH_URL}&query=${title}`);
    const data = await response.json();
    setMovies(data.results);
  }
  const latestMovies = async () => {
    const response = await fetch(`${API_LATEST_URL}`);
    const data = await response.json();
    setMovies(data.results);
  }
  
  useEffect(() => {
    searchMovies();
  }, []);
  
  useEffect(() => {
    latestMovies();
  }, []);

  return (
    <div className="app">
      <h1>Movie Database Test</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              searchMovies(event.target.value)
            }
          }}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length 
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) :
          (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;