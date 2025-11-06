import { IoStar, IoAddOutline, IoStarOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToWatched } from "../features/movies/moviesSlice";
import { useState } from "react";
import Button from "./Button";

function Stars({ rating, onSetRating }) {
  const [hoverRating, setHoverRating] = useState();
  const isFilled = (n) => hoverRating >= n + 1 || (rating >= n + 1 && !hoverRating);

  return (
    <div className="flex justify-between">
      <div
        className="flex justify-between gap-1.5 hover:cursor-pointer"
        onMouseLeave={() => setHoverRating(null)}
      >
        {[...Array(10)].map((_, n) =>
          isFilled(n) ? (
            <IoStar
              className="text-2xl text-yellow-300"
              key={n}
              onMouseEnter={() => setHoverRating(n + 1)}
              onClick={() => onSetRating(n + 1)}
            />
          ) : (
            <IoStarOutline
              className="text-2xl text-yellow-300"
              key={n}
              onMouseEnter={() => setHoverRating(n + 1)}
              onClick={() => onSetRating(n + 1)}
            />
          )
        )}
      </div>
      <span className="mr-2 text-xl text-yellow-300">
        {hoverRating > 0 || rating ? hoverRating || rating : <span className="invisible">10</span>}
      </span>
    </div>
  );
}

function RatingForm({ movie, onSetShowRatingForm }) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState();
  const [comment, setComment] = useState("");

  function handleAddToWatched(e) {
    e.preventDefault();

    const ratedMovie = {
      ...movie,
      rating,
      comment,
    };

    dispatch(addToWatched(ratedMovie));
    setComment("");
    setRating(null);
    onSetShowRatingForm(false);
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleAddToWatched}>
      <label className="mb-1 text-sm" htmlFor="">
        What are your thoughts on this movie?
      </label>
      <textarea
        className="h-20 resize-none rounded-md px-1 text-sm text-dark"
        spellCheck={false}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Stars rating={rating} onSetRating={setRating} />
      <Button disabled={!rating} htmlType="submit" type="primary">
        Add to watched
      </Button>
    </form>
  );
}

function Rating({ movie }) {
  return (
    <div className="mt-6 space-y-4 rounded-lg bg-[#3c434a] px-6 py-4">
      <RatingForm movie={movie} />
    </div>
  );
}

export default Rating;
