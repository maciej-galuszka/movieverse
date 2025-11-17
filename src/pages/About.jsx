import { useLoaderData } from "react-router-dom";

function About() {
  const { imageUrl } = useLoaderData();

  return (
    <section
      className="relative grid h-full place-items-center overflow-hidden bg-cover bg-top"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="relative m-12 max-w-2xl rounded-lg border-2 border-violet-500 bg-lightGray px-6 py-8 text-center md:px-20 md:py-16">
        <h1
          className="text-lg font-bold text-white sm:text-xl md:text-3xl lg:text-5xl"
          style={{ wordSpacing: "0.05rem" }}
        >
          Your Movie Journey <br className="sm:hidden" /> Starts Here
        </h1>
        <p className="sm:text-md mt-6 space-y-2 text-sm text-gray-300">
          <ul className="list-disc space-y-2 pl-6 text-left text-xs font-medium sm:text-base">
            <li>Search thousands of movies </li>
            <li>Rate films and build your watched history</li>
            <li>Create and manage your own watchlist</li>
            <li>See detailed movie pages</li>
            <li>Track viewing statistics</li>
            <li>Customize your experience</li>
          </ul>
        </p>
      </div>
    </section>
  );
}

export default About;
