import { IoAddOutline } from "react-icons/io5";
import { useMovieRating } from "@/features/movies/hooks/useMovieRating";
import { Stars } from "@/features/movies/components/Stars";
import Button from "@/shared/ui/buttons/Button";

function MovieRating({ movie, onShowForm }) {
  const { rating, setRating, comment, setComment, handleAddToWatched } = useMovieRating(
    movie,
    onShowForm
  );

  return (
    <div className="mt-6 space-y-4 rounded-lg bg-darkerLightGray px-6 py-4">
      <form className="flex flex-col gap-3" onSubmit={handleAddToWatched}>
        <label className="mb-1 text-sm">What are your thoughts on this movie?</label>
        <textarea
          className="h-20 resize-none rounded-md p-1 text-sm text-dark"
          spellCheck={false}
          value={comment}
          aria-label="Input field for a movie comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <Stars rating={rating} onSetRating={setRating} />
        <Button disabled={!rating} htmlType="submit" type="primary">
          Add to watched
        </Button>
      </form>
    </div>
  );
}

export default MovieRating;
