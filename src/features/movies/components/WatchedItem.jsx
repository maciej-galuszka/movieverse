import { IoCalendarClearSharp, IoReaderOutline, IoStar } from "react-icons/io5";
import { PiNotePencilBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteWatched } from "../moviesSlice";
import Button from "../../../shared/ui/buttons/Button";
import MovieRatingForm from "./MovieRatingForm";
import WatchedNotes from "./WatchedNotes";
import { useState } from "react";

function WatchedItem({ movie }) {
  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();
  return (
    <li className="flex justify-between px-10 py-8">
      <div className="flex gap-12">
        <img className="w-32" src={movie.Poster} alt={`${movie.Title} cover photo`} />
        <div className="flex flex-col justify-center gap-2">
          <p className="max-w-72 text-xl font-medium md:text-2xl">{movie.Title}</p>
          <p className="flex flex-col items-start gap-1 text-gray-300">
            <span className="flex items-center gap-1.5 text-sm">
              <IoCalendarClearSharp aria-hidden="true" className="mb-[0.2rem]" />
              {movie.Year}
            </span>
            <span className="flex items-center gap-1.5 text-sm">
              <IoStar className="mb-[0.2rem] text-sm text-yellow-300" />
              <span>Rated: {movie.rating}</span>
            </span>
            <NavLink
              className="flex items-center gap-1.5 text-sm transition-colors duration-300 hover:text-gray-100"
              to={`/app/movies/${movie.imdbID}`}
            >
              <IoReaderOutline className="-ml-0.5 text-base" />
              <span className="font-medium">Details</span>
            </NavLink>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-10">
        {showForm ? (
          <MovieRatingForm movie={movie} size="small" onShowForm={setShowForm} type="update" />
        ) : (
          <WatchedNotes notes={movie.notes} />
        )}

        <div className="ml-auto flex flex-col justify-center gap-6">
          <Button onClick={() => setShowForm(true)}>EDIT</Button>
          <Button onClick={() => dispatch(deleteWatched(movie.imdbID))}>REMOVE</Button>
        </div>
      </div>
    </li>
  );
}

export default WatchedItem;
