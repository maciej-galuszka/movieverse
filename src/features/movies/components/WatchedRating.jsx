import { PiNotePencilBold } from "react-icons/pi";
import { IoCalendarClearSharp } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

function WatchedRating({ notes, rating, date }) {
  return (
    <div className="flex max-h-32 w-[14rem] flex-col gap-2 rounded-lg bg-darkerLightGray px-6 py-4 sm:w-[18.5rem]">
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-medium md:text-base">Your rating: {rating}/10</span>
        <IoStar className="mb-1 ml-0.5 text-yellow-300" />
      </div>

      <div className="flex items-center gap-1.5">
        <IoCalendarClearSharp className="ml-[0.05rem] text-sm" /> Added:{" "}
        <span className="ml-1">{date.replaceAll("-", ".")}</span>
      </div>

      {notes && (
        <div className="flex items-center gap-1.5">
          <PiNotePencilBold /> Notes:
          <span className="max-h-16 overflow-y-auto px-1 italic">{notes}</span>
        </div>
      )}
    </div>
  );
}

export default WatchedRating;
