import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import NavButton from "./NavButton";

function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-violet-800 px-3 py-1 text-white sm:px-8 sm:py-2">
      <Link to="/">
        <Logo />
      </Link>
      <nav className="flex justify-between sm:space-x-5" aria-label="Main navigation">
        <NavButton type="transparent" to="/about">
          ABOUT
        </NavButton>

        <NavButton type="transparent" to="/pricing">
          PRICING
        </NavButton>

        <NavButton className="grow" type="primary" to="/login">
          LOGIN
        </NavButton>
      </nav>
    </header>
  );
}

export default Header;
