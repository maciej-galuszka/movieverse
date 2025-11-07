import { IoWarningOutline } from "react-icons/io5";

function MovieError({ error }) {
  return (
    <div className="mt-40 flex items-center justify-center gap-6 px-8 text-center text-2xl text-gray-300">
      <IoWarningOutline className="text-5xl" />
      <div className="flex flex-col gap-2">
        <p>{error || "Something went wrong."}</p>
        <p className="text-base">Please try searching again.</p>
      </div>
    </div>
  );
}

export default MovieError;
