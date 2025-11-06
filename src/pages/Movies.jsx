/* import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import imageExists from "../utils/imageExists";
import MovieLoader from "../components/MovieLoader";
import MovieDetails from "../components/MovieDetails";
import MovieResults from "../components/MovieResults";
import { IoWarningOutline } from "react-icons/io5";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoadingMovie, setIsLoadingMovie] = useState(false);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  const KEY = "e82c1ba1";
  const URL = `https://www.omdbapi.com/?apikey=${KEY}`;

  useEffect(() => {
    if (!query.trim()) return;
    const timer = setTimeout(() => {
      handleSearchMovie();
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  async function handleSearchMovie() {
    setError("");
    setHasSearched(true);
    setIsLoadingMovie(true);
    try {
      const res = await fetch(`${URL}&s=${query}`);
      if (!res.ok) throw new Error("Error");

      const data = await res.json();

      if (!data.Search) throw new Error("Movie not found!");

      const validMovies = (
        await Promise.all(
          data.Search.map(async (movie) => ((await imageExists(movie.Poster)) ? movie : null))
        )
      ).filter(Boolean);

      handleSelectMovie(validMovies[0]);
      setMovies(validMovies);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoadingMovie(false);
    }
  }

  async function handleSelectMovie(movie) {
    if (movie.imdbID === selectedMovie.imdbID) return;
    setIsLoadingDetails(true);
    try {
      const res = await fetch(`${URL}&i=${movie.imdbID}`);
      if (!res.ok) throw new Error("something went wrong");
      const movieDetails = await res.json();
      setSelectedMovie(movieDetails);
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoadingDetails(false);
    }
  }

  return (
    <section className="h-min-full md:max-w-5x mx-auto grid min-h-full grid-cols-2 grid-rows-[auto_1fr] items-start justify-center gap-6 pb-10 text-white sm:max-w-4xl">
      <form
        className="bg-lightGray col-span-full mt-8 flex flex-col gap-2 rounded-lg px-8 py-8"
        action=""
        onSubmit={(e) => handleSearchMovie(e)}
      >
        <div className="relative">
          <input
            className="h-12 w-full rounded-md px-4 text-dark"
            type="text"
            value={query}
            placeholder="Find your favorite movie!"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <IoSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-violet-500" />
        </div>
      </form>

      {hasSearched ? (
        <>
          <ul className="bg-lightGray min-h-full divide-y divide-gray-600 overflow-hidden rounded-lg">
            <MovieResults
              movies={movies}
              isLoading={isLoadingMovie}
              error={error}
              onSelectMovie={handleSelectMovie}
            />
          </ul>
          <div className="bg-lightGray min-h-full overflow-hidden rounded-lg">
            {isLoadingMovie || isLoadingDetails ? (
              <MovieLoader />
            ) : error ? (
              <p className="mt-12 flex justify-center gap-4 text-center text-3xl text-gray-300">
                <IoWarningOutline className="" />
                {error || "Something went wrong. Please try again."}
              </p>
            ) : (
              <MovieDetails movie={selectedMovie} />
            )}
          </div>
        </>
      ) : (
        <h1 className="col-span-full mt-20 text-center text-5xl font-medium tracking-wide">
          Looking for a movie? Start here!
        </h1>
      )}
    </section>
  );
}

export default Movies;
 */

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoWarningOutline } from "react-icons/io5";
import imageExists from "../utils/imageExists";
import MovieLoader from "../components/movies/MovieLoader";
import MovieDetails from "../components/movies/MovieDetails";
import MovieList from "../components/movies/MoviesList";
import MoviesSearchForm from "../components/movies/MoviesSearchForm";

function Movies() {
  const [movies, setMovies] = useState(null);
  const [selectedID, setSelectedID] = useState(null);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const KEY = "e82c1ba1";
  const URL = `https://www.omdbapi.com/?apikey=${KEY}`;

  async function handleSearchMovie() {
    if (!query) return;
    setError("");
    setIsLoading(true);
    try {
      const res = await fetch(`${URL}&s=${query}`);
      if (!res.ok) throw new Error("Error");

      const data = await res.json();

      if (!data.Search) throw new Error("Movie not found!");

      const validMovies = (
        await Promise.all(
          data.Search.map(async (movie) => ((await imageExists(movie.Poster)) ? movie : null))
        )
      ).filter(Boolean);

      setSelectedID(validMovies[0].imdbID);
      setMovies(validMovies);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="h-min-full md:max-w-5x mx-auto grid min-h-full grid-cols-2 grid-rows-[auto_1fr] items-start justify-center gap-6 pb-10 text-white sm:max-w-4xl">
      <MoviesSearchForm onSearchMovie={handleSearchMovie} query={query} onSetQuery={setQuery} />
      {error === null ? (
        <h1 className="col-span-full mt-20 text-center text-5xl font-medium tracking-wide">
          Looking for a movie? Start here!
        </h1>
      ) : (
        <>
          <div className="bg-lightGray min-h-full divide-y divide-gray-600 overflow-hidden rounded-lg">
            <MovieList
              movies={movies}
              isLoading={isLoading}
              error={error}
              onSetSelectedID={setSelectedID}
            />
          </div>
          <div className="bg-lightGray min-h-full overflow-hidden rounded-lg">
            <MovieDetails selectedID={selectedID} onSetSelectedID={setSelectedID} />
          </div>
        </>
      )}
    </section>
  );
}

export default Movies;
