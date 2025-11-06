import { IoChevronDown, IoPersonCircleOutline } from "react-icons/io5";
import avatar from "../assets/images/avatar.png";

function AvatarButton({ isToggled }) {
  return (
    <>
      <img
        src={avatar}
        alt="John's profile picture"
        className="hidden w-10 rounded-full border-2 border-violet-500 md:block"
      />
      <IoChevronDown
        className={`hidden text-xs text-white transition-transform duration-300 sm:text-base md:block ${isToggled ? "rotate-180" : ""} `}
      />
      <IoPersonCircleOutline className="xs:text-xl block text-lg text-white sm:text-3xl md:hidden" />
    </>
  );
}

export default AvatarButton;
