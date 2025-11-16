import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToWatched } from "../moviesSlice";
import { updateWatched } from "../moviesSlice";
import { deleteFromWatchlist } from "../moviesSlice";

export function useMovieRating(movie, onShowForm, type = "add") {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const [notes, setNotes] = useState("");

  const handleAddToWatched = (e) => {
    e.preventDefault();

    if (type === "update") {
      dispatch(
        updateWatched({
          ...movie,
          rating,
          notes,
          date: new Date().toISOString().split("T")[0],
        })
      );
    } else if (type === "addFromWatchlist") {
      dispatch(
        addToWatched({
          ...movie,
          rating,
          notes,
          date: new Date().toISOString().split("T")[0],
        })
      );
      dispatch(deleteFromWatchlist(movie.imdbID));
    } else if (type === "add") {
      dispatch(
        addToWatched({
          ...movie,
          rating,
          notes,
          date: new Date().toISOString().split("T")[0],
        })
      );
    }

    setNotes("");
    setRating(null);
    onShowForm(false);
  };

  return {
    rating,
    setRating,
    notes,
    setNotes,
    handleAddToWatched,
  };
}
