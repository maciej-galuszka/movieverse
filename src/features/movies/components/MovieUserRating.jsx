import { IoStar } from "react-icons/io5";

function MovieUserRating({ userRating, type }) {
  if (type === "mobile") {
    return (
      <div className="flex w-40 items-center gap-2 rounded-md bg-[#3c434a] px-4 py-3">
        <span className="text-xs font-medium">Your rating : {userRating}</span>
        <IoStar className="text-yellow-300" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 rounded-lg bg-[#3c434a] px-6 py-4">
      <span className="text-sm font-medium md:text-base">
        You rated this movie with {userRating}
      </span>{" "}
      <IoStar className="text-yellow-300" />
    </div>
  );
}

export default MovieUserRating;
