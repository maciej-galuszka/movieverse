import AvatarButton from "./AvatarButton";
import DropdownHeader from "./DropdownHeader";
import DropdownList from "./DropdownList";

function ProfileDropdown({ isToggled, onSetToggled }) {
  return (
    <div className="relative flex items-center gap-1.5 hover:cursor-pointer" onClick={onSetToggled}>
      <AvatarButton isToggled={isToggled} />
      {isToggled && (
        <div
          className="absolute -bottom-[11.6rem] right-0 z-50 w-48 overflow-hidden rounded-md border border-violet-500 bg-white sm:-bottom-[15.1rem] md:-bottom-[14.6rem]"
          onMouseLeave={onSetToggled}
        >
          <DropdownHeader />
          <DropdownList />
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
