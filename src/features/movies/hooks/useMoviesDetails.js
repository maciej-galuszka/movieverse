import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectRating } from "../moviesSlice";

const KEY = "e82c1ba1";
const URL = `https://www.omdbapi.com/?apikey=${KEY}`;

export function useMoviesDetails(selectedID, plot = "short") {
  const [movie, setMovie] = useState(null);
  const [showRatingForm, setShowRatingForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const userRating = useSelector(selectRating(movie));

  useEffect(() => {
    setMovie(null);
    setError(null);
    setShowRatingForm(false);

    if (!selectedID) {
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();
    const { signal } = controller;

    setIsLoading(true);

    (async () => {
      try {
        const res = await fetch(`${URL}&i=${selectedID}${plot === "full" ? "&plot=full" : ""}`, {
          signal,
        });
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();

        if (data.Response === "False") {
          throw new Error(data.Error || "Movie not found");
        }

        setMovie(data);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    })();

    return () => controller.abort();
  }, [selectedID, plot]);

  return { movie, error, isLoading, showRatingForm, setShowRatingForm, userRating };
}
