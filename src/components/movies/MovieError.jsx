import { IoWarningOutline } from "react-icons/io5";

function MovieError({ error }) {
  return (
    <p className="mt-40 flex justify-center gap-4 text-center text-3xl text-gray-300">
      <IoWarningOutline />
      {error || "Something went wrong. Please try again."}
    </p>
  );
}

export default MovieError;
