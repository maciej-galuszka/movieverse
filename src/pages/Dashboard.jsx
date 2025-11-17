import { Link } from "react-router-dom";
import { PiFilmSlateFill } from "react-icons/pi";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectUser } from "../features/auth/authSlice";

function Dashboard() {
  const user = useSelector(selectUser);

  const cards = [
    {
      title: "Movies",
      link: "/app/movies",
      icon: <PiFilmSlateFill className="text-5xl text-violet-400" />,
      desc: "Browse and search new movies",
    },
    {
      title: "Watched",
      link: "/app/watched",
      icon: <IoCheckmarkCircle className="text-5xl text-violet-400" />,
      desc: "Your watched movies",
    },
    {
      title: "Watchlist",
      link: "/app/watchlist",
      icon: <IoBookmark className="text-5xl text-violet-400" />,
      desc: "Movies you plan to watch",
    },
    {
      title: "Profile",
      link: "/app/profile",
      icon: <FaUser className="text-5xl text-violet-400" />,
      desc: "Check your activity and stats",
    },
  ];

  return (
    <section className="mx-auto min-h-full px-12 py-12 pb-12 text-white sm:py-16 lg:max-w-4xl">
      <h1 className="mb-10 text-center text-3xl font-bold tracking-wider sm:mb-16 sm:text-5xl">
        Welcome back, <br className="block sm:hidden" />
        {user[0]} {user[1]}
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {cards.map((c) => (
          <Link
            key={c.title}
            to={c.link}
            className="group rounded-2xl bg-lightGray p-8 shadow-lg transition-all duration-200 hover:scale-[1.03] hover:bg-darkerLightGray"
          >
            <div className="flex flex-col items-center text-center">
              {c.icon}
              <h2 className="mt-4 text-xl font-semibold sm:text-2xl">{c.title}</h2>
              <p className="mt-2 text-sm text-gray-300">{c.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
