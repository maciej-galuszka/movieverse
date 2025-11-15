import { useSelector } from "react-redux";
import { selectWatched } from "../features/movies/moviesSlice";
import NavButton from "../shared/ui/buttons/NavButton";
import WatchedItem from "../features/movies/components/WatchedItem";

function Watched() {
  const watched = useSelector(selectWatched);
  return (
    <section className="mx-auto min-h-full p-10 text-white lg:max-w-5xl lg:px-0">
      {watched.length > 0 ? (
        <>
          <h1 className="mb-8 mt-4 text-5xl font-medium">Your watched movies:</h1>
          <div className="rounded-lg bg-lightGray">
            <ul className="divide-y divide-gray-600 overflow-hidden rounded-lg">
              {watched.map((movie) => (
                <WatchedItem key={movie.imdbID} movie={movie} onSetSelectedID={() => {}} />
              ))}
            </ul>
          </div>
        </>
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
