import { useState } from "react";
import { IoStar } from "react-icons/io5";
import { useSelector } from "react-redux";
import Rating from "./Rating";
import NavButton from "./NavButton";
import Button from "./Button";

function MovieDetails({ movie }) {
  const [showRatingForm, setShowRatingForm] = useState(false);
  const watched = useSelector((state) => state.movies.watched);
  const userRating = watched.find((watched) => watched.imdbID === movie.imdbID)?.rating;

  function handleAddToWatchlist() {}

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
        </div>
      </div>

      <div className="space-y-6 p-6">
        <p className="italic">{movie.Plot}</p>

        {userRating ? (
          <div className="mt-6 flex items-center gap-2 rounded-lg bg-[#3c434a] px-6 py-4">
            <span className="font-medium">You rated this movie with {userRating}</span>{" "}
            <IoStar className="text-yellow-300" />
          </div>
        ) : showRatingForm ? (
          <Rating movie={movie} onSetShowRatingForm={setShowRatingForm} />
        ) : (
          <div className="flex justify-between">
            <Button onClick={() => setShowRatingForm(true)}>Add to watched</Button>
            <Button onClick={handleAddToWatchlist}>Add to watchlist</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
