import { IoCalendarClearSharp, IoReader } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteFromWatchlist } from "../moviesSlice";
import { useState } from "react";
import Button from "../../../shared/ui/buttons/Button";
import MovieRatingForm from "./MovieRatingForm";

function Watchlist({ movie }) {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  return (
    <li className="grid min-h-64 grid-cols-1 place-items-center gap-8 px-10 py-8 lg:flex lg:justify-between lg:gap-0">
      <img className="w-56 lg:hidden" src={movie.Poster} alt={`${movie.Title} cover photo`} />
      <div className="flex gap-12">
        <img
          className="hidden w-64 lg:block lg:w-32"
          src={movie.Poster}
          alt={`${movie.Title} cover photo`}
        />
        <div className="flex flex-col justify-center gap-2">
          <p className="max-w-72 text-lg font-medium sm:text-xl md:text-2xl">{movie.Title}</p>
          <div className="flex flex-col items-start gap-1 text-gray-300">
            <span className="flex items-center gap-1.5 text-sm">
              <IoCalendarClearSharp aria-hidden="true" className="mb-[0.2rem]" />
              {movie.Year}
            </span>
            <NavLink
              className="flex items-center gap-1.5 text-sm transition-colors duration-300 hover:text-gray-100"
              to={`/app/movies/${movie.imdbID}`}
            >
              <IoReader className="-ml-0.5 text-base" />
              <span className="font-medium">Details</span>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 lg:w-auto lg:flex-row">
        {showForm && (
          <MovieRatingForm
            movie={movie}
            size="small"
            onShowForm={setShowForm}
            type="addFromWatchlist"
          />
        )}
        <div className="flex justify-center gap-6 lg:ml-auto lg:flex-col">
          <Button onClick={() => setShowForm(true)}>
            <span className="text-xxs sm:text-base">WATCHED</span>
          </Button>
          <Button onClick={() => dispatch(deleteFromWatchlist(movie.imdbID))}>
            <span className="text-xxs sm:text-base">REMOVE</span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default Watchlist;
