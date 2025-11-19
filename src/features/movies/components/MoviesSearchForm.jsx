import { useState } from "react";
import { IoSearch } from "react-icons/io5";

/**
 * A search form component for movies.
 *
 * Props:
 * - onSearchMovie: function to trigger a movie search
 * - query: current search input value
 * - onSetQuery: function to update the search input
 *
 * Prevents duplicate searches by tracking the previous query.
 */

function MoviesSearchForm({ onSearchMovie, query, onSetQuery }) {
  const [prevQuery, setPrevQuery] = useState("");

  return (
    <form
      className="col-span-full mt-12 flex flex-col gap-2 rounded-xl bg-lightGray p-4 sm:p-6 md:mt-14 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        if (query === prevQuery) return;
        setPrevQuery(query);
        onSearchMovie();
      }}
    >
      <div className="relative">
        <input
          className="h-8 w-full rounded-md px-4 text-sm text-dark sm:h-12 sm:text-base"
          type="text"
          value={query}
          aria-label="Search movies"
          placeholder="Find your favorite movie!"
          onChange={(e) => onSetQuery(e.target.value)}
          spellCheck={false}
        />
        <IoSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-violet-500" />
      </div>
    </form>
  );
}

export default MoviesSearchForm;
