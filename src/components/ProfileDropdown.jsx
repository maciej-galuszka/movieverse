import { useState } from "react";
import {
  IoPerson,
  IoSettingsSharp,
  IoLogOut,
  IoChevronDown,
  IoPersonCircleOutline,
} from "react-icons/io5";
import { useDispatch } from "react-redux";
import avatar from "../assets/images/avatar.jpg";
import { NavLink } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

function ProfileDropdown() {
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(false);

  function handleToggleDropdown() {
    setIsToggled((toggled) => !toggled);
  }

  return (
    <div
      className="relative flex items-center gap-1.5 hover:cursor-pointer"
      onClick={handleToggleDropdown}
    >
      <img
        src={avatar}
        alt="John's profile picture"
        className="hidden w-12 rounded-full border-2 border-violet-500 md:block"
      />
      <IoChevronDown
        className={`hidden text-xs text-white transition-transform duration-300 sm:text-base md:block ${isToggled ? "rotate-180" : ""} `}
      />
      <IoPersonCircleOutline className="xs:text-xl block text-lg text-white sm:text-3xl md:hidden" />
      {isToggled && (
        <div
          className="absolute -bottom-[11.6rem] right-0 w-48 overflow-hidden rounded-md bg-white sm:-bottom-[15.1rem] md:-bottom-[14.8rem]"
          onMouseLeave={handleToggleDropdown}
        >
          <div className="flex items-center gap-3 border-b border-violet-300 px-5 py-3">
            <img
              src={avatar}
              alt="John's profile picture"
              className="w-8 rounded-full border-2 border-violet-500 sm:w-9"
            />
            <div>
              <p className="text-sm text-violet-700 sm:text-base">John Doe</p>
              <p className="text-xxs text-violet-400 sm:text-xs">Basic plan</p>
            </div>
          </div>
          <ul className="space-y-1 text-violet-700 sm:space-y-2">
            <li className="border-l-2 border-transparent px-5 py-2.5 text-xs hover:border-l-2 hover:border-l-violet-700 hover:bg-violet-200 sm:py-3 sm:text-base">
              <NavLink to="/app/profile" className="flex items-center gap-4 sm:gap-6">
                <IoPerson className="text-base sm:text-xl" />
                Profile
              </NavLink>
            </li>
            <li className="border-l-2 border-transparent px-5 py-2.5 text-xs hover:border-l-2 hover:border-l-violet-700 hover:bg-violet-200 sm:py-3 sm:text-base">
              <NavLink to="/app/settings" className="flex items-center gap-4 sm:gap-6">
                <IoSettingsSharp className="text-base sm:text-xl" />
                Settings
              </NavLink>
            </li>
            <li className="border-l-2 border-transparent px-5 py-2.5 text-xs hover:border-l-2 hover:border-l-violet-700 hover:bg-violet-200 sm:py-3 sm:text-base">
              <NavLink
                to="/"
                className="flex items-center gap-4 sm:gap-6"
                onClick={dispatch(logout)}
              >
                <IoLogOut className="text-base sm:text-xl" />
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
