/**
 * Predefined sorting functions for movie lists.
 *
 * - title: sorts alphabetically by movie title (A → Z)
 * - rating: sorts by user rating in descending order (highest → lowest)
 * - releaseDsc: sorts by release year descending (newest → oldest)
 * - releaseAsc: sorts by release year ascending (oldest → newest)
 * - date: sorts by the date the movie was added to the list (newest → oldest)
 */

import parseReleaseYear from "./parseReleaseYear";

export const sortMovies = {
  title: (a, b) => a.Title.localeCompare(b.Title),
  rating: (a, b) => b.rating - a.rating,
  releaseDsc: (a, b) => parseReleaseYear(b.Year) - parseReleaseYear(a.Year),
  releaseAsc: (a, b) => parseReleaseYear(a.Year) - parseReleaseYear(b.Year),
  date: (a, b) => new Date(b.date) - new Date(a.date),
};
