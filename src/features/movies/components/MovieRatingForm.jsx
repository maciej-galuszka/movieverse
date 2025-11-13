import { AiOutlineCloseCircle } from "react-icons/ai";
import { useMovieRating } from "@/features/movies/hooks/useMovieRating";
import { Stars } from "@/features/movies/components/Stars";
import Button from "@/shared/ui/buttons/Button";
import ButtonCloseForm from "../../../shared/ui/buttons/ButtonCloseForm";

function MovieRatingForm({ movie, onShowForm }) {
  const { rating, setRating, comment, setComment, handleAddToWatched } = useMovieRating(
    movie,
    onShowForm
  );

  return (
    <div className="space-y-4 rounded-lg bg-darkerLightGray px-4 py-4 sm:w-full lg:px-6">
      <form className="relative flex flex-col gap-3" onSubmit={handleAddToWatched}>
        <label className="mb-1 mr-2 text-xs md:text-base">
          What are your thoughts on this movie?
        </label>
        <textarea
          className="h-12 resize-none rounded-md p-1 text-xxs text-dark sm:h-20 sm:text-sm"
          spellCheck={false}
          value={comment}
          aria-label="Input field for a movie comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <Stars rating={rating} onSetRating={setRating} />
        <Button disabled={!rating} htmlType="submit" type="primary">
          Add to watched
        </Button>
        <ButtonCloseForm onShowForm={onShowForm} />
      </form>
    </div>
  );
}

export default MovieRatingForm;
