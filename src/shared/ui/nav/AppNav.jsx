import { useState } from "react";
import NavButton from "@/shared/ui/buttons/NavButton";
import ProfileDropdown from "./ProfileDropdown";

function AppNav() {
  const [isToggled, setIsToggled] = useState(false);

  function handleToggleDropdown() {
    setIsToggled((toggled) => !toggled);
  }

  return (
    <div className="flex items-center gap-1 md:gap-4">
      <nav
        className="flex justify-between md:gap-5"
        aria-label="App navigation"
        onClick={() => setIsToggled(false)}
      >
        <NavButton type="transparent" to="/app/movies">
          MOVIES
        </NavButton>

        <NavButton type="transparent" to="/app/watched">
          WATCHED
        </NavButton>

        <NavButton type="transparent" to="/app/watchlist">
          WATCHLIST
        </NavButton>
      </nav>
      <ProfileDropdown isToggled={isToggled} onSetToggled={handleToggleDropdown} />
    </div>
  );
}

export default AppNav;
