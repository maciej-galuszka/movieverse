import { IoStar } from "react-icons/io5";
import { useMoviesDetails } from "../hooks/useMoviesDetails";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { IoReader } from "react-icons/io5";
import { selectOnWatchlist } from "../moviesSlice";
import MovieRatingForm from "./MovieRatingForm";
import MovieLoader from "./MovieLoader";
import MovieError from "./MovieError";
import DesktopActions from "./DesktopActions";
import MovieStatusBadge from "./MovieStatusBadge";

function MovieDetails({ selectedID, searchError }) {
  const { movie, error, isLoading, showRatingForm, setShowRatingForm, userRating } =
    useMoviesDetails(searchError ? null : selectedID);
  const isOnWatchlist = useSelector(selectOnWatchlist(movie));

  if (searchError) return null;
  if (error) return <MovieError error={error} />;
  if (isLoading || !movie) return <MovieLoader />;

  return (
    <div className="grid-row-[auto_auto] grid">
      <div className="flex bg-darkerLightGray">
        <img
          className="w-28 md:w-32 lg:w-36"
          src={movie.Poster}
          alt={`${movie.Title} cover photo`}
        />
        <div className="flex w-full flex-col px-2 py-4 pt-6 md:px-6 md:pt-8 lg:px-10">
          <h2
            className={`${movie.Title.length > 15 ? "text-sm md:text-base lg:text-lg" : "text-base md:text-xl lg:text-2xl"} font-semibold`}
          >
            {movie.Title}
          </h2>
          <ul className="text-xs md:text-sm">
            <li className="text-xxs text-gray-300 md:text-xs">
              <span className="mr-0.5">{movie.Type} •</span>
              <span className="mr-0.5"> {movie.Released} •</span>
              <span> {movie.Runtime}</span>
            </li>
            <li className="mt-4 text-xxs text-gray-300 lg:mt-6 lg:text-xs">{movie.Genre}</li>
            <li className="mt-2 flex w-full items-center gap-2">
              <IoStar className="text-base text-yellow-300 md:text-lg" />
              <span className="text-gray-300">
                {movie.imdbRating} <span>IMDB rating</span>
              </span>
            </li>
            <li className="flex">
              <NavLink
                className="mt-2 flex items-center gap-2 text-gray-300 transition-colors duration-300 hover:text-gray-100"
                to={`/app/movies/${movie.imdbID}`}
              >
                <IoReader className="text-base md:text-lg" />
                <span className="font-medium">Details</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-6 py-6 lg:px-10">
        <p className="mb-6 text-sm italic md:text-base">{movie.Plot}</p>

        {userRating || isOnWatchlist ? (
          <MovieStatusBadge
            userRating={userRating}
            list={`${userRating ? "watched" : "watchlist"}`}
          />
        ) : showRatingForm ? (
          <MovieRatingForm movie={movie} onShowForm={setShowRatingForm} />
        ) : (
          <DesktopActions movie={movie} onShowForm={setShowRatingForm} />
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
