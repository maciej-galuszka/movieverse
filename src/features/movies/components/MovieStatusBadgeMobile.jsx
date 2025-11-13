import { IoStar, IoBookmark } from "react-icons/io5";

function MovieStatusBadgeMobile({ userRating, list }) {
  if (list === "watchlist") {
    return (
      <div className="flex w-44 items-center gap-2 rounded-md bg-darkerLightGray px-4 py-3">
        <span className="text-xs font-medium">On your watchlist!</span>
        <IoBookmark className="text-violet-500" />
      </div>
    );
  }
  return (
    <div className="flex w-44 items-center gap-2 rounded-md bg-darkerLightGray px-4 py-3">
      <span className="text-xs font-medium">Your rating : {userRating}</span>
      <IoStar className="text-yellow-300" />
    </div>
  );
}

export default MovieStatusBadgeMobile;
