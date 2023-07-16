import MovieCard from "./movieCard";
import AddMovie from "./addMovie";

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
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
    </div>
  );
};

export default MovieList;
