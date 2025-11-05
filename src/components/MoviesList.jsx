import MovieItem from "./MovieItem";

function MoviesList({ movies, onSelectMovie }) {
  return movies.map((movie) => (
    <MovieItem onClick={() => onSelectMovie(movie)} movie={movie} key={movie.imdbID} />
  ));
}

export default MoviesList;
