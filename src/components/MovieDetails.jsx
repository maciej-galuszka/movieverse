import { IoStar } from "react-icons/io5";

function MovieDetails({ movie }) {
  console.log(movie);
  if (!movie.Title) return null;
  return (
    <div className="grid-row-[auto_auto] grid">
      <div className="bg-lightGrayHover flex">
        <img className="w-36" src={movie.Poster} alt={`${movie.Title} cover photo`} />
        <div className="flex w-full flex-col px-10 py-8">
          <h2 className={`${movie.Title.length > 15 ? "text-lg" : "text-2xl"} font-medium`}>
            {movie.Title}
          </h2>
          <ul className="text-sm">
            <li className="text-xs text-gray-300">
              <span className="mr-0.5">{movie.Type} •</span>
              <span> {movie.Released}</span>
            </li>
            <li className="mt-4 text-gray-300">{movie.Genre}</li>
            <li className="mt-2 flex w-full items-center gap-2">
              <IoStar className="text-lg text-yellow-300" />{" "}
              <span className="text-gray-300">{movie.imdbRating} IMDB rating</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
