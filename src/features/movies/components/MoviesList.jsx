import MovieLoader from "./MovieLoader";
import MovieError from "./MovieError";
import MovieItem from "./MovieItem";

function MoviesList({ movies, isLoading, error, onSetSelectedID }) {
  if (isLoading || !movies) return <MovieLoader />;
  if (!isLoading && !movies) return <MovieLoader />;
  if (error) return <MovieError error={error} />;

  return (
    <ul className="divide-y divide-gray-600">
      {movies.map((movie) => (
        <MovieItem key={movie.imdbID} movie={movie} onSetSelectedID={onSetSelectedID} />
      ))}
    </ul>
  );
}

export default MoviesList;
