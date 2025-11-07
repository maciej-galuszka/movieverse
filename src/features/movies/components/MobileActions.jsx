import { RiMenuAddFill } from "react-icons/ri";

function MobileActions({ onShowForm }) {
  return (
    <div className="mt-auto flex gap-4 sm:hidden">
      <button
        className="flex w-20 items-center gap-1 rounded-[0.2rem] bg-violet-500 px-1 py-0.5 text-xxs"
        type="button"
        onClick={() => onShowForm(true)}
      >
        <RiMenuAddFill /> <span className="font-medium">WATCHED</span>
      </button>
      <button className="flex w-20 items-center gap-1 rounded-[0.2rem] bg-violet-500 px-1 py-0.5 text-xxs">
        <RiMenuAddFill /> <span className="font-medium">WATCHLIST</span>
      </button>
    </div>
  );
}

export default MobileActions;
