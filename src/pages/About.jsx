import image from "@/shared/assets/images/About.jpg";

function About() {
  return (
    <section
      className="relative grid h-full place-items-center overflow-hidden bg-cover bg-top"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="relative z-10 max-w-2xl rounded-lg border-2 border-violet-500 bg-lightGray px-20 py-16 text-center">
        <h1 className="text-5xl font-bold text-white">Your Movie Journey Starts Here</h1>
        <p className="text-md mt-8 text-gray-300">
          MovieVerse helps you keep track of every film you’ve watched and loved. Search for movies
          from around the world, rate them, and build your personal watched list — all in one place.
          Whether you’re a casual viewer or a true cinephile, MovieVerse makes it easy to remember
          what you’ve seen and discover what’s next.
        </p>
      </div>
    </section>
  );
}

export default About;
