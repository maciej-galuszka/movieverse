import { NavLink } from "react-router-dom";

const base =
  "font-500 tracking-wide text-xxs xs:text-xs sm:text-base sm:px-5 sm:py-2 px-1 xs:px-2 py-1 font-medium text-white transition-colors duration-200";

const styles = {
  transparent: base + " hover:text-gray-200",
  primary: base + " sm:rounded-lg rounded-md bg-violet-500 hover:bg-violet-550 px-3",
};

function NavButton({ type = "primary", to = "/", children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${styles[type]} ${isActive ? `${type === "primary" ? "bg-violet-550" : ""}` : ""}`
      }
    >
      {children}
    </NavLink>
  );
}

export default NavButton;
