import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToWatched, updateWatched, deleteFromWatchlist } from "../moviesSlice";

// Hook for rating movies and adding them to watched state

export function useMovieRating(movie, onShowForm, type = "add") {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const [notes, setNotes] = useState("");

  const handleAddToWatched = (e) => {
    e.preventDefault();

    if (rating === null) return;

    // Hook performs diferent dispatches based on wheter it is added to watched, updated or added from watchlist

    const baseData = {
      ...movie,
      rating,
      notes,
    };

    if (type === "update") {
      dispatch(updateWatched(baseData));
    } else {
      dispatch(
        addToWatched({
          ...baseData,
          date: new Date().toISOString().split("T")[0],
        })
      );

      if (type === "addFromWatchlist") {
        dispatch(deleteFromWatchlist(movie.imdbID));
      }
    }

    // Closing the form and reseting the inputs
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
