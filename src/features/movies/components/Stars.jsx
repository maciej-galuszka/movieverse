import { useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";

export function Stars({ rating, onSetRating, size = "base" }) {
  const [hoverRating, setHoverRating] = useState();

  const handleMouseEnter = (n) => setHoverRating(n + 1);
  const handleMouseLeave = () => setHoverRating(null);
  const handleClick = (n) => onSetRating(n + 1);
  const isFilled = (n) => hoverRating >= n + 1 || (rating >= n + 1 && !hoverRating);

  if (size === "small") {
    return (
      <div className="flex items-center">
        <div className="flex cursor-pointer gap-1" onMouseLeave={handleMouseLeave}>
          {[...Array(10)].map((_, n) => {
            const StarIcon = isFilled(n) ? IoStar : IoStarOutline;
            return (
              <StarIcon
                key={n}
                className="text-base text-yellow-300 lg:text-lg"
                onMouseEnter={() => handleMouseEnter(n)}
                onClick={() => handleClick(n)}
              />
            );
          })}
        </div>
        <span className="ml-4 text-base text-yellow-300 sm:text-lg">
          {hoverRating > 0 || rating ? (
            hoverRating || rating
          ) : (
            <span className="invisible">10</span>
          )}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <div className="flex cursor-pointer gap-1" onMouseLeave={handleMouseLeave}>
        {[...Array(10)].map((_, n) => {
          const StarIcon = isFilled(n) ? IoStar : IoStarOutline;
          return (
            <StarIcon
              key={n}
              className="text-lg text-yellow-300 md:text-xl lg:text-2xl"
              onMouseEnter={() => handleMouseEnter(n)}
              onClick={() => handleClick(n)}
            />
          );
        })}
      </div>
      <span className="ml-4 text-lg text-yellow-300 sm:text-xl">
        {hoverRating > 0 || rating ? hoverRating || rating : <span className="invisible">10</span>}
      </span>
    </div>
  );
}
