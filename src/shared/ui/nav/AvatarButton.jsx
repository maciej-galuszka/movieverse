import { IoChevronDown, IoPersonCircleOutline } from "react-icons/io5";
import avatar from "@/shared/assets/images/avatar.png";

function AvatarButton({ isToggled }) {
  return (
    <>
      <img
        src={avatar}
        alt="John's profile picture"
        className="w-6 flex-shrink-0 rounded-full border-2 border-violet-500 md:block md:w-10"
      />
      <IoChevronDown
        className={`hidden text-xs text-white transition-transform duration-300 sm:text-base md:block ${isToggled ? "rotate-180" : ""} `}
      />
    </>
  );
}

export default AvatarButton;
