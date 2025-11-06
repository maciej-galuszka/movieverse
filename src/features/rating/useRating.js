import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToWatched } from "../movies/moviesSlice";

export function useMovieRating(movie, onCloseForm) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");

  const handleAddToWatched = (e) => {
    e.preventDefault();

    dispatch(addToWatched({ ...movie, rating, comment }));
    setComment("");
    setRating(null);
    onCloseForm(false);
  };

  return {
    rating,
    setRating,
    comment,
    setComment,
    handleAddToWatched,
  };
}
