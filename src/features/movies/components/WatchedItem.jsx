import { IoCalendarClearSharp, IoReaderOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function WatchedItem({ movie }) {
  return (
    <li className="flex flex-col gap-6 px-4 py-6 transition-colors duration-200 hover:cursor-pointer sm:hover:bg-lightGrayHover md:px-8">
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
            <IoReaderOutline />
            <span className="font-medium">DETAILS</span>
          </NavLink>
        </div>
      </div>
    </li>
  );
}

export default WatchedItem;
