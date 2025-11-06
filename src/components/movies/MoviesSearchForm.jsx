import { IoSearch } from "react-icons/io5";

function MoviesSearchForm({ onSearchMovie, query, onSetQuery }) {
  return (
    <form
      className="bg-lightGray col-span-full mt-8 flex flex-col gap-2 rounded-lg px-8 py-8"
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        onSearchMovie();
      }}
    >
      <div className="relative">
        <input
          className="h-12 w-full rounded-md px-4 text-dark"
          type="text"
          value={query}
          aria-label="Search movies"
          placeholder="Find your favorite movie!"
          onChange={(e) => onSetQuery(e.target.value)}
        />
        <IoSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-violet-500" />
      </div>
    </form>
  );
}

export default MoviesSearchForm;
