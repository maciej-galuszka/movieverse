import parseReleaseYear from "./parseReleaseYear";

export const sortMovies = {
  title: (a, b) => a.Title.localeCompare(b.Title),
  rating: (a, b) => b.rating - a.rating,
  releaseDsc: (a, b) => parseReleaseYear(b.Year) - parseReleaseYear(a.Year),
  releaseAsc: (a, b) => parseReleaseYear(a.Year) - parseReleaseYear(b.Year),
  date: (a, b) => new Date(b.date) - new Date(a.date),
};
