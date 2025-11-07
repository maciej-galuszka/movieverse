import { useRef, useState } from "react";
import imageExists from "@/shared/utils/imageExists";

const KEY = "e82c1ba1";
const URL = `https://www.omdbapi.com/?apikey=${KEY}`;

export function useMoviesSearch() {
  const [movies, setMovies] = useState(null);
  const [selectedID, setSelectedID] = useState(null);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const controllerRef = useRef(null);

  async function handleSearchMovie() {
    if (!query) return;
    if (controllerRef.current) controllerRef.current.abort();

    const controller = new AbortController();
    controllerRef.current = controller;

    setError("");
    setIsLoading(true);

    try {
      const res = await fetch(`${URL}&s=${query}`, { signal: controller.signal });
      if (!res.ok) throw new Error("Something went wrong");

      const data = await res.json();

      if (!data.Search) throw new Error("Movie not found!");

      const validMovies = (
        await Promise.all(
          data.Search.map(async (movie) => ((await imageExists(movie.Poster)) ? movie : null))
        )
      ).filter(Boolean);

      if (!validMovies.length) throw new Error("Movie not found!");

      setSelectedID(validMovies[0]?.imdbID);
      setMovies(validMovies);
    } catch (err) {
      if (err.name === "AbortError") return;
      if (err.message === "Failed to fetch") {
        setError("Network error");
      } else {
        setError(err.message);
      }
      setSelectedID(null);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    movies,
    selectedID,
    setSelectedID,
    query,
    setQuery,
    error,
    isLoading,
    handleSearchMovie,
  };
}
