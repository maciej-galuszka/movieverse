import avatar from "../../assets/images/avatar.png";

function DropdownHeader() {
  return (
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
  );
}

export default DropdownHeader;
