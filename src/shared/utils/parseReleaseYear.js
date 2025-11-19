/**
 * Parses a release year string and returns the relevant year as a number.
 *
 * Handles strings like "2018–2021" or "2020" and returns:
 *   - the end year if a range is provided (e.g., "2018–2021" → 2021)
 *   - the single year if no range (e.g., "2020" → 2020)
 *
 */

export default function parseReleaseYear(yearStr) {
  const parts = yearStr.split("–");

  if (parts[1] && parts[1] !== "") return Number(parts[1]);

  return Number(parts[0]);
}
