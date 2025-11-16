import { IoStar, IoBookmark } from "react-icons/io5";

function MovieStatusBadgeMobile({ userRating, list }) {
  if (list === "watchlist") {
    return (
      <div className="flex max-w-36 items-center gap-2 rounded-md bg-darkerLightGray px-2 py-3">
        <span className="text-xxs font-medium">On your watchlist!</span>
        <IoBookmark className="text-violet-500" />
      </div>
    );
  }
  return (
    <div className="flex max-w-36 items-center gap-2 rounded-md bg-darkerLightGray px-2 py-3">
      <span className="text-xxs font-medium">Your rating : {userRating}/10</span>
      <IoStar className="mb-0.5 text-sm text-yellow-300" />
    </div>
  );
}

export default MovieStatusBadgeMobile;
