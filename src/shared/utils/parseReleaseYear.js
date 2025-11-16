export default function parseReleaseYear(yearStr) {
  const parts = yearStr.split("–");

  if (parts[1] && parts[1] !== "") return Number(parts[1]);

  return Number(parts[0]);
}
