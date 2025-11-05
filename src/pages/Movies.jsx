import { useState } from "react";
import MovieItem from "../components/MovieItem";
import imageExists from "../utils/imageExists";
import MovieLoader from "../components/MovieLoader";
import MovieDetails from "../components/MovieDetails";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [query, setQuery] = useState("");
  const [isLoadingMovie, setIsLoadingMovie] = useState(false);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  const KEY = "e82c1ba1";
  const URL = `https://www.omdbapi.com/?apikey=${KEY}`;

  async function handleSearchMovie(e) {
    e.preventDefault();
    setIsLoadingMovie(true);
    try {
      const res = await fetch(`${URL}&s=${query}`);
      if (!res.ok) throw new Error("Error");

      const data = await res.json();
      const validMovies = (
        await Promise.all(
          data.Search.map(async (movie) => ((await imageExists(movie.Poster)) ? movie : null))
        )
      ).filter(Boolean);

      setSelectedMovie(validMovies[0]);
      setMovies(validMovies);
    } catch (err) {
      console.error(err.message);
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
      console.log(movieDetails);
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoadingDetails(false);
    }
  }

  return (
    <section className="h-min-full md:max-w-5x mx-auto grid min-h-full grid-cols-2 grid-rows-[auto_1fr] items-start justify-center gap-6 pb-10 text-white sm:max-w-4xl">
      <form
        className="bg-lightGray grid-col-1/-1 pb8 col-span-full mt-8 flex flex-col gap-2 rounded-lg px-8 pb-8 pt-6"
        action=""
        onSubmit={(e) => handleSearchMovie(e)}
      >
        <label className="text-lg" htmlFor="">
          Search movies!
        </label>
        <input
          className="h-8 rounded-md px-4 text-dark"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <>
        <ul className="bg-lightGray min-h-full divide-y divide-gray-600 overflow-hidden rounded-lg">
          {!isLoadingMovie ? (
            movies.map((movie) => (
              <MovieItem
                onClick={() => handleSelectMovie(movie)}
                movie={movie}
                key={movie.imdbID}
              />
            ))
          ) : (
            <MovieLoader />
          )}
        </ul>
        <div className="bg-lightGray min-h-full overflow-hidden rounded-lg">
          {isLoadingMovie || isLoadingDetails ? (
            <MovieLoader />
          ) : (
            <MovieDetails movie={selectedMovie} />
          )}
        </div>
      </>
    </section>
  );
}

export default Movies;
