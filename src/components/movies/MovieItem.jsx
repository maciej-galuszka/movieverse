import { IoCalendarClearSharp } from "react-icons/io5";

function MovieItem({ movie, onSetSelectedID }) {
  return (
    <li
      className="hover:bg-lightGrayHover flex items-center gap-10 px-8 py-6 transition-colors duration-200 hover:cursor-pointer"
      onClick={() => onSetSelectedID(movie.imdbID)}
    >
      <img className="w-16" src={movie.Poster} alt={`${movie.Title} cover photo`} />
      <div className="space-y-2">
        <p className="text-lg font-medium">{movie.Title}</p>
        <p className="flex items-center gap-2 text-sm text-gray-300">
          <IoCalendarClearSharp aria-hidden="true" className="mb-0.5" />
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default MovieItem;
