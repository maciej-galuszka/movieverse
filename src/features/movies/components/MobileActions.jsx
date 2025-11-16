import { RiMenuAddFill } from "react-icons/ri";
import { addToWatchlist } from "../moviesSlice";
import { useDispatch } from "react-redux";

function MobileActions({ movie, onShowForm }) {
  const dispatch = useDispatch();

  return (
    <div className="mt-1 flex flex-col gap-2 sm:hidden">
      <button
        className="flex w-20 items-center gap-1 rounded-[0.2rem] bg-violet-500 px-1 py-0.5 text-xxs"
        type="button"
        onClick={() => onShowForm(true)}
      >
        <RiMenuAddFill /> <span className="font-medium">Watched</span>
      </button>
      <button
        className="flex w-20 items-center gap-1 rounded-[0.2rem] bg-violet-500 px-1 py-0.5 text-xxs"
        onClick={() => dispatch(addToWatchlist(movie))}
      >
        <RiMenuAddFill /> <span className="font-medium">Watchlist</span>
      </button>
    </div>
  );
}

export default MobileActions;
