function MovieDetails({ movie }) {
  console.log(movie);
  if (!movie.Title) return null;
  return (
    <div className="grid-row-[auto_auto] grid">
      <div className="bg-lightGrayHover flex">
        <img className="w-36" src={movie.Poster} alt={`${movie.Title} cover photo`} />
        <div className="flex w-full px-10 py-8">
          <p className={`${movie.Title.length > 15 ? "text-lg" : "text-2xl"} font-medium`}>
            {movie.Title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
