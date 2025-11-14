import { IoCalendarClearSharp, IoReaderOutline, IoStar } from "react-icons/io5";
import { PiNotePencilBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteWatched } from "../moviesSlice";
import Button from "../../../shared/ui/buttons/Button";

function WatchedItem({ movie }) {
  const dispatch = useDispatch();
  return (
    <li className="flex justify-between gap-4 px-4 py-6 sm:gap-10 md:px-8">
      <div className="flex gap-12">
        <img className="w-24" src={movie.Poster} alt={`${movie.Title} cover photo`} />
        <div className="flex flex-col justify-center gap-2">
          <p className="w-80 text-xl font-medium md:text-2xl">{movie.Title}</p>
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

      <div className="flex gap-10">
        {movie.comment && (
          <div className="flex w-60 flex-col justify-center gap-1.5 rounded-lg bg-[#363c43] px-6 py-4">
            <p className="flex flex-col gap-2">
              <span className="flex items-center gap-1.5">
                <PiNotePencilBold /> Notes:
              </span>
              <span className="overflow-y-auto text-sm italic">{movie.comment}</span>
            </p>
          </div>
        )}

        <div className="flex flex-col justify-center gap-6">
          <Button>EDIT</Button>
          <Button onClick={() => dispatch(deleteWatched(movie.imdbID))}>REMOVE</Button>
        </div>
      </div>
    </li>
  );
}

export default WatchedItem;
