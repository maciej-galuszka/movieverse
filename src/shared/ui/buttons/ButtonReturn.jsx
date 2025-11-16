import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function ButtonReturn() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="absolute right-2 top-2 rounded-full bg-violet-500 p-1 text-base sm:right-4 sm:top-4 sm:p-2 sm:text-lg"
      onClick={() => navigate(-1)}
    >
      <IoMdArrowRoundBack className="text-sm sm:text-base" />
    </button>
  );
}

export default ButtonReturn;
