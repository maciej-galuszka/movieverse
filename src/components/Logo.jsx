import logo from "@/assets/images/logo.png";

function Logo() {
  return (
    <h1 className="flex items-center text-xl font-medium sm:text-3xl md:text-4xl">
      MovieVerse
      <img src={logo} className="w-10 sm:w-16 md:w-20" alt="cinema background image" />
    </h1>
  );
}

export default Logo;
