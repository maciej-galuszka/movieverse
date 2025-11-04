import NavButton from "./NavButton";

function HeaderNav() {
  return (
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
  );
}

export default HeaderNav;
