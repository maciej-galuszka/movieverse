import { PiNotePencilBold } from "react-icons/pi";

function WatchedNotes({ notes }) {
  if (!notes) return null;
  return (
    <div className="flex max-h-32 w-60 flex-col gap-1.5 rounded-lg bg-[#363c43] px-6 py-4">
      <p className="flex flex-col gap-2">
        <span className="flex items-center gap-1.5">
          <PiNotePencilBold /> Notes:
        </span>
        <span className="overflow-y-auto text-sm italic">{notes}</span>
      </p>
    </div>
  );
}

export default WatchedNotes;
