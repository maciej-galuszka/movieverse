import { addToWatchlist } from "../moviesSlice";
import { useDispatch } from "react-redux";
import Button from "@/shared/ui/buttons/Button";

function DesktopActions({ movie, onShowForm, justify = "between" }) {
  const dispatch = useDispatch();

  return (
    <div className={`grid-row-2 grid gap-4 md:flex md:justify-${justify} md:gap-4`}>
      <Button onClick={() => onShowForm(true)}>
        <span className="whitespace-nowrap text-xs uppercase lg:text-sm">Add to watched</span>
      </Button>
      <Button onClick={() => dispatch(addToWatchlist(movie))}>
        <span className="whitespace-nowrap text-xs uppercase lg:text-sm">Add to watchlist</span>
      </Button>
    </div>
  );
}

export default DesktopActions;
