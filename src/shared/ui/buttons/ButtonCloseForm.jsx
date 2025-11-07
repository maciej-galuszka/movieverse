import { AiOutlineCloseCircle } from "react-icons/ai";

function ButtonCloseForm({ onShowForm }) {
  return (
    <button
      type="button"
      className="absolute right-0 top-0 text-base sm:text-lg md:-right-4 md:-top-2"
      onClick={() => onShowForm(false)}
    >
      <AiOutlineCloseCircle />
    </button>
  );
}

export default ButtonCloseForm;
