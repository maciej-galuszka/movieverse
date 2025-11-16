import { IoBookmark, IoStar } from "react-icons/io5";

function MovieStatusBadge({ userRating, list = "watched" }) {
  if (list === "watchlist") {
    return (
      <div className="flex items-center justify-center gap-2 rounded-lg bg-darkerLightGray px-6 py-4">
        <span className="text-sm font-medium md:text-base">On your watchlist!</span>{" "}
        <IoBookmark className="text-violet-500" />
      </div>
    );
  } else if (list === "watched")
    return (
      <div className="flex items-center justify-center gap-2 rounded-lg bg-darkerLightGray px-6 py-4">
        <span className="text-sm font-medium md:text-base">Your rating: {userRating}/10</span>{" "}
        <IoStar className="mb-0.5 text-yellow-300" />
      </div>
    );
}

export default MovieStatusBadge;
