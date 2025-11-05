import MovieLoader from "./MovieLoader";
import MoviesList from "./MoviesList";

function MovieResults({ movies, onSelectMovie, isLoading, error }) {
  if (isLoading) return <MovieLoader />;
  if (movies.length === 0 || error)
    return <p className="mt-4 text-center text-gray-300">{error || "Movie not found!"}</p>;
  return <MoviesList movies={movies} onSelectMovie={onSelectMovie} />;
}

export default MovieResults;
