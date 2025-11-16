import { useMovieRating } from "@/features/movies/hooks/useMovieRating";
import { Stars } from "@/features/movies/components/Stars";
import Button from "@/shared/ui/buttons/Button";
import ButtonCloseForm from "../../../shared/ui/buttons/ButtonCloseForm";

function MovieRatingForm({ movie, onShowForm, size = "base", type = "add" }) {
  const { rating, setRating, notes, setNotes, handleAddToWatched } = useMovieRating(
    movie,
    onShowForm,
    type
  );

  if (size === "small") {
    return (
      <div className="space-y-4 rounded-lg bg-darkerLightGray px-2 py-2 sm:w-full md:py-3 lg:px-6">
        <form className="relative flex flex-col gap-2" onSubmit={handleAddToWatched}>
          <label className="mb-1 mr-2 mt-0.5 text-xxs md:mt-0 md:text-sm">
            What are your thoughts on this movie?
          </label>
          <textarea
            className="h-12 resize-none rounded-md p-1 text-xxs text-dark sm:text-sm"
            spellCheck={false}
            value={notes}
            aria-label="Input field for a movie notes"
            onChange={(e) => setNotes(e.target.value)}
          />
          <Stars rating={rating} onSetRating={setRating} size="small" />
          <Button disabled={!rating} htmlType="submit" type="primary">
            {`${type === "add" ? "ADD TO WATCHED" : "CONFIRM"}`}
          </Button>
          <ButtonCloseForm onShowForm={onShowForm} />
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-4 rounded-lg bg-darkerLightGray px-4 py-4 sm:w-full lg:px-6">
      <form className="relative flex flex-col gap-3" onSubmit={handleAddToWatched}>
        <label className="mb-1 mr-2 text-xs md:text-base">
          What are your thoughts on this movie?
        </label>
        <textarea
          className="h-12 resize-none rounded-md p-1 text-xxs text-dark sm:h-20 sm:text-sm"
          spellCheck={false}
          value={notes}
          aria-label="Input field for a movie comment"
          onChange={(e) => setNotes(e.target.value)}
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
