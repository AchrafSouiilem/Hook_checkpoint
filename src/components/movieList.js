import MovieCard from "./movieCard";
import AddMovie from "./addMovie";
import { Link } from "react-router-dom";

const MovieList = ({ movies, filterTitle, filterRating, setMovies}) => {
  return (
    <div>
      <div className="position">
        <AddMovie movies={movies} setMovies={setMovies}/>
      </div>
      <div className="grid">
        {movies
          .filter(
            (movie) =>
              movie.title
                .toLowerCase()
                .trim()
                .includes(filterTitle.toLowerCase().trim()) &&
              movie.rating >= filterRating
          )
          .map((movie) => {
            return <Link to={`${movie.id}`} key={movie.id} > 
            <MovieCard  movie={movie} />;
            </Link>
          })}
      </div>
    </div>
  );
};

export default MovieList;
