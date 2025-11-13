import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function ButtonReturn() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="absolute right-4 top-4 rounded-full bg-violet-500 p-2 text-base sm:text-lg"
      onClick={() => navigate(-1)}
    >
      <IoMdArrowRoundBack />
    </button>
  );
}

export default ButtonReturn;
