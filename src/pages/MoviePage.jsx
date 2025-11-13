import { useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { TbAwardFilled } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import { useMoviesDetails } from "../features/movies/hooks/useMoviesDetails";
import { useSelector } from "react-redux";
import { selectRating, selectOnWatchlist } from "../features/movies/moviesSlice";
import { useState } from "react";
import MovieStatusBadge from "../features/movies/components/MovieStatusBadge";
import MovieRatingForm from "../features/movies/components/MovieRatingForm";
import ButtonReturn from "../shared/ui/buttons/ButtonReturn";
import DesktopActions from "../features/movies/components/DesktopActions";
import MovieLoader from "../features/movies/components/MovieLoader";

function MoviePage() {
  const { imdbID } = useParams();
  const [showRatingForm, setShowRatingForm] = useState();

  const { movie, error, isLoading } = useMoviesDetails(imdbID, "full");

  const userRating = useSelector(selectRating(movie));
  const isOnWatchlist = useSelector(selectOnWatchlist(movie));

  if (error) return <div>Błąd: {error}</div>;
  if (isLoading || !movie) return <MovieLoader />;

  return (
    <section className="mx-auto min-h-full p-10 text-white lg:max-w-5xl lg:px-0">
      <div className="relative flex flex-col gap-6 rounded-lg bg-lightGray p-8">
        <div className="flex flex-col gap-6 md:flex-row md:gap-10">
          <img
            src={movie.Poster}
            alt={`${movie.Title} cover photo`}
            className="w-64 flex-shrink-0 self-center"
          />
          <div className="flex flex-1 flex-col">
            <h1 className="text-4xl font-medium">{movie.Title}</h1>
            <p className="text-gray-30 mt-1 text-sm">
              {movie.Type} • {movie.Released} • {movie.Runtime}
            </p>
            <p className="mt-4 text-gray-300">{movie.Genre}</p>

            <div className="mt-2 flex flex-col gap-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <IoStar className="text-gray-300" />
                {movie.imdbRating} IMDB rating
              </div>
              <div className="flex items-center gap-2">
                <AiFillLike className="text-gray-300" />
                {movie.imdbVotes} IMDB votes
              </div>
              <div className="flex items-center gap-2">
                <TbAwardFilled className="text-gray-300" />
                {movie.Awards} awards
              </div>
              <div className="flex items-center gap-2">
                <FaDollarSign className="text-gray-300" />
                {movie.BoxOffice} Box office
              </div>
              <div className="flex items-center gap-2">
                <IoPeople className="text-gray-300" />
                {movie.Rated} Rated
              </div>
              <div className="flex items-center gap-2">
                <RiMovie2Fill className="text-gray-300" />
                {movie.Production} Production
              </div>
            </div>

            <p className="mt-10 text-sm text-white md:mt-auto md:text-base">
              Director: {movie.Director}
            </p>
            <p className="text-sm text-white md:text-base">Actors: {movie.Actors}</p>
          </div>
        </div>

        <p className="mt-6 rounded-lg bg-darkerLightGray p-6 text-sm italic text-white md:text-lg">
          {movie.Plot}
        </p>
        {userRating || isOnWatchlist ? (
          <MovieStatusBadge
            userRating={userRating}
            list={`${userRating ? "watched" : "watchlist"}`}
          />
        ) : showRatingForm ? (
          <MovieRatingForm movie={movie} onShowForm={setShowRatingForm} />
        ) : (
          <DesktopActions movie={movie} onShowForm={setShowRatingForm} justify="start" />
        )}
        <ButtonReturn />
      </div>
    </section>
  );
}

export default MoviePage;
