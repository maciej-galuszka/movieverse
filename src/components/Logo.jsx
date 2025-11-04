import logo from "@/assets/images/logo.png";

function Logo() {
  return (
    <h1 className="flex items-center text-xl font-medium sm:text-3xl md:text-4xl">
      MovieVerse
      <img src={logo} className="md:w-18 w-10 sm:w-16" alt="Popcorn image" />
    </h1>
  );
}

export default Logo;
