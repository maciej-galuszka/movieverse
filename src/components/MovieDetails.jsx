import { IoStar } from "react-icons/io5";
import Rating from "./Rating";
// import { NavLink } from "react-router-dom";

function MovieDetails({ movie }) {
  console.log(movie);
  if (!movie.Title) return null;
  return (
    <div className="grid-row-[auto_auto] grid">
      <div className="flex bg-[#3c434a]">
        <img className="w-36" src={movie.Poster} alt={`${movie.Title} cover photo`} />
        <div className="flex w-full flex-col px-10 py-8">
          <h2 className={`${movie.Title.length > 15 ? "text-lg" : "text-2xl"} font-medium`}>
            {movie.Title}
          </h2>
          <ul className="text-sm">
            <li className="text-xs text-gray-300">
              <span className="mr-0.5">{movie.Type} •</span>
              <span className="mr-0.5"> {movie.Released} •</span>
              <span> {movie.Runtime}</span>
            </li>
            <li className="mt-6 text-gray-300">{movie.Genre}</li>
            <li className="mt-2 flex w-full items-center gap-2">
              <IoStar className="text-lg text-yellow-300" />{" "}
              <span className="text-gray-300">{movie.imdbRating} IMDB rating</span>
            </li>
          </ul>
          {/* <NavLink className="mt-4 font-medium">Details</NavLink> */}
        </div>
      </div>
      <Rating />
    </div>
  );
}

export default MovieDetails;
