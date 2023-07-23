import './App.css';
import MovieList from './components/movieList';
import Filter from './components/filter';
import { useState } from 'react';
import movieData from './components/movieData';
import { Route, Routes } from 'react-router-dom';
import MovieTrailer from './components/MovieTrailer';

function App() {
  const [movies, setMovies] = useState(movieData)
  const [filterTitle, setFliterTitle]= useState("")
  const [filterRating, setFilterRating] = useState(0)
  return (
    <div className="App">
      <Filter filterRating={filterRating} setFilterRating={setFilterRating} setFliterTitle={setFliterTitle} />
      <Routes>
        <Route path="/" element={<MovieList movies={movies} filterRating={filterRating} filterTitle={filterTitle} setMovies={setMovies}  />}/>
        <Route path="/:id" element={<MovieTrailer movies={movies}/>}/>
      </Routes>
    </div>
  );
}
export default App;
