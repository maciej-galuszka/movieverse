import { useState } from "react";
import {
  IoPerson,
  IoSettingsSharp,
  IoLogOut,
  IoChevronDown,
  IoPersonCircleOutline,
} from "react-icons/io5";

import avatar from "../assets/images/avatar.jpg";

function ProfileDropdown() {
  const [isToggled, setIsToggled] = useState(true);

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
      <IoChevronDown className="hidden text-xs text-white sm:text-base md:block" />
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
            <li className="flex items-center gap-4 border-l-2 border-transparent px-5 py-2.5 text-xs hover:border-l-2 hover:border-l-violet-700 hover:bg-violet-200 sm:gap-6 sm:py-3 sm:text-base">
              <IoPerson className="text-base sm:text-xl" />
              Profile
            </li>
            <li className="flex items-center gap-4 border-l-2 border-transparent px-5 py-2.5 text-xs hover:border-l-2 hover:border-l-violet-700 hover:bg-violet-200 sm:gap-6 sm:py-3 sm:text-base">
              <IoSettingsSharp className="text-base sm:text-xl" />
              Settings
            </li>
            <li className="flex items-center gap-4 border-l-2 border-transparent px-5 py-2.5 text-xs hover:border-l-2 hover:border-l-violet-700 hover:bg-violet-200 sm:gap-6 sm:py-3 sm:text-base">
              <IoLogOut className="text-base sm:text-xl" />
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
