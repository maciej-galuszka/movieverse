import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AppNav from "@/shared/ui/nav/AppNav";
import HeaderNav from "@/shared/ui/nav/HeaderNav";
import Logo from "./Logo";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className="flex w-full items-center justify-between bg-violet-800 px-3 text-white sm:px-8 md:py-1">
      <Link to={isAuthenticated ? "/app" : "/"}>
        <Logo />
      </Link>

      {isAuthenticated ? <AppNav /> : <HeaderNav />}
    </header>
  );
}

export default Header;
