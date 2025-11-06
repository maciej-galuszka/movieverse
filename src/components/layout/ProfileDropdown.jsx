import { useState } from "react";
import AvatarButton from "./AvatarButton";
import DropdownHeader from "./DropdownHeader";
import DropdownList from "./DropdownList";

function ProfileDropdown() {
  const [isToggled, setIsToggled] = useState(false);

  function handleToggleDropdown() {
    setIsToggled((toggled) => !toggled);
  }

  return (
    <div
      className="relative flex items-center gap-1.5 hover:cursor-pointer"
      onClick={handleToggleDropdown}
    >
      <AvatarButton isToggled={isToggled} />
      {isToggled && (
        <div
          className="absolute -bottom-[11.6rem] right-0 w-48 overflow-hidden rounded-md bg-white sm:-bottom-[15.1rem] md:-bottom-[14.6rem]"
          onMouseLeave={handleToggleDropdown}
        >
          <DropdownHeader />
          <DropdownList />
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
