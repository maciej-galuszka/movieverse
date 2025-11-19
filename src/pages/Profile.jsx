import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "@/features/auth/authSlice";
import { selectWatched, selectWatchlist } from "@/features/movies/moviesSlice";
import { IoBookmark, IoStar, IoCheckmarkCircle } from "react-icons/io5";

function Profile() {
  const watched = useSelector(selectWatched);
  const watchlist = useSelector(selectWatchlist);
  const user = useSelector(selectUser);

  const averageRating =
    watched.length > 0
      ? (watched.reduce((sum, movie) => sum + (movie.rating || 0), 0) / watched.length).toFixed(1)
      : null;

  const lastWatchedMovies = watched.slice(-6).reverse();

  return (
    <section className="mx-auto max-w-5xl px-12 pb-6 pt-12 text-white sm:px-0">
      <h1 className="mb-4 text-2xl font-bold sm:mb-8 sm:text-4xl">{user.name}</h1>

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        <div className="flex items-center justify-between rounded-xl bg-lightGray px-6 py-3 shadow-lg sm:block sm:p-6">
          <h2 className="flex items-center gap-2.5 text-base font-semibold sm:mb-2 sm:text-2xl">
            <IoCheckmarkCircle className="text-violet-500" />
            Watched Movies
          </h2>
          <p className="text-xs text-gray-300 sm:text-lg">{watched.length} movies</p>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-lightGray px-6 py-3 shadow-lg sm:block sm:p-6">
          <h2 className="flex items-center gap-2.5 text-base font-semibold sm:mb-2 sm:text-2xl">
            <IoBookmark className="text-violet-500" />
            Watchlist
          </h2>
          <p className="text-xs text-gray-300 sm:text-lg">{watchlist.length} movies</p>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-lightGray p-6 px-6 py-3 shadow-lg sm:block sm:p-6">
          <h2 className="flex items-center gap-2.5 text-base font-semibold sm:mb-2 sm:text-2xl">
            <IoStar className="text-violet-500" />
            Average Rating
          </h2>
          {averageRating ? (
            <p className="text-xs text-gray-300 sm:text-lg">{averageRating} / 10</p>
          ) : (
            <p className="text-xs text-gray-300 sm:text-lg">No ratings yet</p>
          )}
        </div>
      </div>

      {lastWatchedMovies.length > 0 && (
        <section className="mt-8 sm:mt-12">
          <h2 className="mb-6 text-2xl font-semibold">Recently Watched</h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {lastWatchedMovies.map((movie) => (
              <Link
                key={movie.imdbID}
                to={`/app/movies/${movie.imdbID}`}
                className="relative h-60 w-full overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img src={movie.Poster} alt={movie.Title} className="h-full w-full object-cover" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}

export default Profile;
