import { useMoviesSearch } from "../features/movies/hooks/useMoviesSearch";
import { useSearchParams } from "react-router-dom";
import MovieDetails from "@/features/movies/components/MovieDetails";
import MovieList from "@/features/movies/components/MoviesList";
import MoviesSearchForm from "@/features/movies/components/MoviesSearchForm";

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const {
    movies,
    selectedID,
    setSelectedID,
    query,
    setQuery,
    error,
    isLoading,
    handleSearchMovie,
  } = useMoviesSearch(initialQuery);

  const handleQueryChange = (query) => {
    setQuery(query);
    setSearchParams({ q: query }, { replace: true });
  };

  return (
    <section className="mx-auto grid min-h-full grid-cols-1 grid-rows-[auto_1fr] items-start justify-center gap-x-6 gap-y-4 px-14 pb-12 text-white sm:grid-cols-2 sm:gap-y-6 sm:px-9 lg:max-w-5xl lg:gap-x-10 lg:px-0">
      <MoviesSearchForm
        onSearchMovie={handleSearchMovie}
        query={query}
        onSetQuery={handleQueryChange}
      />
      {error === null ? (
        <h1 className="col-span-full mt-12 text-center text-2xl font-medium tracking-wide sm:mt-20 sm:text-5xl">
          Looking for a movie? <br /> Start here!
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
          <div className="hidden min-h-full overflow-hidden rounded-lg bg-lightGray sm:block">
            <MovieDetails searchError={error} selectedID={selectedID} />
          </div>
        </>
      )}
    </section>
  );
}

export default Movies;
