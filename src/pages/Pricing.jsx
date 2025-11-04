import { IoCheckmark } from "react-icons/io5";
import Button from "../components/Button";
import NavButton from "../components/NavButton";

function Pricing() {
  return (
    <section className="mx-auto grid min-h-full max-w-6xl grid-cols-1 items-center gap-12 whitespace-nowrap text-center xl:h-full xl:grid-cols-3 xl:items-start">
      <div className="bg-lightGray md:w-6/7 xs:w-[20rem] xs:px-10 xs:py-12 mx-auto mt-12 w-[18rem] rounded-xl border-2 border-violet-500 px-8 py-10 text-white transition-transform duration-300 hover:scale-105 xl:mx-0">
        <h1 className="text-2xl font-medium">BASIC</h1>
        <p className="mt-6 text-6xl">
          <span className="text-2xl">$</span>0
        </p>
        <p className="mt-4 text-xs">per month</p>
        <ul className="xs:text-sm my-12 space-y-4 text-xs">
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
      <div className="bg-lightGray md:w-6/7 xs:w-[20rem] xs:px-10 xs:py-12 mx-auto mt-12 w-[18rem] rounded-xl border-2 border-violet-500 px-8 py-10 text-white transition-transform duration-300 hover:scale-105 xl:mx-0">
        <h1 className="text-2xl font-medium">PRO</h1>
        <p className="mt-6 text-6xl">
          <span className="text-2xl">$</span>4.99
        </p>
        <p className="mt-4 text-xs">per month</p>
        <ul className="xs:text-sm my-12 space-y-4 text-xs">
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
            <IoCheckmark className="mr-2 h-6 w-6 shrink-0" /> <span>Customize your dashboard</span>
          </li>
        </ul>
        <NavButton type="primary" to="/login">
          UPGRADE TO PRO
        </NavButton>
      </div>
      <div className="bg-lightGray md:w-6/7 xs:w-[20rem] xs:px-10 xs:py-12 mx-auto mb-12 mt-12 w-[18rem] rounded-xl border-2 border-violet-500 px-8 py-10 text-white transition-transform duration-300 hover:scale-105 xl:mx-0 xl:mb-0">
        <h1 className="text-2xl font-medium">ULTIMATE</h1>
        <p className="mt-6 text-6xl">
          <span className="text-2xl">$</span>9.99
        </p>
        <p className="mt-4 text-xs">per month</p>
        <ul className="my-12 space-y-4">
          <li className="xs:text-sm flex items-center text-xs">
            <IoCheckmark className="mr-2 h-6 w-6 shrink-0" /> <span>Everything in Pro</span>
          </li>
          <li className="xs:text-sm flex items-center text-xs">
            <IoCheckmark className="mr-2 h-6 w-6 shrink-0" />
            <span>AI-based recommendations</span>
          </li>
          <li className="xs:text-sm flex items-center text-xs">
            <IoCheckmark className="mr-2 h-6 w-6 shrink-0" /> <span>Watch history analytics</span>
          </li>
          <li className="xs:text-sm flex items-center text-xs">
            <IoCheckmark className="mr-2 h-6 w-6 shrink-0" />{" "}
            <span>Sync your data across devices</span>
          </li>
        </ul>
        <NavButton type="primary" to="/login">
          GO ULTIMATE
        </NavButton>
      </div>
    </section>
  );
}

export default Pricing;
