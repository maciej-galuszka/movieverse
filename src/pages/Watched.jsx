import { useSelector } from "react-redux";
import { selectWatched } from "../features/movies/moviesSlice";
import WatchedItem from "../features/movies/components/WatchedItem";

function Watched() {
  const watched = useSelector(selectWatched);
  return (
    <section className="mx-auto min-h-full p-10 text-white lg:max-w-5xl lg:px-0">
      <div className="rounded-lg bg-lightGray p-10">
        <h1 className="mb-8 text-3xl">Your watched movies:</h1>
        <ul>
          {watched.map((movie) => (
            <WatchedItem key={movie.imdbID} movie={movie} onSetSelectedID={() => {}} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Watched;
