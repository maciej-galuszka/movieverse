import { useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";

export function Stars({ rating, onSetRating }) {
  const [hoverRating, setHoverRating] = useState();

  const handleMouseEnter = (n) => setHoverRating(n + 1);
  const handleMouseLeave = () => setHoverRating(null);
  const handleClick = (n) => onSetRating(n + 1);
  const isFilled = (n) => hoverRating >= n + 1 || (rating >= n + 1 && !hoverRating);

  return (
    <div className="flex items-center justify-between">
      <div className="flex cursor-pointer gap-1.5" onMouseLeave={handleMouseLeave}>
        {[...Array(10)].map((_, n) => {
          const StarIcon = isFilled(n) ? IoStar : IoStarOutline;
          return (
            <StarIcon
              key={n}
              className="text-2xl text-yellow-300"
              onMouseEnter={() => handleMouseEnter(n)}
              onClick={() => handleClick(n)}
            />
          );
        })}
      </div>

      <span className="mr-2 text-xl text-yellow-300">
        {hoverRating > 0 || rating ? hoverRating || rating : <span className="invisible">10</span>}
      </span>
    </div>
  );
}
