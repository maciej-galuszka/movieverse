import { useMoviesSearch } from "../features/movies/hooks/useMoviesSearch";
import MovieDetails from "@/features/movies/components/MovieDetails";
import MovieList from "@/features/movies/components/MoviesList";
import MoviesSearchForm from "@/features/movies/components/MoviesSearchForm";

function Movies() {
  const {
    movies,
    selectedID,
    setSelectedID,
    query,
    setQuery,
    error,
    isLoading,
    handleSearchMovie,
  } = useMoviesSearch();

  return (
    <section className="h-min-full md:max-w-5x mx-auto grid min-h-full grid-cols-2 grid-rows-[auto_1fr] items-start justify-center gap-6 pb-10 text-white sm:max-w-4xl">
      <MoviesSearchForm onSearchMovie={handleSearchMovie} query={query} onSetQuery={setQuery} />
      {error === null ? (
        <h1 className="col-span-full mt-20 text-center text-5xl font-medium tracking-wide">
          Looking for a movie? Start here!
        </h1>
      ) : (
        <>
          <div className="min-h-full divide-y divide-gray-600 overflow-hidden rounded-lg bg-lightGray">
            <MovieList
              movies={movies}
              isLoading={isLoading}
              error={error}
              onSetSelectedID={setSelectedID}
            />
          </div>
          <div className="min-h-full overflow-hidden rounded-lg bg-lightGray">
            <MovieDetails
              searchError={error}
              selectedID={selectedID}
              onSetSelectedID={setSelectedID}
            />
          </div>
        </>
      )}
    </section>
  );
}

export default Movies;
