import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToWatched } from "../moviesSlice";

export function useMovieRating(movie, onShowForm) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");

  const handleAddToWatched = (e) => {
    e.preventDefault();

    dispatch(
      addToWatched({ ...movie, rating, comment, watchDate: new Date().toISOString().split("T")[0] })
    );
    setComment("");
    setRating(null);
    onShowForm(false);
  };

  return {
    rating,
    setRating,
    comment,
    setComment,
    handleAddToWatched,
  };
}
