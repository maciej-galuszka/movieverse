import { useSelector } from "react-redux";
import { useState } from "react";
import { selectWatched } from "../features/movies/moviesSlice";
import parseReleaseYear from "@/shared/utils/parseReleaseYear";
import NavButton from "../shared/ui/buttons/NavButton";
import WatchedItem from "../features/movies/components/WatchedItem";

function Watched() {
  const [sortBy, setSortBy] = useState("date");
  const watched = useSelector(selectWatched);

  const sortFunctions = {
    title: (a, b) => a.Title.localeCompare(b.Title),
    rating: (a, b) => b.rating - a.rating,
    releaseDsc: (a, b) => parseReleaseYear(b.Year) - parseReleaseYear(a.Year),
    releaseAsc: (a, b) => parseReleaseYear(a.Year) - parseReleaseYear(b.Year),
    date: (a, b) => new Date(b.date) - new Date(a.date),
  };

  const sorted = [...watched].sort(sortFunctions[sortBy]);

  return (
    <section className="mx-auto min-h-full px-10 py-10 text-white sm:px-24 lg:max-w-5xl lg:px-0">
      {sorted.length > 0 ? (
        <div className="space-y-6">
          <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-lightGray px-4 py-5 md:flex-row md:gap-0 md:px-10 md:py-6">
            <h1 className="text-2xl font-medium sm:text-3xl md:text-2xl lg:text-4xl">
              Your watched movies
            </h1>
            <select
              value={sortBy}
              className="rounded-lg bg-violet-500 px-3 py-2 text-sm font-medium text-white outline-none transition-all duration-200 focus:ring-1 focus:ring-violet-300 focus:ring-offset-1 focus:ring-offset-gray-800 sm:px-4 sm:text-base"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date" className="hover:violet-300">
                SORT BY DATE ADDED
              </option>
              <option value="rating">SORT BY RATING</option>
              <option value="title">SORT BY TITLE</option>
              <option value="releaseDsc">SORT BY NEWEST</option>
              <option value="releaseAsc">SORT BY OLDEST</option>
            </select>
          </div>
          <div className="rounded-lg bg-lightGray">
            <ul className="divide-y divide-gray-600 overflow-hidden rounded-lg">
              {sorted.map((movie) => (
                <WatchedItem key={movie.imdbID} movie={movie} onSetSelectedID={() => {}} />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 md:gap-10">
          <h1 className="animate-textPulse col-span-full mt-12 text-center text-2xl font-medium tracking-wide sm:mt-20 sm:text-5xl">
            You haven’t watched any movies yet. Start exploring!
          </h1>
          <NavButton to="/app/movies">EXPLORE MOVIES</NavButton>
        </div>
      )}
    </section>
  );
}

export default Watched;
