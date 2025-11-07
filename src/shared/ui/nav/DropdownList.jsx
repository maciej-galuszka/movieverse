import { useDispatch } from "react-redux";
import { IoPerson, IoSettingsSharp, IoLogOut } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { logout } from "@/features/auth/authSlice";

function DropdownList() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <ul className="space-y-1 text-violet-700">
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
        <NavLink to="/" className="flex items-center gap-4 sm:gap-6" onClick={handleLogout}>
          <IoLogOut className="text-base sm:text-xl" />
          Logout
        </NavLink>
      </li>
    </ul>
  );
}

export default DropdownList;
