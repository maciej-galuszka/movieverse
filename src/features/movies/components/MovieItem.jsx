import { IoCalendarClearSharp, IoReader } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectOnWatchlist, selectRating } from "../moviesSlice";
import MovieRatingForm from "./MovieRatingForm";
import MovieStatusBadgeMobile from "./MovieStatusBadgeMobile";
import MobileActions from "./MobileActions";

function MovieItem({ movie, onSetSelectedID }) {
  const [showForm, setShowForm] = useState(false);
  const userRating = useSelector(selectRating(movie));
  const isOnWatchList = useSelector(selectOnWatchlist(movie));

  return (
    <li
      className="flex flex-col gap-6 px-4 py-6 transition-colors duration-200 hover:cursor-pointer sm:hover:bg-lightGrayHover md:px-8"
      onClick={() => onSetSelectedID(movie.imdbID)}
    >
      <div className="flex gap-4 sm:gap-10">
        <img className="w-20" src={movie.Poster} alt={`${movie.Title} cover photo`} />
        <div className="flex flex-1 flex-col gap-1 sm:justify-center sm:space-y-2">
          <p
            className={`${movie.Title.length > 15 ? "text-sm" : "text-base"} font-medium md:text-lg`}
          >
            {movie.Title}
          </p>
          <p className="flex items-center gap-2 text-xs text-gray-300">
            <IoCalendarClearSharp aria-hidden="true" className="mb-0.5" />
            <span>{movie.Year}</span>
          </p>

          <NavLink
            className="flex items-center gap-2 text-xs text-gray-300 transition-colors duration-300 hover:text-gray-100 sm:hidden"
            to={`/app/movies/${movie.imdbID}`}
          >
            <IoReader />
            <span className="font-medium">Details</span>
          </NavLink>

          {userRating || isOnWatchList ? (
            <div className="mt-auto sm:hidden">
              <MovieStatusBadgeMobile
                userRating={userRating}
                list={`${userRating ? "watched" : "watchlist"}`}
              />
            </div>
          ) : (
            <MobileActions movie={movie} onShowForm={setShowForm} />
          )}
        </div>
      </div>
      {showForm && !isOnWatchList && (
        <div className="sm:hidden">
          <MovieRatingForm movie={movie} onShowForm={setShowForm} />
        </div>
      )}
    </li>
  );
}

export default MovieItem;
