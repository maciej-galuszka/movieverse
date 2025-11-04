import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import avatar from "../assets/images/avatar.jpg";
import NavButton from "./NavButton";

function ProfileDropdown() {
  const [isToggled, setIsToggled] = useState(false);

  function handleToggleDropdown() {
    setIsToggled((toggled) => !toggled);
  }

  return (
    <div className="flex items-center gap-8">
      <nav className="flex justify-between sm:space-x-5" aria-label="Main navigation">
        <NavButton type="transparent" to="/app/movies">
          MOVIES
        </NavButton>

        <NavButton type="transparent" to="/app/watched">
          WATCHED
        </NavButton>

        <NavButton className="grow" type="transparent" to="/app/wishlist">
          WISHLIST
        </NavButton>
      </nav>
      <div
        className="relative flex items-center gap-1.5 hover:cursor-pointer"
        onMouseEnter={handleToggleDropdown}
        onMouseLeave={handleToggleDropdown}
      >
        <img
          src={avatar}
          alt="John's profile picture"
          className="w-12 rounded-full border-2 border-violet-300"
        />
        <IoChevronDown className="text-white" />
        {isToggled && (
          <div className="-bottom-30 absolute right-0 bg-white">
            <ul className="text-violet-700">
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileDropdown;
