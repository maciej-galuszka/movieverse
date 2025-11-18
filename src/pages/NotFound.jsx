import NavButton from "../shared/ui/buttons/NavButton";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center px-12 text-center">
      <h1 className="mt-12 text-5xl font-extrabold tracking-tight text-white/90 drop-shadow-lg sm:mt-36 sm:text-7xl">
        404
      </h1>

      <p className="mb-8 mt-4 max-w-md text-lg text-white/80 sm:text-xl">
        Looks like this movie doesn’t exist in our universe.
      </p>

      <NavButton to="/">Back to Home</NavButton>

      <div className="mt-10 h-1 w-40 rounded-full bg-gradient-to-r from-red-500/0 via-violet-500/70 to-violet-500/0 blur-sm" />
    </div>
  );
}
