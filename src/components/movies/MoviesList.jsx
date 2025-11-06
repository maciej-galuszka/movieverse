import MovieLoader from "./MovieLoader";
import MovieError from "./MovieError";
import MovieItem from "./MovieItem";

function MoviesList({ movies, isLoading, error, onSetSelectedID }) {
  const showList = !isLoading && !error && movies;
  const renderContent = () => {
    if (isLoading) return <MovieLoader />;
    if (error) return <MovieError error={error} />;
    if (showList)
      return movies.map((movie) => (
        <MovieItem movie={movie} key={movie.imdbID} onSetSelectedID={onSetSelectedID} />
      ));
    return null;
  };

  return <ul className="divide-y divide-gray-600">{renderContent()}</ul>;
}

export default MoviesList;
