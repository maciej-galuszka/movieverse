import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "@/components/Logo";
import AppNav from "./AppNav";
import NavButton from "./NavButton";
import HeaderNav from "./HeaderNav";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className="flex w-full items-center justify-between bg-violet-800 px-3 py-1 text-white sm:px-8">
      <Link to={isAuthenticated ? "/app" : "/"}>
        <Logo />
      </Link>

      {isAuthenticated ? <AppNav /> : <HeaderNav />}
    </header>
  );
}

export default Header;
