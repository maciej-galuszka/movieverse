import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "@/features/auth/authSlice";
import avatar from "@/shared/assets/images/avatar.png";

function DropdownHeader() {
  const user = useSelector(selectUser);
  return (
    <NavLink
      className="flex items-center gap-3 border-b border-violet-300 px-5 py-3"
      to="/app/profile"
    >
      <img
        src={avatar}
        alt="User profile picture"
        className="w-8 rounded-full border-2 border-violet-500 sm:w-9"
      />
      <div>
        <p className="text-sm text-violet-700 sm:text-base">{user.name}</p>
        <p className="text-xxs text-violet-400 sm:text-xs">Basic plan</p>
      </div>
    </NavLink>
  );
}

export default DropdownHeader;
