import { IoCheckmark } from "react-icons/io5";
import NavButton from "@/shared/ui/buttons/NavButton";
import backgroundImage from "@/shared/assets/images/about.jpg";

function Pricing() {
  return (
    <section
      className="h-full bg-cover bg-top"
      style={{
        backgroundImage: `linear-gradient(rgba(36,42,46,0.4), rgba(36,42,46,0.4)), url(${backgroundImage}`,
      }}
    >
      <div className="mx-auto grid min-h-full max-w-6xl grid-cols-1 items-center gap-2 whitespace-nowrap text-center sm:gap-12 xl:h-full xl:grid-cols-3 xl:items-start">
        <div className="md:w-6/7 mx-auto mt-12 w-[18rem] rounded-xl border-2 border-violet-500 bg-lightGray px-6 py-8 text-white transition-transform duration-300 hover:scale-105 xs:w-[20rem] xs:px-10 xs:py-12 xl:mx-0">
          <h1 className="text-2xl font-medium">BASIC</h1>
          <p className="mt-6 text-6xl">
            <span className="text-2xl">$</span>0
          </p>
          <p className="mt-4 text-xs">per month</p>
          <ul className="space-y-4 py-6 text-xs xs:text-sm sm:my-4">
            <li className="flex items-center">
              <IoCheckmark className="mr-2 h-6 w-6 shrink-0" /> <span>Search movies</span>
            </li>
            <li className="flex items-center">
              <IoCheckmark className="mr-2 h-6 w-6 shrink-0" />
              <span>Mark movies as watched</span>
            </li>
            <li className="flex items-center">
              <IoCheckmark className="mr-2 h-6 w-6 shrink-0" /> <span>Rate and review movies</span>
            </li>
            <li className="flex items-center">
              <IoCheckmark className="mr-2 h-6 w-6 shrink-0" /> <span>See stats</span>
            </li>
          </ul>
          <NavButton type="primary" to="/login">
            START FREE
          </NavButton>
        </div>
        <div className="md:w-6/7 mx-auto mt-12 w-[18rem] rounded-xl border-2 border-violet-500 bg-lightGray px-6 py-8 text-white transition-transform duration-300 hover:scale-105 xs:w-[20rem] xs:px-10 xs:py-12 xl:mx-0">
          <h1 className="text-2xl font-medium">PRO</h1>
          <p className="mt-6 text-6xl">
            <span className="text-2xl">$</span>4.99
          </p>
          <p className="mt-4 text-xs">per month</p>
          <ul className="space-y-4 py-6 text-xs xs:text-sm sm:my-4">
            <li className="flex items-center">
              <IoCheckmark className="mr-2 h-6 w-6 shrink-0" /> <span>Everything in Basic</span>
            </li>
            <li className="flex items-center">
              <IoCheckmark className="mr-2 h-6 w-6 shrink-0" />
              <span>Sort and filter movies</span>
            </li>
            <li className="flex items-center">
              <IoCheckmark className="mr-2 h-6 w-6 shrink-0" />{" "}
              <span>Access Top Rated and Trending</span>
            </li>
            <li className="flex items-center">
              <IoCheckmark className="mr-2 h-6 w-6 shrink-0" />{" "}
              <span>Customize your dashboard</span>
            </li>
          </ul>
          <NavButton type="primary" to="/login">
            UPGRADE TO PRO
          </NavButton>
        </div>
        <div className="md:w-6/7 mx-auto mb-12 mt-12 w-[18rem] rounded-xl border-2 border-violet-500 bg-lightGray px-6 py-8 text-white transition-transform duration-300 hover:scale-105 xs:w-[20rem] xs:px-10 xs:py-12 xl:mx-0 xl:mb-0">
          <h1 className="text-2xl font-medium">ULTIMATE</h1>
          <p className="mt-6 text-6xl">
            <span className="text-2xl">$</span>9.99
          </p>
          <p className="mt-4 text-xs">per month</p>
          <ul className="space-y-4 py-6 sm:my-4">
            <li className="flex items-center text-xs xs:text-sm">
              <IoCheckmark className="mr-2 h-6 w-6 shrink-0" /> <span>Everything in Pro</span>
            </li>
            <li className="flex items-center text-xs xs:text-sm">
              <IoCheckmark className="mr-2 h-6 w-6 shrink-0" />
              <span>AI-based recommendations</span>
            </li>
            <li className="flex items-center text-xs xs:text-sm">
              <IoCheckmark className="mr-2 h-6 w-6 shrink-0" /> <span>Watch history analytics</span>
            </li>
            <li className="flex items-center text-xs xs:text-sm">
              <IoCheckmark className="mr-2 h-6 w-6 shrink-0" />{" "}
              <span>Sync your data across devices</span>
            </li>
          </ul>
          <NavButton type="primary" to="/login">
            GO ULTIMATE
          </NavButton>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
