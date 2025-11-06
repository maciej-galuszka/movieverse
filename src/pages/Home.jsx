import { Link } from "react-router-dom";
import NavButton from "../components/buttons/NavButton";
import homeBg from "../assets/images/home-bg.jpg";

function Home() {
  return (
    <section
      className="h-full bg-cover bg-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(36,42,46,0.85), rgba(36,42,46,0.85)), url(${homeBg})`,
      }}
    >
      <div className="flex-center justify-centers mx-auto flex max-w-6xl flex-col items-center px-5 sm:px-10">
        <h1 className="mt-20 max-w-4xl text-3xl font-medium text-white sm:mt-40 sm:text-4xl md:text-5xl">
          MovieVerse keeps track of your cinematic adventures.
        </h1>
        <p className="mb-10 mt-6 text-xs font-medium text-gray-300 sm:text-xs md:text-base">
          A personal movie map that tracks every film youve watched and loved. Never forget your
          favorite stories, explore new releases, and share your movie journey with friends.
        </p>
        <NavButton type="primary" to="/login">
          BEGIN YOUR MOVIE JOURNEY NOW!
        </NavButton>
      </div>
    </section>
  );
}

export default Home;
