import { IoBookmark, IoStar } from "react-icons/io5";

function MovieListStatus({ userRating, list }) {
  if (list === "watchlist") {
    return (
      <div className="flex items-center justify-center gap-2 rounded-lg bg-darkerLightGray px-6 py-4">
        <span className="text-sm font-medium md:text-base">On your watchlist!</span>{" "}
        <IoBookmark className="text-violet-500" />
      </div>
    );
  } else
    return (
      <div className="flex items-center justify-center gap-2 rounded-lg bg-darkerLightGray px-6 py-4">
        <span className="text-sm font-medium md:text-base">
          You rated this movie with {userRating}
        </span>{" "}
        <IoStar className="text-yellow-300" />
      </div>
    );
}

export default MovieListStatus;
