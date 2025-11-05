import ProfileDropdown from "./ProfileDropdown";
import NavButton from "./NavButton";

function AppNav() {
  return (
    <div className="flex items-center gap-1 md:gap-8">
      <nav className="flex justify-between md:space-x-5" aria-label="App navigation">
        <NavButton type="transparent" to="/app/movies">
          MOVIES
        </NavButton>

        <NavButton type="transparent" to="/app/watched">
          WATCHED
        </NavButton>

        <NavButton type="transparent" to="/app/wishlist">
          WATCHLIST
        </NavButton>
      </nav>
      <ProfileDropdown />
    </div>
  );
}

export default AppNav;
