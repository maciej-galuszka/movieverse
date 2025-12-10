import { useSelector } from "react-redux";
import { useState } from "react";
import { selectWatchlist } from "../features/movies/moviesSlice";
import { sortMovies } from "../shared/utils/sortMovies";
import { IoBookmark } from "react-icons/io5";
import NavButton from "../shared/ui/buttons/NavButton";
import WatchlistItem from "../features/movies/components/WatchlistItem";

function Watchlist() {
  const [sortBy, setSortBy] = useState("date");
  const watchlist = useSelector(selectWatchlist);
  const sorted = [...watchlist].sort(sortMovies[sortBy]);

  return (
    <section className="mx-auto min-h-full px-12 pb-10 pt-6 text-white lg:max-w-5xl lg:px-0">
      {sorted.length > 0 ? (
        <div className="space-y-3 sm:space-y-6">
          <div className="flex flex-col items-center justify-between gap-6 rounded-xl py-5 md:flex-row md:gap-0 md:py-7">
            <h1 className="flex items-center gap-2 text-xl font-bold sm:gap-4 sm:text-2xl md:text-3xl lg:text-4xl">
              <IoBookmark className="text-violet-500" />
              Movies you plan to watch
            </h1>
            <select
              value={sortBy}
              className="rounded-lg bg-violet-500 px-3 py-2 text-xs font-medium text-white outline-none transition-all duration-200 focus:ring-1 focus:ring-violet-300 focus:ring-offset-1 focus:ring-offset-gray-800 sm:px-4 sm:text-base"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date" className="hover:violet-300">
                SORT BY DATE ADDED
              </option>
              <option value="title">SORT BY TITLE</option>
              <option value="releaseDsc">SORT BY NEWEST</option>
              <option value="releaseAsc">SORT BY OLDEST</option>
            </select>
          </div>
          <div className="rounded-xl bg-lightGray">
            <ul className="divide-y-2 divide-gray-600 overflow-hidden rounded-lg">
              {sorted.map((movie) => (
                <WatchlistItem key={movie.imdbID} movie={movie} onSetSelectedID={() => {}} />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 md:gap-10">
          <h1 className="col-span-full mt-12 text-center text-xl font-bold tracking-wide sm:mt-16 sm:text-5xl">
            Your watchlist is empty. <br /> Find something to watch!
          </h1>
          <NavButton to="/app/movies">EXPLORE MOVIES</NavButton>
        </div>
      )}
    </section>
  );
}

export default Watchlist;
