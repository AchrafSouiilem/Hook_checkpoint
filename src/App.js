import './App.css';
import MovieList from './components/movieList';
import Filter from './components/filter';
import { useState } from 'react';
import movieData from './components/movieData';

function App() {
  const [movies, setMovies] = useState(movieData)
  const [filterTitle, setFliterTitle]= useState("")
  const [filterRating, setFilterRating] = useState(0)
  return (
    <div className="App">
      <Filter filterRating={filterRating} setFilterRating={setFilterRating} setFliterTitle={setFliterTitle} />
      <MovieList movies={movies} filterRating={filterRating} filterTitle={filterTitle} setMovies={setMovies}  />
    </div>
  );
}
export default App;
