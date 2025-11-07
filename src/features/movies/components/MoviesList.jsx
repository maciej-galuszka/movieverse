import MovieLoader from "./MovieLoader";
import MovieError from "./MovieError";
import MovieItem from "./MovieItem";

function MoviesList({ movies, isLoading, error, onSetSelectedID }) {
  if (isLoading) return <MovieLoader />;
  if (error) return <MovieError error={error} />;
  if (!movies) return null;

  return (
    <ul className="divide-y divide-gray-600">
      {movies.map((movie) => (
        <MovieItem key={movie.imdbID} movie={movie} onSetSelectedID={onSetSelectedID} />
      ))}
    </ul>
  );
}

export default MoviesList;
