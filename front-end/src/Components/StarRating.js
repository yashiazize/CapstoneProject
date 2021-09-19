import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../Styles/Stars.css";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingScore = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingScore}
              className="rating"
              onClick={() => setRating(ratingScore)}
            />
            <FaStar className="star" 
            color={ratingScore <= (hover || rating) ? "#ff7700" : "#ececec"}
            onMouseEnter={() => setHover(ratingScore)}
            onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      						<p>Rating: {rating}</p>

    </div>
  );
};

export default StarRating;
