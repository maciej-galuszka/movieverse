import { useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const KEY = "e82c1ba1";
  const URL = `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`;

  async function handleSearchMovie(e) {
    e.preventDefault();
    try {
      const res = await fetch(URL);
      if (!res.ok) throw new Error("Error");

      const data = await res.json();
      setMovies(data);
      console.log(data);
    } catch (err) {
      console.err(err.message);
    }
  }

  return (
    <section className="mx-auto grid h-full grid-cols-2 grid-rows-[auto_1fr] items-start justify-center gap-6 sm:max-w-4xl md:max-w-5xl">
      <form
        className="bg-lightGray grid-col-1/-1 col-span-full mt-8 flex flex-col gap-2 rounded-lg border-2 border-violet-500 px-8 py-6 text-white"
        action=""
        onSubmit={(e) => handleSearchMovie(e)}
      >
        <label className="text-lg" htmlFor="">
          Search movies!
        </label>
        <input
          className="h-8 rounded-md"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div className="bg-lightGray h-full">movies here</div>
      <div className="bg-lightGray h-full">details here</div>
    </section>
  );
}

export default Movies;
